# Deployment Guide - Mission Control Dashboard

## Quick Start (Local)

```bash
cd ~/.openclaw/workspace-control
npm install
npm run dev
```

Then visit `http://localhost:3000` and login with `cc3dxyz`.

## Deploy to Vercel (Recommended)

### Step 1: Prepare Repository

```bash
cd ~/.openclaw/workspace-control
git init
git add .
git commit -m "Initial: Mission Control Dashboard"
git branch -M main
```

### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new public repo called `mission-control`
3. Add the remote and push:

```bash
git remote add origin https://github.com/YOUR_USERNAME/mission-control.git
git push -u origin main
```

### Step 3: Deploy to Vercel

**Option A: Using Vercel Dashboard**
1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Import the GitHub repository
4. Vercel will auto-detect Next.js
5. Click "Deploy"

**Option B: Using Vercel CLI**
```bash
npm install -g vercel
vercel login
cd ~/.openclaw/workspace-control
vercel --prod
```

### Step 4: Configure Domain (Optional)

In Vercel dashboard:
1. Go to your project settings
2. Add a custom domain (e.g., mission-control.yoursite.com)
3. Update DNS records as directed

## Production Build Check

```bash
cd ~/.openclaw/workspace-control
npm run build
# Should complete without errors
```

## Environment Variables (if needed)

Create `.env.local` for development:
```
NEXT_PUBLIC_ARCHIVE_URL=https://archive-search.vercel.app
NEXT_PUBLIC_TRACKER_URL=https://tuckers-tracker.vercel.app/
NEXT_PUBLIC_FLIPCHARTS_URL=https://willowaymedia.vercel.app/flipcharts
```

## Monitoring

- Check Vercel dashboard for deployment status
- View logs in Vercel: Dashboard → Your Project → Deployments
- Check errors: Vercel → Settings → Limits & Logs

## Updating After Deployment

After deploying to Vercel, future updates are automatic:
1. Make changes locally
2. Commit: `git add . && git commit -m "Update message"`
3. Push: `git push origin main`
4. Vercel auto-deploys on push

## Password Management

Current password: `cc3dxyz`

To change:
1. Edit `app/page.tsx` 
2. Find line: `if (password === 'cc3dxyz')`
3. Replace with new password
4. Rebuild and redeploy

## Troubleshooting

**Build fails on Vercel:**
- Check Node.js version matches (18+)
- Verify all dependencies are in package.json
- Check `tsconfig.json` is valid

**Page loads blank:**
- Check browser console for errors
- Verify localStorage works
- Clear cache and try incognito window

**Links not working:**
- Verify target URLs are live
- Check CORS if embedding content
- Test links manually in new tab

## Support

For issues:
1. Check Vercel deployment logs
2. Run `npm run build` locally
3. Test with `npm run dev` first
