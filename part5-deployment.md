# 🟠 Part 5: Deployment & Real Project

> **រយៈពេល:** 6 Lessons (~3 weeks)
> **តម្រូវការមុន:** Part 4 (Full-Stack Project)
> **លទ្ធផល:** អាចដាក់ Website ប្រើប្រាស់ពិតបាន
> **Major Project:** Deploy Full-Stack App Live

---

## Lesson 39: Environment & Build Process

### គោលបំណង (Objectives)
- យល់ដឹងពី Development vs Production Environment
- អាច Build React App សម្រាប់ Production

### មាតិកា (Topics)
- **Development vs Production**
  | Feature | Development | Production |
  |---------|-------------|------------|
  | Errors | Detailed | Generic |
  | Speed | Slower (hot reload) | Optimized |
  | Source Maps | Yes | No (or hidden) |
  | API URL | localhost | Real domain |
  | Debug Tools | Enabled | Disabled |
- **Environment Variables**
  - `.env` — Default
  - `.env.development` — Dev only
  - `.env.production` — Production only
  - `.env.example` — Template (committed to Git)
  ```
  # .env.example
  VITE_API_URL=
  PORT=
  MONGO_URI=
  JWT_SECRET=
  ```
- **Frontend Build**
  ```bash
  npm run build    # Creates /dist folder
  npm run preview  # Preview production build locally
  ```
  - Build output analysis
  - Code splitting basics (React.lazy, Suspense)
- **Backend Preparation**
  - `process.env.NODE_ENV`
  - Conditional CORS
  - Serve static files from frontend build
  ```js
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/dist'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve('client', 'dist', 'index.html'));
    });
  }
  ```
- **npm Scripts**
  ```json
  {
    "scripts": {
      "dev": "nodemon server.js",
      "start": "node server.js",
      "build": "cd client && npm run build"
    }
  }
  ```

### លំហាត់ (Exercise)
- បង្កើត `.env.example` សម្រាប់ Client & Server
- Build React App ហើយ Preview Locally
- Configure Express ដើម្បី Serve Frontend Build
- Run Full App ពី Server Alone (Backend serves Frontend)

---

## Lesson 40: Frontend Deployment

### គោលបំណង (Objectives)
- អាច Deploy Frontend ទៅ Vercel / Netlify
- យល់ដឹងពី CI/CD មូលដ្ឋាន

### មាតិកា (Topics)
- **Deployment Options**
  | Platform | Best For | Free Tier |
  |----------|----------|-----------|
  | Vercel | React/Next.js | Yes |
  | Netlify | Static Sites | Yes |
  | GitHub Pages | Simple HTML | Yes |
- **Deploy to Vercel**
  1. Push Code to GitHub
  2. Go to vercel.com → Import Project
  3. Connect GitHub Repository
  4. Configure:
     - Framework Preset: Vite
     - Build Command: `npm run build`
     - Output Directory: `dist`
  5. Add Environment Variables
  6. Deploy!
- **Deploy to Netlify** (Alternative)
  1. Go to netlify.com → Add New Site
  2. Connect GitHub Repository
  3. Configure Build Settings
  4. Add Environment Variables
  5. Deploy!
- **Custom Domain**
  - Adding custom domain
  - DNS Configuration (A Record, CNAME)
  - SSL Certificate (auto)
- **CI/CD Basics**
  - Auto Deploy on Git Push
  - Preview Deployments (Pull Requests)
  - Rollback to Previous Version
- **Common Issues**
  - SPA Routing (404 on refresh) → Add `_redirects` or `vercel.json`
  - Environment Variables not loading
  - Build failures

### លំហាត់ (Exercise)
- Deploy Mini Project (Part 2) ទៅ Vercel
- Setup Auto Deploy from GitHub
- Configure Environment Variables
- Test Deployed Site on Mobile

---

## Lesson 41: Backend Deployment

### គោលបំណង (Objectives)
- អាច Deploy Backend ទៅ Cloud Platform
- Configure Production Database

### មាតិកា (Topics)
- **Backend Deployment Options**
  | Platform | Best For | Free Tier |
  |----------|----------|-----------|
  | Railway | Node.js Apps | Limited |
  | Render | Web Services | Yes |
  | Fly.io | Containers | Yes |
