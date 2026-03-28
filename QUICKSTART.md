# Quick Start - Mission Control Dashboard

## ⚡ Run Locally (30 seconds)

```bash
cd ~/.openclaw/workspace-control
npm run dev
```

Open: http://localhost:3000
Login: `cc3dxyz`

## 🚀 Deploy to Vercel (5 minutes)

### Via Vercel CLI (fastest)
```bash
npm install -g vercel
vercel --prod
```

### Via GitHub + Vercel Dashboard
```bash
# 1. Initialize repo
cd ~/.openclaw/workspace-control
git init && git add . && git commit -m "Initial"
git branch -M main

# 2. Push to GitHub
git remote add origin https://github.com/USERNAME/mission-control.git
git push -u origin main

# 3. Go to vercel.com → Import project from GitHub
```

## 📊 What's Included

| Card | Link | Status |
|------|------|--------|
| Archive Search | archive-search.vercel.app | ✅ Live with stats |
| Health Tracker | tuckers-tracker.vercel.app | ✅ Active |
| Flipcharts | willowaymedia.vercel.app/flipcharts | ✅ Live |
| Jade HD Skinn Bot | (Dashboard info) | ✅ Online |
| Game Master | (Dashboard info) | ✅ Campaign Active |
| TikTok Clips | (Dashboard info) | ✅ 3 new this week |

## 🔑 Default Login

**Password:** `cc3dxyz`

Change it in `app/page.tsx` line 23:
```typescript
if (password === 'cc3dxyz') {  // ← Change this
```

## 📝 Customize

**Colors:** Edit `tailwind.config.ts`
**Links:** Edit files in `components/cards/`
**Text:** Edit component files directly
**Password:** Edit `app/page.tsx`

## ✅ Build Status

```
✓ Compiled successfully
✓ Next.js 14.2.1
✓ TypeScript configured
✓ Tailwind CSS ready
✓ Production build verified
```

All systems ready to deploy! 🎉
