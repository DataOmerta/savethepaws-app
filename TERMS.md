# SaveThePaws — Terms and Conditions

**Effective Date:** 1 October 2026
**Last Updated:** 1 October 2026
**Platform:** SaveThePaws
**Live URL:** https://yourusername.github.io/savethepaws-app
**Google Play Package:** com.savethepaws.app
**Operator Contact:** legal@savethepaws.app

---

## 1. Acceptance of Terms

By accessing, installing, or using the SaveThePaws platform in any form — including through a web browser, Progressive Web App (PWA), or native application distributed via the Google Play Store or Apple App Store — you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions in their entirety.

If you do not agree to these Terms, you must discontinue use of the Platform immediately.

---

## 2. Description of Service

SaveThePaws is a civic-purpose digital platform for reporting, cataloguing, and coordinating rescue or adoption efforts for stray, lost, injured, or abandoned animals found in urban public environments.

**2.1 Animal Reporting**
Registered users may photograph and submit reports of animals encountered in public spaces. Each report includes a photograph, species and condition classification, and GPS-derived location data collected with explicit user consent.

**2.2 Public Feed**
All users — including unregistered visitors — may browse the full community animal feed. Photos and descriptions are visible to all. GPS coordinates and uploader identity are visible only to verified subscribers.

**2.3 Subscriber Access**
Subscribed users gain access to GPS coordinates, city and country details, uploader identity, the live animal map, the ability to claim animals, and the theme toggle feature.

**2.4 Animal Claiming**
Subscribed users may formally claim a reported animal, indicating intent to rescue, foster, or adopt. Upon claiming, the post is marked with a Saved status and removed from the active adoption pool.

**2.5 Content Moderation**
All submitted reports pass an automated two-stage filter: keyword analysis and AI-based image verification. Posts that do not pass are held in an admin review queue before going live.

---

## 3. Eligibility and Registration

**3.1 Age**
You must be at least 18 years of age to create an account, subscribe, or claim an animal. Users under 18 may browse the public feed in read-only capacity with parental consent.

**3.2 Registration Requirement for Posting**
Submitting animal reports requires a free registered account. Visitors may not post without registering.

**3.3 Account Accuracy**
You agree to provide accurate and complete information during registration and to maintain the confidentiality of your credentials.

**3.4 Termination**
The Platform may suspend or terminate accounts that violate these Terms, engage in fraudulent activity, or submit false reports.

---

## 4. User-Generated Content

**4.1 Standards**
By submitting content you represent that it is original or you hold rights to submit it, it accurately represents the animal and situation, and it contains no graphic violence, hate speech, nudity, or material unrelated to animal welfare.

**4.2 License**
By submitting content you grant SaveThePaws a non-exclusive, royalty-free, worldwide license to display, store, and transmit that content solely for platform operation. This license terminates on content deletion or account closure.

**4.3 Prohibited Content**
- False or fabricated animal reports
- Content depicting animal cruelty or illegal activity
- Personal data of other individuals submitted without their consent
- Commercial solicitation outside the Platform's subscription model

**4.4 Description Editing**
Registered users may edit the description of their own posts at any time. Posts may not be deleted by uploaders; deletion is handled by administrators only.

**4.5 Moderation**
The Platform reserves the right to review, remove, or restrict any content without prior notice if it violates these Terms.

---

## 5. Subscription Terms

**5.1 Plans and Pricing**

| Plan | Price | Duration |
|---|---|---|
| Weekly | EUR 1.99 | 7 days |
| Monthly | EUR 4.99 | 30 days |
| 3-Month | EUR 11.99 | 90 days |
| Annual | EUR 29.00 | 365 days |

**5.2 Auto-Renewal**
Subscriptions renew automatically at the end of each billing period unless cancelled before the renewal date.

**5.3 Refunds**
Refund requests submitted within 14 days of initial purchase are considered individually. No refunds are issued for auto-renewals unless a demonstrable technical failure occurred on the Platform's end.

**5.4 Sharing Prohibited**
Subscribers may not share, resell, or transfer subscription credentials or access to non-subscribed individuals.

---

## 6. Geolocation Services — Disclosure and Consent

**6.1 W3C Geolocation API**
SaveThePaws uses the Geolocation API standardized by the World Wide Web Consortium (W3C) at https://www.w3.org/TR/geolocation/. This API enables the Platform to request the device's geographic coordinates at the time of an animal report submission.

- Location access is requested only when submitting a new report.
- The browser displays a native permission prompt before any location data is accessed.
- Users may decline geolocation at any time. Manual location entry is available as an alternative.
- Location data is not accessed passively, continuously, or in the background.

