# SaveThePaws

**A civic-purpose platform for reporting, categorizing, and facilitating the rescue or adoption of stray, lost, and injured animals in urban environments.**

---

## Overview

SaveThePaws is a Progressive Web Application (PWA) built to address the challenge of urban stray and lost animal populations across all species. Any person with a smartphone and internet access may photograph and report an animal they encounter in a public space. Verified subscribers access full location data, uploader identity, a live map of reported animals, and the ability to formally claim animals for rescue or adoption.

The application is built as a single-file PWA, fully compatible with all modern browsers and packaged for Google Play (Android) and Apple App Store (iOS) via PWABuilder.

---

## App Name Chain — All Files Aligned

| File / Field | Value |
|---|---|
| App display name | SaveThePaws |
| GitHub repository | savethepaws-app |
| GitHub Pages URL | https://yourusername.github.io/savethepaws-app |
| Google Play package ID | com.savethepaws.app |
| PWABuilder package ID | com.savethepaws.app |
| manifest.json `"name"` | SaveThePaws |
| manifest.json `"id"` | com.savethepaws.app |
| sw.js cache name | savethepaws-v1 |
| localStorage key | savethepaws_db_v2 |
| Admin email | admin@savethepaws.app |

---

## User Tiers

| Feature | Visitor | Registered (Free) | Subscriber |
|---|---|---|---|
| Browse full animal feed | Yes | Yes | Yes |
| See animal photos | Yes | Yes | Yes |
| GPS coordinates visible | No — blurred | No — blurred | Yes |
| Uploader name visible | No — blurred | No — blurred | Yes |
| Post animal reports | No | Yes | Yes |
| Edit own description | No | Yes | Yes |
| Map view | No | No | Yes |
| Claim / adopt animals | No | No | Yes |
| Dark / light theme toggle | No | No | Yes |
| Admin dashboard | No | No | Admin only |

---

## Animal Categories

- Cats (domestic and feral)
- Dogs (domestic and stray)
- Birds (domestic and injured)
- Rabbits and small mammals
- Other domestic animals in distress

Condition tags: Healthy, Injured, Lost (has collar), Stray

---

## Post Moderation — Smart Filter

Every submitted report passes two checks before going live:

1. **Keyword check** — The description and animal type are scanned for animal-related terms (in English and Greek). If no keywords match, the post is held for admin review.
2. **Claude AI image analysis** — The photo is sent to the Claude API for animal verification. If the AI returns low confidence or a non-animal result, the post is held for admin review.

Posts that pass both checks go live immediately. Suspicious posts enter a Pending Review queue visible only to administrators.

---

## Subscription Plans

| Plan | Price | Duration |
|---|---|---|
| Weekly | EUR 1.99 | 7 days |
| Monthly | EUR 4.99 | 30 days |
| 3-Month | EUR 11.99 | 90 days |
| Annual | EUR 29.00 | 365 days |

All plans unlock the same features: GPS data, uploader identity, live map, animal claiming, and theme toggle.

---

## Admin Dashboard

The admin panel is accessible only to users with the admin role. It includes:

- **Overview** — live stats: total posts, save rate, subscribers, estimated revenue, active ads
- **Pending Review** — approve or reject flagged and suspicious posts
- **User Management** — promote users to admin, grant subscriptions, remove accounts
- **Post Management** — view, approve, or delete all posts
- **Ad Manager** — create ads (image+link, image+title+desc+link, video, text-only), set feed frequency, activate/pause/delete
- **Notifications** — compose and send in-app banners and push notifications to all users, subscribers only, or free users
- **Donations** — add, manage, and remove linked donation organizations with name, icon, description, and external URL
- **Settings** — adjust subscription pricing, upload limits, keyword threshold

---

## Privacy and Data

- **Visitors**: no cookies, no tracking, session data discarded on browser close
- **Registered free users**: credentials in client-side storage only, no server transmission in v1
- **Subscribers**: data persisted in localStorage after login; no advertising trackers; no third-party analytics
- **Location data**: collected only at upload time with explicit browser permission prompt; displayed to subscribers only; never sold or shared
- **Photos**: stored as base64 in client-side DB in v1; to be migrated to server-side storage in v2

---

## Technology Stack

| Layer | Technology |
|---|---|
| Frontend | Vanilla HTML5, CSS3, JavaScript ES6+ |
| Architecture | Progressive Web App (PWA) |
| AI moderation | Claude API (claude-sonnet-4-6) |
| Storage (v1) | localStorage / sessionStorage |
| Geolocation | W3C Geolocation API |
| Packaging | PWABuilder |
| Hosting | GitHub Pages |
| Push notifications | Web Push API + Service Worker |
| Languages | English + Greek (i18n built-in) |

