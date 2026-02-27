# 🔵 Part 3: Backend Development

> **រយៈពេល:** 10 Lessons (~5 weeks)
> **តម្រូវការមុន:** Part 2 (JavaScript ES6+, React មូលដ្ឋាន)
> **លទ្ធផល:** អាចបង្កើត Backend System
> **Mini Project:** Complete REST API with Authentication

---

## Lesson 21: Node.js មូលដ្ឋាន

### គោលបំណង (Objectives)
- យល់ដឹងពី Node.js Runtime
- អាចប្រើ npm និង Modules

### មាតិកា (Topics)
- **Node.js ជាអ្វី?**
  - JavaScript Runtime ក្រៅ Browser
  - V8 Engine
  - Non-blocking I/O
- **ដំឡើង Node.js & npm**
  - `node -v`, `npm -v`
  - `node` REPL
- **npm (Node Package Manager)**
  - `npm init -y` — បង្កើត package.json
  - `npm install package-name`
  - `npm install -D package-name` (devDependencies)
  - package.json & package-lock.json
  - node_modules & .gitignore
- **Modules**
  - CommonJS: `require()` / `module.exports`
  - ES Modules: `import` / `export` (with `"type": "module"`)
- **Built-in Modules**
  - `fs` — File System (readFile, writeFile)
  - `path` — File Paths (join, resolve)
  - `os` — Operating System Info
- **Running Scripts**
  - `node filename.js`
  - npm scripts in package.json

### លំហាត់ (Exercise)
- បង្កើត Node.js project ជាមួយ npm init
- សរសេរ Script ដែល Read/Write File ដោយប្រើ `fs`
- បង្កើត Module ផ្ទាល់ខ្លួន ហើយ Import ប្រើ

---

## Lesson 22: Express.js មូលដ្ឋាន

### គោលបំណង (Objectives)
- អាចបង្កើត Web Server ដោយប្រើ Express
- យល់ដឹងពី Routing & Middleware

### មាតិកា (Topics)
- **Express ជាអ្វី? ហេតុអ្វីប្រើ Express?**
- **Setup**
  ```bash
  npm install express
  ```
  ```js
  import express from 'express';
  const app = express();
  app.listen(3000, () => console.log('Server running on port 3000'));
  ```
- **Routing**
  ```js
  app.get('/api/users', (req, res) => { ... });
  app.post('/api/users', (req, res) => { ... });
  app.put('/api/users/:id', (req, res) => { ... });
  app.delete('/api/users/:id', (req, res) => { ... });
  ```
- **Request Object**
  - `req.params` — URL Parameters
  - `req.query` — Query Strings
  - `req.body` — Request Body
- **Response Object**
  - `res.json()` — Send JSON
  - `res.status()` — Set Status Code
  - `res.send()` — Send Response
- **Middleware**
  - `app.use(express.json())` — Parse JSON Body
  - Custom Middleware
  - `app.use()` — Global Middleware
- **nodemon** — Auto-restart Server
  ```bash
  npm install -D nodemon
  ```
- **Router** — Organize Routes
  ```js
  const router = express.Router();
  router.get('/', getUsers);
  export default router;
  ```

### លំហាត់ (Exercise)
- បង្កើត Express Server ដែលមាន 3 Routes
- បង្កើត API ដែល Return JSON Data (Array of Users)
- សរសេរ Custom Logger Middleware
- រៀបចំ Routes ដោយប្រើ Router

---

## Lesson 23: REST API Design

### គោលបំណង (Objectives)
- យល់ដឹងពី REST API Principles
- អាចរចនា API ដែលមានស្តង់ដា

### មាតិកា (Topics)
- **REST ជាអ្វី? (REpresentational State Transfer)**
- **HTTP Methods & Their Purpose**
  | Method | Purpose | Example |
  |--------|---------|---------|
  | GET | Read | `GET /api/products` |
  | POST | Create | `POST /api/products` |
  | PUT | Update (full) | `PUT /api/products/1` |
  | PATCH | Update (partial) | `PATCH /api/products/1` |
  | DELETE | Delete | `DELETE /api/products/1` |
- **HTTP Status Codes**
  - `200` OK, `201` Created, `204` No Content
  - `400` Bad Request, `401` Unauthorized, `403` Forbidden, `404` Not Found
  - `500` Internal Server Error
- **API Naming Conventions**
  - Use nouns, not verbs (`/api/users` not `/api/getUsers`)
  - Plural names (`/api/products`)
  - Nested resources (`/api/users/:userId/orders`)
- **Testing API with Postman**
  - ដំឡើង Postman
  - Send GET, POST, PUT, DELETE Requests
  - Collections & Environment Variables
- **API Response Format**
  ```json
  {
    "success": true,
    "data": { ... },
    "message": "User created successfully"
  }
  ```

