# 🚀 Quick Start: Supabase + Vercel Deployment

## What's Been Done ✅
- ✅ Added `@supabase/supabase-js` dependency to package.json
- ✅ Created Supabase client ([src/lib/supabase.ts](src/lib/supabase.ts)) for browser use
- ✅ Created Supabase admin client ([src/lib/supabase-admin.ts](src/lib/supabase-admin.ts)) for server use
- ✅ Updated queries API ([src/app/api/queries/route.ts](src/app/api/queries/route.ts)) to save to database
- ✅ Created `.env.example` with required variables
- ✅ Created `vercel.json` for Vercel configuration
- ✅ Project builds successfully ✓

## 5-Minute Setup

### 1. Create Supabase Project (5 min)
```
1. Visit https://supabase.com
2. Create a new project
3. Copy 3 keys from Settings → API:
   - Project URL
   - Anon/Public Key
   - Service Role Key
```

### 2. Create Database Table (1 min)
Paste in Supabase SQL Editor:
```sql
CREATE TABLE queries (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
  status VARCHAR(50) DEFAULT 'new'
);

ALTER TABLE queries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public inserts" ON queries FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow service role select" ON queries FOR SELECT USING (auth.role() = 'service_role');
```

### 3. Local Environment (.env.local)
```
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
RESEND_API_KEY=your_resend_key
```

### 4. Test Locally
```bash
npm run dev
# Visit http://localhost:3000
# Try the contact form to test
```

### 5. Deploy to Vercel (2 min)
```
1. Push to GitHub: git push
2. Go to vercel.com → Import Project
3. Select your GitHub repo
4. Add Environment Variables in Vercel settings
5. Click Deploy
```

---

## Environment Variables Reference

| Variable | Type | Where | Purpose |
|----------|------|-------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Public | Browser | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public | Browser | Supabase anonymous key |
| `SUPABASE_SERVICE_ROLE_KEY` | Secret | Server Only | Server-side database access |
| `RESEND_API_KEY` | Secret | Server Only | Email sending |

---

## File Structure

```
src/lib/
├── supabase.ts           # Client: use in browser/frontend
├── supabase-admin.ts     # Server: use in API routes (via getSupabaseAdmin())
└── ...

src/app/api/queries/
└── route.ts              # API endpoint: /api/queries (POST)
```

---

## Testing Checklist

- [ ] Create Supabase account
- [ ] Create project & table
- [ ] Add `.env.local`
- [ ] Run `npm install`
- [ ] Run `npm run dev` and test contact form
- [ ] Push to GitHub
- [ ] Create Vercel project
- [ ] Add environment variables to Vercel
- [ ] Deploy and test again

---

## Support Resources

- **Full Setup Guide**: [SUPABASE_VERCEL_SETUP.md](SUPABASE_VERCEL_SETUP.md)
- **Supabase Docs**: https://supabase.com/docs
- **Vercel Docs**: https://vercel.com/docs
- **Next.js Env Vars**: https://nextjs.org/docs/basic-features/environment-variables

---

**Status**: Ready for Supabase integration and Vercel deployment! 🎉
