# <App> website launch

State file for the app-landing-page skill. Read this first when resuming.

## Facts

- App: <name> · App Store ID: <id> · price model: <free + subscription / paid>
- Head keyword: <phrase> · landing-page phrases: <a>, <b>
- Features (only these may be claimed): …
- Does NOT do: …
- Data practices (for privacy page): …
- Repo: mripston/<slug> · folder: app-landing-pages/<slug>

## Stages

- [ ] 1. Facts collected
- [ ] 2. Domain chosen: <domain> (registrar: Porkbun) — shortlist: …
- [ ] 2b. HUMAN: domain registered
- [ ] 3. Site built, verify_build passes (--no-analytics)
- [ ] 4. Published to GitHub, Pages enabled
- [ ] 5a. DNS records set, check_dns passes
- [ ] 5b. Custom domain + HTTPS enforced
- [ ] 5c. HUMAN: GA4 property created → gaId: <G-…>, deployed
- [ ] 5d. HUMAN: app_store_click marked key event, custom dimensions added
- [ ] 5e. HUMAN: Search Console verified, sitemap submitted
- [ ] 6. check_dns prints LIVE; ASC URLs updated
- [ ] 7. blog-autopost set up, first post live

## Log

- <date>: …

## Tripstamp status
- Published at https://mripston.github.io/tripstamp-landing/ (no custom domain; base path handled by scripts/rebase.mjs, set BASE="" when a domain is attached).
- Privacy and terms are the studio-wide pages https://www.streamlinedstudios.com/privacy/ and /terms/. No per-app copies.
- GA, Search Console, blog autopost: not set up.