**6.2 Google Location Services (Indirect, Device-Level)**
On Android devices and in Chrome-based browsers, the W3C Geolocation API may internally delegate position determination to Google Location Services, a system-level service operated by Google LLC. This delegation occurs at the operating system or browser level and is entirely outside the control of SaveThePaws.

SaveThePaws does not directly integrate with, call, or pass data to any Google API, including Google Maps API, Google Places API, Google Geocoding API, or Firebase.

Users should be aware that their device's interaction with Google's infrastructure is governed by:
- Google Terms of Service: https://policies.google.com/terms
- Google Privacy Policy: https://policies.google.com/privacy

**6.3 Data Handling of Location Information**
- Stored in the client-side local database of the submitting user's device
- Displayed within the Platform exclusively to authenticated subscribers
- Never transmitted to advertising networks, data brokers, or any third party
- Never used to track, profile, or monitor user movements over time
- Associated solely with the specific animal report

**6.4 Consent**
By enabling location access when prompted, you provide explicit, informed consent to the collection and use of your device's geographic coordinates as described above. You may withdraw consent at any time through browser or OS settings.

---

## 7. AI Content Moderation — Disclosure

SaveThePaws uses the Anthropic Claude API (model: claude-sonnet-4-6) to verify that submitted photos contain animals before allowing posts to go live. This process involves:

- Transmitting the submitted image to Anthropic's API over an encrypted HTTPS connection
- Receiving a classification result (animal present: yes/no, confidence level, brief reason)
- No user personal data, account information, or identifying metadata is transmitted alongside the image

By submitting a photo, you consent to this image being processed by the Claude AI API for the sole purpose of content verification. Anthropic's data handling is governed by their Privacy Policy at https://www.anthropic.com/legal/privacy.

---

## 8. Privacy and Data Protection

**8.1 Visitors (No Account)**
No cookies. No persistent identifiers. No tracking. All session data discarded on browser close.

**8.2 Registered Free Users**
Account credentials stored in client-side storage on the user's own device. Not transmitted to an external server in the current version.

**8.3 Subscribers**
Subscription status persisted in localStorage after login. No financial data stored by the Platform. Payment processing handled by a certified third-party provider.

**8.4 No Third-Party Analytics**
SaveThePaws does not use Google Analytics, Meta Pixel, or any equivalent advertising or analytics tracking service.

**8.5 Data Requests**
Users may request access to, correction of, or deletion of their data by contacting legal@savethepaws.app. Requests processed within 30 days in accordance with applicable data protection regulations including GDPR where applicable.

---

## 9. Donations

The Platform provides links to third-party donation organizations. SaveThePaws does not collect, process, or handle any donation funds directly. All donation transactions occur on the linked third-party platforms (PayPal, GoFundMe, or equivalent) and are governed by those platforms' own terms of service. SaveThePaws makes no representations regarding the tax status or operational conduct of listed organizations.

---

## 10. Administrative Advertising

The Platform may display promotional content (ads) created and published by administrators within the animal feed. This content is clearly labeled as Promoted. SaveThePaws does not sell advertising space to third parties. All ads are created and controlled by the Platform operator.

---

## 11. Intellectual Property

The SaveThePaws name, interface design, and original source code are the intellectual property of the Platform operator, licensed under the MIT License. Third-party components retain their respective licenses. Users acquire no intellectual property rights by using the Platform.

---

## 12. Limitation of Liability

SaveThePaws is a coordination tool only. The Platform does not guarantee the accuracy of user-submitted reports, the welfare of animals listed, or the outcome of any rescue or adoption arrangement. To the maximum extent permitted by law, the Platform operator is not liable for indirect, incidental, or consequential damages, actions taken by third parties based on Platform information, harm resulting from information on the Platform, or service interruptions beyond the operator's control.

---

## 13. Governing Law

These Terms are governed by the laws of the jurisdiction in which the Platform operator is registered. EU consumers retain the right to bring proceedings in the courts of their country of residence under EU consumer protection law.

---

## 14. Modifications

The Platform operator may modify these Terms at any time. Changes will be communicated through the Platform interface or by email. Continued use following notification constitutes acceptance.

---

## 15. Contact

**Email:** legal@savethepaws.app
**Repository:** https://github.com/yourusername/savethepaws-app
**Platform:** https://yourusername.github.io/savethepaws-app

---

*These Terms were drafted in accordance with Google Play Developer Program Policies, Apple App Store Review Guidelines, the W3C Geolocation API specification, Anthropic's API usage policies, and the General Data Protection Regulation (EU) 2016/679.*