---

## Repository Structure

```
savethepaws-app/
├── index.html            # Main application (single-file PWA)
├── manifest.json         # Web App Manifest
├── sw.js                 # Service Worker (offline + push)
├── icon-192.png          # PWA icon small
├── icon-512.png          # PWA icon large
├── LICENSE               # MIT License
├── TERMS.md              # Terms and Conditions
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

---

## Deployment — GitHub Pages

1. Upload all files to the `savethepaws-app` repository root.
2. Go to **Settings → Pages → Source**: `main` branch, `/ (root)`.
3. Live URL: `https://yourusername.github.io/savethepaws-app`

## Deployment — Google Play (PWABuilder)

1. Visit [pwabuilder.com](https://pwabuilder.com)
2. Enter: `https://yourusername.github.io/savethepaws-app`
3. Select **Android** → set package ID: `com.savethepaws.app`
4. App name: `SaveThePaws`
5. Signing: **Generate new** — save the keystore permanently
6. Download the `.aab` file
7. Upload to Google Play Console → Production → Create new release

## Deployment — Apple App Store (PWABuilder)

1. Same PWABuilder flow → select **iOS**
2. Requires Apple Developer account (USD 99/year)
3. Submit via Xcode or Transporter

---

## Google Play Store Listing — Ready to Paste

### Short Description (65 / 80 characters)
```
Report, locate and rescue stray animals in your city. Free to use.
```

### Full Description
```
SaveThePaws is a civic platform for reporting, locating, and coordinating the rescue or adoption of stray, lost, and injured animals found in urban environments.

Anyone with a smartphone can photograph and report an animal in seconds. No subscription required to post or browse the feed.

ANIMAL CATEGORIES
- Cats, dogs, birds, rabbits, and other domestic animals
- Tagged by species and condition: healthy, injured, lost, or stray

HOW IT WORKS
1. Spot a stray or injured animal
2. Open SaveThePaws and take a photo
3. Add a short description — GPS location is captured automatically
4. Your report appears instantly in the community feed
5. Subscribers can view full location data and claim the animal

FOR ALL USERS
- Browse the complete animal feed
- Filter by species and condition
- No account required to view

FOR REGISTERED USERS (FREE)
- Submit unlimited animal reports
- Edit your own report descriptions
- No data collected, no cookies for unregistered users

FOR SUBSCRIBERS
- Full GPS coordinates and location details
- Uploader identity and contact
- Live map of all reported animals
- Claim animals for rescue or adoption
- Dark and light theme options

SUBSCRIPTION PLANS
Weekly: EUR 1.99 — Monthly: EUR 4.99 — 3-Month: EUR 11.99 — Annual: EUR 29

PRIVACY
No advertising. No tracking. No third-party analytics. Location data is captured only with your explicit consent and shown only to verified subscribers within the app.

SaveThePaws is an independent civic technology platform. Not affiliated with any government agency or commercial animal service.
```

---

## Google Play Checklist

- [x] PWA with valid Web App Manifest (`manifest.json`)
- [x] HTTPS deployment (GitHub Pages)
- [x] Service Worker registered (`sw.js`)
- [x] Icons at 192x192 and 512x512 (`icon-192.png`, `icon-512.png`)
- [x] Package name: `com.savethepaws.app`
- [x] Privacy Policy / Terms: `TERMS.md` → hosted at GitHub Pages URL `/TERMS`
- [ ] Store listing screenshots (min 2, phone form factor — take on mobile browser)
- [ ] Feature graphic: 1024 x 500 px (create free at canva.com)
- [ ] Content rating questionnaire (complete in Play Console)
- [ ] PWABuilder `.aab` file generated and uploaded

---

## Roadmap

- [ ] Backend API (Node.js + PostgreSQL or Supabase)
- [ ] Real-time push notifications for nearby animal alerts
- [ ] In-app messaging between subscribers and uploaders
- [ ] Stripe payment integration for subscriptions
- [ ] Veterinary partner and NGO verified accounts
- [ ] Multi-city leaderboard (most animals rescued per city)
- [ ] Export reports to PDF for local authority submission
- [ ] Arabic, Turkish, Spanish localization

---

## License

MIT License. See [LICENSE](./LICENSE).

---

## Legal

By using SaveThePaws, users agree to the [Terms and Conditions](./TERMS.md). The platform uses the W3C Geolocation API, which may delegate to Google Location Services on Android devices. See Terms Section 6 for full disclosure.

---

*SaveThePaws is an independent civic technology project. Not affiliated with any government body, animal welfare authority, or commercial entity.*