### លំហាត់ (Exercise)
- រចនា API Endpoints សម្រាប់ Blog System (Posts, Comments)
- បង្កើត CRUD API ពេញលេញសម្រាប់ Products (In-Memory Array)
- Test API ទាំងអស់ដោយប្រើ Postman
- បង្កើត Postman Collection សម្រាប់ Project

---

## Lesson 24: Database មូលដ្ឋាន (MongoDB)

### គោលបំណង (Objectives)
- យល់ដឹងពី Database Concepts
- អាចប្រើ MongoDB & Mongoose

### មាតិកា (Topics)
- **Database ជាអ្វី? SQL vs NoSQL**
- **MongoDB**
  - Document-based Database
  - Collections & Documents
  - BSON Format
- **MongoDB Atlas (Cloud)**
  - បង្កើត Account & Cluster
  - Connection String
  - MongoDB Compass (GUI)
- **Mongoose ODM**
  ```bash
  npm install mongoose
  ```
  ```js
  import mongoose from 'mongoose';
  mongoose.connect('mongodb+srv://...');
  ```
- **Schema & Model**
  ```js
  const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, min: 0 },
    createdAt: { type: Date, default: Date.now }
  });
  const User = mongoose.model('User', userSchema);
  ```
- **Data Types** (String, Number, Boolean, Date, Array, ObjectId)
- **Schema Validation** (required, min, max, enum, default)

### លំហាត់ (Exercise)
- បង្កើត MongoDB Atlas Cluster
- Connect Express App ទៅ MongoDB
- បង្កើត Schema & Model សម្រាប់ Product
- ប្រើ MongoDB Compass ដើម្បីមើល Data

---

## Lesson 25: CRUD Operations

### គោលបំណង (Objectives)
- អាចបង្កើត CRUD Operations ពេញលេញជាមួយ MongoDB
- ភ្ជាប់ Routes ជាមួយ Database

### មាតិកា (Topics)
- **Create**
  ```js
  const user = await User.create({ name, email, age });
  // OR
  const user = new User({ name, email, age });
  await user.save();
  ```
- **Read**
  ```js
  const users = await User.find();                    // Get all
  const user = await User.findById(id);               // Get by ID
  const users = await User.find({ age: { $gte: 18 } }); // Filter
  ```
- **Update**
  ```js
  const user = await User.findByIdAndUpdate(id, updateData, { new: true });
  ```
- **Delete**
  ```js
  await User.findByIdAndDelete(id);
  ```
- **Query Helpers**
  - `.select('name email')` — Select fields
  - `.sort('-createdAt')` — Sort
  - `.limit(10).skip(0)` — Pagination
  - `.populate('author')` — Join references
- **Controller Pattern**
  - แยก Logic ចេញពី Routes
  - controllers/userController.js

### លំហាត់ (Exercise)
- បង្កើត CRUD API ពេញលេញសម្រាប់ Products ជាមួយ MongoDB
- បន្ថែម Pagination (page, limit query params)
- បន្ថែម Search/Filter (ស្វែងរកតាម Name, Category)
- Organize Code ដោយប្រើ Controller Pattern

---

## Lesson 26: Authentication (Part 1)

### គោលបំណង (Objectives)
- យល់ដឹងពី Authentication Concepts
- អាចបង្កើត User Registration & Login

### មាតិកា (Topics)
- **Authentication vs Authorization**
  - Authentication: អ្នកជានរណា? (Who are you?)
  - Authorization: អ្នកមានសិទ្ធិអ្វី? (What can you do?)
- **Password Security**
  - កុំរក្សាទុក Plain Text Password!
  - Hashing with bcrypt
  ```bash
  npm install bcryptjs
  ```
  ```js
  import bcrypt from 'bcryptjs';
  const hashedPassword = await bcrypt.hash(password, 10);
  const isMatch = await bcrypt.compare(password, hashedPassword);
  ```
- **User Model**
  ```js
  const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 }
  });
  ```
- **Registration Endpoint**
  - Validate Input
  - Check if User Exists
  - Hash Password
  - Save to Database
- **Login Endpoint**
  - Find User by Email
  - Compare Passwords
  - Return Success/Error

### លំហាត់ (Exercise)
- បង្កើត User Model ជាមួយ Mongoose
- បង្កើត POST `/api/auth/register` Endpoint
- បង្កើត POST `/api/auth/login` Endpoint
- Test ជាមួយ Postman

---

## Lesson 27: Authentication (Part 2) — JWT

### គោលបំណង (Objectives)
- យល់ដឹងពី JWT (JSON Web Token)
- អាចបង្កើត Protected Routes

### មាតិកា (Topics)
- **JWT ជាអ្វី?**
  - Header, Payload, Signature
  - Stateless Authentication
- **ប្រើ JWT ជាមួយ Express**
  ```bash
  npm install jsonwebtoken
  ```
  ```js
  import jwt from 'jsonwebtoken';

  // Generate Token
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: '7d'
  });

  // Verify Token
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  ```
- **Auth Middleware**
  ```js
  const protect = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Not authorized' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.userId);
    next();
  };
  ```
