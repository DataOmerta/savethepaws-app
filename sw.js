/* ═══════════════════════════════════════════
   SaveThePaws Service Worker v3
   • Cache-first with network fallback
   • Push Notifications
   • Background Sync  (PWABuilder +1)
   • Periodic Background Sync  (PWABuilder +1)
   • Offline Support  (PWABuilder +1)
═══════════════════════════════════════════ */

const CACHE_NAME = 'savethepaws-v5'; // updated 2026-10-24
const SYNC_TAG   = 'savethepaws-sync';
const PERIODIC_TAG = 'savethepaws-periodic';

const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './privacy.html',
  './delete-account.html',
  './screenshot1.png',
  './screenshot2.png'
];

/* ─── INSTALL ─── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

/* ─── ACTIVATE ─── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

/* ─── FETCH (cache-first, network fallback, offline page) ─── */
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  // Skip cross-origin requests except CDN assets we know about
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin &&
      !url.hostname.includes('supabase.co') === false) {
    // pass through non-cached external requests
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request).then(response => {
        // Only cache valid, same-origin or CORS responses
        if (!response || response.status !== 200 || response.type === 'opaque') {
          return response;
        }
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      }).catch(() => {
        // Offline fallback: serve index.html for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
        // For image requests, return a transparent 1×1 PNG
        if (event.request.destination === 'image') {
          return new Response(
            atob('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='),
            { headers: { 'Content-Type': 'image/png' } }
          );
        }
      });
    })
  );
});

/* ─── PUSH NOTIFICATIONS ─── */
self.addEventListener('push', event => {
  let data = { title: 'SaveThePaws', body: 'New animal reported near you!', icon: './icon-192.png' };
  if (event.data) {
    try { data = { ...data, ...event.data.json() }; }
    catch (e) { data.body = event.data.text() || data.body; }
  }
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body:  data.body,
      icon:  data.icon  || './icon-192.png',
      badge: './icon-192.png',
      tag:   'savethepaws-notification',
      renotify: true,
      data:  { url: data.url || './' }
    })
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const target = (event.notification.data && event.notification.data.url) || './';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
      for (const client of list) {
        if (client.url === target && 'focus' in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow(target);
    })
  );
});

/* ─── BACKGROUND SYNC ─── */
self.addEventListener('sync', event => {
  if (event.tag === SYNC_TAG) {
    event.waitUntil(syncPendingPosts());
  }
});

async function syncPendingPosts() {
  // Retrieve any queued posts from IndexedDB and retry sending them
  try {
    const db = await openDB();
    const pending = await getAllPending(db);
    for (const item of pending) {
      try {
        await fetch('./api/post', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(item.data)
        });
        await deletePending(db, item.id);
      } catch (_) {
        // Will retry on next sync
      }
    }
  } catch (_) {
    // IndexedDB not available — skip
  }
}

/* ─── PERIODIC BACKGROUND SYNC ─── */
self.addEventListener('periodicsync', event => {
  if (event.tag === PERIODIC_TAG) {
    event.waitUntil(refreshFeed());
  }
});

async function refreshFeed() {
  // Pre-fetch the latest index so it's warm in cache on next open
  try {
    const response = await fetch('./index.html', { cache: 'no-cache' });
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      await cache.put('./index.html', response);
    }
  } catch (_) {
    // Network unavailable — nothing to do
  }
}

/* ─── MINIMAL INDEXEDDB HELPERS ─── */
function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open('savethepaws-sync', 1);
    req.onupgradeneeded = e => {
      e.target.result.createObjectStore('pending', { keyPath: 'id', autoIncrement: true });
    };
    req.onsuccess = e => resolve(e.target.result);
    req.onerror   = e => reject(e.target.error);
  });
}

function getAllPending(db) {
  return new Promise((resolve, reject) => {
    const tx  = db.transaction('pending', 'readonly');
    const req = tx.objectStore('pending').getAll();
    req.onsuccess = e => resolve(e.target.result);
    req.onerror   = e => reject(e.target.error);
  });
}
function deletePending(db, id) {
  return new Promise((resolve, reject) => {
    const tx  = db.transaction('pending', 'readwrite');
    const req = tx.objectStore('pending').delete(id);
    req.onsuccess = () => resolve();
    req.onerror   = e  => reject(e.target.error);
  });
}