- **MongoDB Atlas Production**
  - Create Production Cluster
  - Configure Network Access (Allow from anywhere or specific IPs)
  - Create Database User
  - Get Production Connection String
- **Deploy to Railway**
  1. Go to railway.app → New Project
  2. Connect GitHub Repository
  3. Add Environment Variables:
     ```
     PORT=3000
     MONGO_URI=mongodb+srv://...
     JWT_SECRET=your_production_secret
     NODE_ENV=production
     ```
  4. Deploy!
- **Deploy to Render** (Alternative)
  1. Go to render.com → New Web Service
  2. Connect GitHub Repository
  3. Configure:
     - Build Command: `npm install`
     - Start Command: `node server.js`
  4. Add Environment Variables
  5. Deploy!
- **Post-Deployment**
  - Test API with Postman (production URL)
  - Update Frontend API URL
  - Check Logs for Errors
- **Full-Stack Deploy**
  - Option 1: Separate (Frontend: Vercel, Backend: Railway)
  - Option 2: Combined (Backend serves Frontend build)

### លំហាត់ (Exercise)
- Setup MongoDB Atlas Production Cluster
- Deploy Backend to Railway or Render
- Update Frontend `.env` with Production API URL
- Deploy Full-Stack Application (Frontend + Backend)

---

## Lesson 42: Testing មូលដ្ឋាន

### គោលបំណង (Objectives)
- យល់ដឹងពី Testing Concepts
- អាចសរសេរ Basic Tests

### មាតិកា (Topics)
- **ហេតុអ្វីត្រូវ Test?**
  - Catch bugs before production
  - Confidence in code changes
  - Documentation through tests
- **Types of Testing**
  | Type | What | Tools |
  |------|------|-------|
  | Unit Test | Single function | Jest, Vitest |
  | Integration Test | API endpoints | Supertest |
  | E2E Test | Full user flow | Cypress, Playwright |
- **Unit Testing with Vitest** (Frontend)
  ```bash
  npm install -D vitest
  ```
  ```js
  // utils.test.js
  import { describe, it, expect } from 'vitest';
  import { formatPrice, validateEmail } from './utils';

  describe('formatPrice', () => {
    it('should format number to currency', () => {
      expect(formatPrice(1000)).toBe('$10.00');
    });

    it('should handle zero', () => {
      expect(formatPrice(0)).toBe('$0.00');
    });
  });
  ```
- **API Testing with Postman**
  - Automated Test Scripts
  - Test Collections
  - Environment Variables
  ```js
  // Postman Test Script
  pm.test("Status code is 200", () => {
    pm.response.to.have.status(200);
  });
  pm.test("Response has data", () => {
    const json = pm.response.json();
    pm.expect(json.data).to.be.an('array');
  });
  ```
- **API Testing with Supertest** (Backend)
  ```bash
  npm install -D vitest supertest
  ```
  ```js
  import { describe, it, expect } from 'vitest';
  import request from 'supertest';
  import app from '../app.js';

  describe('GET /api/products', () => {
    it('should return all products', async () => {
      const res = await request(app).get('/api/products');
      expect(res.status).toBe(200);
      expect(res.body.data).toBeDefined();
    });
  });
  ```

### លំហាត់ (Exercise)
- សរសេរ Unit Tests សម្រាប់ Utility Functions (5+ tests)
- បង្កើត Postman Test Collection សម្រាប់ API
- សរសេរ API Tests ដោយប្រើ Supertest (3+ endpoints)
- Run Tests & Fix Failures

---

## Lesson 43: Performance & Security

### គោលបំណង (Objectives)
- អាច Optimize Website Performance
- យល់ដឹងពី Security មូលដ្ឋាន

### មាតិកា (Topics)
- **Frontend Performance**
  - **Lazy Loading** (Routes & Components)
    ```jsx
    const ProductPage = React.lazy(() => import('./pages/ProductPage'));

    <Suspense fallback={<Loading />}>
      <ProductPage />
    </Suspense>
    ```
  - **Image Optimization**
    - Compress images (WebP format)
    - Lazy load images (`loading="lazy"`)
    - Responsive images (srcset)
  - **Memoization**
    - `React.memo()` — Prevent unnecessary re-renders
    - `useMemo()` — Cache expensive calculations
    - `useCallback()` — Cache functions
  - **Bundle Size** — Analyze with `vite-plugin-visualizer`