- **Protected Routes**
  ```js
  app.get('/api/profile', protect, getProfile);
  ```
- **Environment Variables**
  ```bash
  npm install dotenv
  ```
  - `.env` file: `JWT_SECRET=your_secret_key`
  - `process.env.JWT_SECRET`

### លំហាត់ (Exercise)
- បន្ថែម JWT ទៅ Login/Register
- បង្កើត Auth Middleware
- បង្កើត Protected Route: GET `/api/profile`
- Test Token ជាមួយ Postman (Authorization Header)

---

## Lesson 28: Input Validation & Error Handling

### គោលបំណង (Objectives)
- អាចធ្វើ Input Validation សម្រាប់ API
- អាច Handle Errors ដោយស្អាត

### មាតិកា (Topics)
- **ហេតុអ្វីត្រូវ Validate Input?**
  - Security (SQL Injection, XSS)
  - Data Integrity
  - Better User Experience
- **express-validator**
  ```bash
  npm install express-validator
  ```
  ```js
  import { body, validationResult } from 'express-validator';

  const validateRegister = [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be 6+ characters')
  ];
  ```
- **Error Handling Middleware**
  ```js
  const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
      success: false,
      message: err.message || 'Server Error'
    });
  };
  ```
- **Custom Error Class**
  ```js
  class AppError extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
    }
  }
  ```
- **Try/Catch in Controllers** or asyncHandler wrapper
- **Common Validation Patterns**
  - Sanitization (trim, escape)
  - Custom Validators

### លំហាត់ (Exercise)
- បន្ថែម Validation ទៅ Register & Login Endpoints
- បង្កើត Product Validation (name, price, category)
- បង្កើត Global Error Handler Middleware
- Handle MongoDB Errors (Duplicate Key, Validation Error)

---

## Lesson 29: File Upload & Static Files

### គោលបំណង (Objectives)
- អាច Handle File Upload ក្នុង Express
- អាច Serve Static Files

### មាតិកា (Topics)
- **Multer — File Upload Middleware**
  ```bash
  npm install multer
  ```
  ```js
  import multer from 'multer';

  const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
  });

  const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
    fileFilter: (req, file, cb) => {
      if (file.mimetype.startsWith('image/')) cb(null, true);
      else cb(new Error('Only images allowed'), false);
    }
  });
  ```
- **Upload Endpoints**
  ```js
  app.post('/api/upload', upload.single('image'), (req, res) => {
    res.json({ url: `/uploads/${req.file.filename}` });
  });
  ```
- **Serving Static Files**
  ```js
  app.use('/uploads', express.static('uploads'));
  ```
- **File Validation** (Type, Size)
- **Profile Picture Upload** (Update User with Image URL)

### លំហាត់ (Exercise)
- បង្កើត Image Upload Endpoint
- បន្ថែម Profile Picture ទៅ User Profile
- បង្កើត Product Image Upload
- Validate File Type & Size

---

## Lesson 30: Backend Project Workshop

### គោលបំណង (Objectives)
- បង្កើត REST API ពេញលេញ
- Practice Backend Architecture

### មាតិកា (Topics)
- **Project Architecture**
  ```
  src/
  ├── config/
  │   └── db.js
  ├── controllers/
  │   ├── authController.js
  │   └── productController.js
  ├── middleware/
  │   ├── auth.js
  │   ├── errorHandler.js
  │   └── validate.js
  ├── models/
  │   ├── User.js
  │   └── Product.js
  ├── routes/
  │   ├── authRoutes.js
  │   └── productRoutes.js
  ├── utils/
  │   └── AppError.js
  └── server.js
  ```
- **Build Session**
  - Database Connection
  - Models & Schemas
  - Routes & Controllers
  - Authentication
  - Validation & Error Handling
  - File Upload
- **API Documentation** (Postman Collection)

### Project: Blog API OR Task Manager API

**Blog API Endpoints:**
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | /api/auth/register | Register user | No |
| POST | /api/auth/login | Login user | No |
| GET | /api/posts | Get all posts | No |
| GET | /api/posts/:id | Get single post | No |
| POST | /api/posts | Create post | Yes |
| PUT | /api/posts/:id | Update post | Yes (Owner) |
| DELETE | /api/posts/:id | Delete post | Yes (Owner) |
| POST | /api/posts/:id/comments | Add comment | Yes |

### វាយតម្លៃ (Evaluation)
- [ ] CRUD Operations ដំណើរការពេញលេញ
- [ ] Authentication (Register/Login/JWT)
- [ ] Input Validation
- [ ] Error Handling ល្អ
- [ ] File Upload ដំណើរការ
- [ ] Code Architecture ស្អាត (MVC Pattern)
- [ ] API tested ជាមួយ Postman
- [ ] Code pushed to GitHub
