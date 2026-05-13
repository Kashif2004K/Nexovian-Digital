# 📋 Deployment Checklist

## Phase 1: Supabase Setup ✅

- [ ] **Create Supabase Account**
  - Go to https://supabase.com
  - Sign up with email/GitHub
  - Create a new project

- [ ] **Get API Credentials**
  - Go to Settings → API
  - Copy Project URL
  - Copy Anon/Public Key
  - Copy Service Role Key (keep secret!)

- [ ] **Create Database Table**
  - Go to SQL Editor
  - Run the SQL from QUICK_START.md
  - Enable Row Level Security (RLS)

---

## Phase 2: Local Configuration ✅

- [ ] **Create `.env.local`**
  - Copy from `.env.example`
  - Fill in Supabase credentials
  - Add Resend API key

- [ ] **Install Dependencies**
  ```bash
  npm install
  ```

- [ ] **Test Locally**
  ```bash
  npm run dev
  ```
  - Visit http://localhost:3000
  - Fill out contact form
  - Check browser console for errors

- [ ] **Verify Database Connection**
  - Submit form
  - Check Supabase dashboard → queries table
  - Confirm data appears

---

## Phase 3: GitHub Setup ✅

- [ ] **Initialize Git** (if not already done)
  ```bash
  git init
  git add .
  git commit -m "Add Supabase integration"
  ```

- [ ] **Create GitHub Repository**
  - Go to https://github.com/new
  - Create new repo (name it your-project-name)
  - Copy the remote URL

- [ ] **Push Code**
  ```bash
  git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
  git branch -M main
  git push -u origin main
  ```

- [ ] **Verify on GitHub**
  - Check that all files are there
  - `.env.local` should NOT be visible (it's in .gitignore)

---

## Phase 4: Vercel Deployment ✅

- [ ] **Connect GitHub to Vercel**
  - Go to https://vercel.com
  - Sign up with GitHub
  - Authorize GitHub connection

- [ ] **Import Project**
  - Click "Add New..." → "Project"
  - Select your GitHub repository
  - Click "Import"

- [ ] **Add Environment Variables**
  - In Vercel Project Settings → Environment Variables
  - Add these variables (mark as needed):
    - `NEXT_PUBLIC_SUPABASE_URL` (Public)
    - `NEXT_PUBLIC_SUPABASE_ANON_KEY` (Public)
    - `SUPABASE_SERVICE_ROLE_KEY` (Secret/Production)
    - `RESEND_API_KEY` (Secret/Production)

- [ ] **Deploy**
  - Click "Deploy"
  - Wait for build to complete (~2-3 minutes)
  - Check deployment logs for errors

---

## Phase 5: Verification ✅

- [ ] **Test Deployment**
  - Click "Visit" to go to live site
  - Fill out contact form
  - Check Supabase database for new entry
  - Check email for notification

- [ ] **Monitor Logs**
  - Go to Vercel dashboard
  - Click on deployment
  - Check Function logs for any errors
  - Set up error alerts if needed

- [ ] **Performance Check**
  - Visit site from different devices
  - Test on mobile/desktop
  - Check page load speed

---

## Phase 6: Ongoing Maintenance

- [ ] **Set Up Monitoring**
  - Vercel Analytics (free tier available)
  - Supabase Database Backups
  - Email alerts for errors

- [ ] **Security Review**
  - Rotate API keys regularly
  - Monitor Supabase logs for unauthorized access
  - Keep dependencies updated: `npm update`

- [ ] **Regular Backups**
  - Enable Supabase automated backups
  - Download backups monthly

---

## 🔧 Troubleshooting Quick Links

**Build Fails on Vercel:**
- Check environment variables are set
- Verify `.env.local` is in `.gitignore`
- View Vercel build logs for specific errors

**Contact Form Not Saving:**
- Verify Supabase connection is working
- Check RLS policies allow inserts
- Look at Vercel function logs

**Deployment Issues:**
- Clear Vercel cache: Project Settings → Advanced → Clear Cache
- Rebuild: Redeploy from Git
- Check Node.js version matches locally

---

## 📚 Documentation Files

- **Full Setup Guide**: `SUPABASE_VERCEL_SETUP.md`
- **Quick Reference**: `QUICK_START.md`
- **This Checklist**: `DEPLOYMENT_CHECKLIST.md`

---

## 📊 Project Status

| Component | Status |
|-----------|--------|
| Supabase Integration | ✅ Configured |
| Database Schema | ⏳ Not Created (Do This First) |
| Environment Variables | ⏳ Not Set (Do This Locally) |
| Local Testing | ⏳ Pending |
| GitHub Push | ⏳ Pending |
| Vercel Deployment | ⏳ Pending |

---

## ⏱️ Estimated Total Time

- Supabase Setup: **5 minutes**
- Local Configuration: **10 minutes**
- GitHub Push: **2 minutes**
- Vercel Deployment: **3 minutes**
- Testing: **5 minutes**

**Total: ~25 minutes** ⚡

---

## 🎯 Next Immediate Action

> 👉 **Start with Phase 1**: Create a Supabase account and copy your API credentials to `.env.local`

---

**Questions?** Check `SUPABASE_VERCEL_SETUP.md` for detailed instructions on each step.
