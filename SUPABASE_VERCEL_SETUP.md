# Supabase + Vercel Integration Guide

## Overview
Your Nexovian Digital project has been configured to use Supabase as the backend database and is ready for Vercel deployment.

---

## 📋 Step 1: Set Up Supabase

### 1.1 Create a Supabase Account
1. Go to [supabase.com](https://supabase.com)
2. Sign up or log in
3. Create a new project
4. Choose a region close to your users
5. Set a strong database password (save this!)

### 1.2 Get Your Supabase Credentials
Once your project is created:
1. Go to **Settings → API** in your Supabase dashboard
2. Copy the following values:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **Anon/Public Key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **Service Role Key** → `SUPABASE_SERVICE_ROLE_KEY` (keep this secret!)

### 1.3 Create Database Tables
In your Supabase dashboard, go to **SQL Editor** and run this query:

```sql
-- Create queries table for storing contact form submissions
CREATE TABLE queries (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
  status VARCHAR(50) DEFAULT 'new'
);

-- Enable RLS (Row Level Security)
ALTER TABLE queries ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from authenticated users
CREATE POLICY "Allow public inserts" ON queries
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow service role to select all
CREATE POLICY "Allow service role select" ON queries
  FOR SELECT
  USING (auth.role() = 'service_role');
```

---

## 📝 Step 2: Configure Environment Variables

### 2.1 Local Development (.env.local)
Create a `.env.local` file in your project root with:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
RESEND_API_KEY=your_resend_api_key_here
```

**Note:** 
- `NEXT_PUBLIC_*` variables are exposed to the browser (use only public keys)
- `SUPABASE_SERVICE_ROLE_KEY` must never be exposed to the client
- Never commit `.env.local` to git (it's in `.gitignore`)

---

## 🚀 Step 3: Deploy on Vercel

### 3.1 Prepare Your Project
```bash
# Install dependencies including Supabase SDK
npm install

# Test locally
npm run dev
```

### 3.2 Push to GitHub (Required for Vercel)
```bash
git init
git add .
git commit -m "Initial commit with Supabase integration"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

### 3.3 Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "Add New..." → "Project"
4. Select your repository
5. Click "Import"

### 3.4 Add Environment Variables in Vercel
In the Vercel dashboard:
1. Go to **Settings → Environment Variables**
2. Add these variables:
   - `NEXT_PUBLIC_SUPABASE_URL` (Public)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` (Public)
   - `SUPABASE_SERVICE_ROLE_KEY` (Secret)
   - `RESEND_API_KEY` (Secret)

3. Click "Deploy"

---

## ✅ Step 4: Verify Integration

### Test Contact Form
1. Visit your deployed site
2. Fill out the contact form
3. Check Supabase dashboard:
   - Go to **Editor → queries table**
   - Verify your submission appears
4. Check your email for the notification

### Test Database Connection
Check Vercel logs:
1. Go to Vercel project dashboard
2. Click "Deployments"
3. Select the latest deployment
4. View **Function logs** to see any errors

---

## 📊 Project Structure

```
src/
├── lib/
│   ├── supabase.ts              # Client-side Supabase instance
│   └── supabase-admin.ts        # Server-side admin client
├── app/
│   ├── api/
│   │   └── queries/
│   │       └── route.ts         # API endpoint for storing queries
│   └── ...
└── ...
```

---

## 🔒 Security Best Practices

1. **Never** commit `.env.local` to git
2. **Always** use Row Level Security (RLS) policies in Supabase
3. **Restrict** the Service Role Key to server-side operations only
4. **Rotate** API keys regularly
5. **Enable** Supabase's built-in authentication for future features

---

## 🛠️ Useful Commands

```bash
# Local development
npm run dev

# Build for production
npm run build

# Production server
npm start

# Lint code
npm run lint
```

---

## 📚 Useful Resources

- [Supabase Docs](https://supabase.com/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
- [Supabase Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)

---

## 🐛 Troubleshooting

### Issue: "Cannot find module '@supabase/supabase-js'"
**Solution:** Run `npm install` to install the new dependency

### Issue: Environment variables not loading
**Solution:** 
- Restart your dev server with `npm run dev`
- Check `.env.local` is in the root directory
- Ensure variable names match exactly

### Issue: Queries not saving to Supabase
**Solution:**
- Verify `SUPABASE_SERVICE_ROLE_KEY` is set correctly
- Check Supabase database connection in Vercel logs
- Ensure RLS policies allow inserts

### Issue: "401 Unauthorized" from Supabase
**Solution:**
- Verify anon key is set in environment variables
- Check that your Supabase project is active
- Ensure API permissions are configured

---

## 🎯 Next Steps

1. ✅ Set up Supabase account and project
2. ✅ Create database tables
3. ✅ Add environment variables locally
4. ✅ Install dependencies: `npm install`
5. ✅ Test locally: `npm run dev`
6. ✅ Push to GitHub
7. ✅ Deploy to Vercel
8. ✅ Add environment variables to Vercel
9. ✅ Test the deployment

Happy deploying! 🎉