- **Backend Performance**
  - Database Indexing
    ```js
    userSchema.index({ email: 1 });
    productSchema.index({ name: 'text', category: 1 });
    ```
  - Query Optimization (select, lean)
  - Response Compression
    ```bash
    npm install compression
    ```
- **Security Basics**
  - **Helmet** — Set Security Headers
    ```bash
    npm install helmet
    ```
    ```js
    app.use(helmet());
    ```
  - **Rate Limiting** — Prevent Brute Force
    ```bash
    npm install express-rate-limit
    ```
    ```js
    const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
    app.use('/api', limiter);
    ```
  - **Data Sanitization** — Prevent NoSQL Injection
    ```bash
    npm install express-mongo-sanitize
    ```
  - **XSS Protection**
  - **HTTPS** (Auto with Vercel/Railway)
- **Lighthouse Audit**
  - Chrome DevTools → Lighthouse
  - Performance, Accessibility, SEO scores

### លំហាត់ (Exercise)
- បន្ថែម Lazy Loading ទៅ React Routes
- បន្ថែម Helmet, Rate Limiter, Data Sanitization ទៅ Backend
- បន្ថែម Database Indexes
- Run Lighthouse Audit & Improve Score

---

## Lesson 44: Debug & Troubleshooting

### គោលបំណង (Objectives)
- អាចស្វែងរក និង Fix Bugs បានលឿន
- យល់ដឹងពី Common Errors & Solutions

### មាតិកា (Topics)
- **Frontend Debugging**
  - Chrome DevTools (Elements, Console, Network, Application)
  - React DevTools Extension
  - `console.log` Strategy (ប្រើប្រកបដោយប្រសិទ្ធភាព)
  - Network Tab (Check API calls, Status, Response)
  - Breakpoints & Step Through Code
- **Backend Debugging**
  - Server Logs (`console.log`, Morgan logger)
    ```bash
    npm install morgan
    ```
    ```js
    app.use(morgan('dev'));
    ```
  - Postman for API Testing
  - MongoDB Compass for Data Inspection
  - VS Code Debugger (Node.js)
- **Common Errors & Solutions**
  | Error | Cause | Solution |
  |-------|-------|----------|
  | CORS Error | Missing CORS config | Add cors middleware |
  | 404 Not Found | Wrong URL/Route | Check route path |
  | 401 Unauthorized | Missing/Invalid Token | Check auth header |
  | 500 Server Error | Backend crash | Check server logs |
  | Cannot read property of undefined | Null reference | Add optional chaining |
  | Module not found | Missing package | `npm install` |
  | MongoDB connection error | Wrong URI/Network | Check Atlas settings |
  | Build fails | Syntax/Import error | Check build logs |
- **Debugging Strategy**
  1. Read the error message carefully
  2. Identify where the error occurs (Frontend or Backend)
  3. Check Network Tab (is API returning correct data?)
  4. Add console.log at key points
  5. Google the error message
  6. Check Stack Overflow / GitHub Issues
- **Logging for Production**
  - Different log levels (info, warn, error)
  - Check deployment platform logs

### លំហាត់ (Exercise)
- Intentionally break the app (3 different bugs) ហើយ Debug
- Setup Morgan Logger ក្នុង Backend
- Practice using Chrome DevTools Network Tab
- Fix 5 common errors (prepare exercise with bugs)

---

## 🎯 Major Project Milestone: Deploy Live

### តម្រូវការ (Requirements)
1. Full-Stack App ពី Part 4 ត្រូវ Deploy Live
2. Frontend on Vercel/Netlify
3. Backend on Railway/Render
4. MongoDB Atlas Production
5. Custom Domain (Optional)
6. Basic Tests Written

### វាយតម្លៃ (Evaluation)
- [ ] Website accessible via Public URL
- [ ] All CRUD operations work in production
- [ ] Authentication works in production
- [ ] Images load correctly
- [ ] Responsive on mobile devices
- [ ] No console errors
- [ ] Security packages installed (Helmet, Rate Limit)
- [ ] Environment Variables configured correctly
- [ ] Basic tests passing
