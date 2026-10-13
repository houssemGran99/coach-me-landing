# Coach Me — landing page

French marketing page for Coach Me (football session planner for academy coaches in Tunisia). It is a standalone Next.js app, separate from the Coach Me app repository.

```bash
pnpm install
cp .env.example .env.local   # then edit
pnpm dev                     # http://localhost:3300
pnpm build && pnpm start
```

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_APP_URL` | where the app lives; the "Se connecter" link goes to `<url>/login` |
| `NEXT_PUBLIC_WAITLIST_ENDPOINT` | the waitlist form POSTs `{ "email": "..." }` here. Nothing is sent while it is empty |
| `NEXT_PUBLIC_SITE_URL` | optional public origin used for metadata |

`static/index.html` is the original single-file HTML version of the page, kept for reference.
