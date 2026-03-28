# Mission Control Dashboard

A centralized control hub for all projects - Archive Search, Health Tracker, Flipcharts, HD Skinn Bot, Game Master, and TikTok Clips.

## Features

✅ Password-protected dashboard (password: `cc3dxyz`)
✅ Dark theme with professional layout
✅ Cards for all project links and stats
✅ Archive integration with live stats
✅ Responsive grid layout
✅ Built with Next.js 14 + Tailwind CSS

## Project Cards

1. **Archive Search** - File indexing with stats (total files, last indexed)
2. **Health Tracker** - Fitness metrics dashboard
3. **Flipcharts** - Interactive presentation content
4. **Jade HD Skinn Bot** - Business assistant for esthetician services
5. **Game Master** - Campaign and game status
6. **TikTok Clips** - Recent content management

## Local Development

```bash
cd ~/.openclaw/workspace-control

# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` and login with password `cc3dxyz`.

## Deployment to Vercel

### Option 1: Using Vercel CLI

```bash
npm install -g vercel
vercel login
vercel deploy
```

### Option 2: Using Git + Vercel Web

1. Initialize git repo:
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Push to GitHub and connect to Vercel dashboard

3. Vercel will auto-detect Next.js and deploy

## Environment Variables

Currently using placeholder data. To add Supabase integration for archive stats:

```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

Then update `components/Dashboard.tsx` to fetch from Supabase.

## Project Structure

```
.
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page with auth
│   └── globals.css      # Global styles
├── components/
│   ├── Dashboard.tsx    # Main dashboard
│   ├── Header.tsx       # Top navigation
│   ├── LoginModal.tsx   # Password login
│   ├── Card.tsx         # Base card component
│   ├── CardGrid.tsx     # Grid container
│   └── cards/           # Individual project cards
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
└── postcss.config.js
```

## Customization

- Change password: Edit `app/page.tsx` line with `'cc3dxyz'`
- Update project links: Edit cards in `components/cards/`
- Modify styling: Edit `tailwind.config.ts` and `app/globals.css`

## License

MIT
