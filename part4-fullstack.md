# 🟣 Part 4: Full-Stack Development

> **រយៈពេល:** 8 Lessons (~4 weeks)
> **តម្រូវការមុន:** Part 2 (React) + Part 3 (Express + MongoDB)
> **លទ្ធផល:** បង្កើត Project ពេញលេញបាន
> **Major Project Start:** E-Commerce Website OR Admin Dashboard

---

## Lesson 31: ភ្ជាប់ Frontend + Backend

### គោលបំណង (Objectives)
- អាចភ្ជាប់ React Frontend ជាមួយ Express Backend
- យល់ដឹងពី CORS និង Project Setup

### មាតិកា (Topics)
- **Project Structure (Monorepo)**
  ```
  my-project/
  ├── client/          # React (Vite)
  │   ├── src/
  │   ├── package.json
  │   └── .env
  ├── server/          # Express
  │   ├── src/
  │   ├── package.json
  │   └── .env
  └── README.md
  ```
- **CORS (Cross-Origin Resource Sharing)**
  ```bash
  npm install cors
  ```
  ```js
  import cors from 'cors';
  app.use(cors({ origin: 'http://localhost:5173' }));
  ```
- **Environment Variables**
  - Client: `.env` → `VITE_API_URL=http://localhost:3000/api`
  - Server: `.env` → `PORT=3000`, `MONGO_URI=...`, `JWT_SECRET=...`
- **API Service Layer (Frontend)**
  ```js
  // src/services/api.js
  import axios from 'axios';

  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });

  // Add token to every request
  api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  export default api;
  ```
- **Proxy Setup** (Alternative to CORS in dev)
- **Running Both Servers** (concurrently)
  ```bash
  npm install -D concurrently
  ```

### លំហាត់ (Exercise)
- Setup Monorepo Project (client + server folders)
- Configure CORS ក្នុង Express
- បង្កើត API Service Layer ក្នុង React
- Fetch Data ពី Backend ហើយបង្ហាញក្នុង React

---

## Lesson 32: Full-Stack Authentication Flow

### គោលបំណង (Objectives)
- បង្កើត Login/Register UI ពេញលេញ
- Manage Auth State ក្នុង React

### មាតិកា (Topics)
- **Register Page**
  - Form (Name, Email, Password, Confirm Password)
  - Client-side Validation
  - Call Register API
  - Redirect on Success
- **Login Page**
  - Form (Email, Password)
  - Call Login API
  - Store Token in localStorage
  - Redirect to Dashboard
- **Auth Context**
  ```jsx
  // src/context/AuthContext.jsx
  const AuthContext = createContext();

  export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = async (email, password) => { ... };
    const register = async (name, email, password) => { ... };
    const logout = () => {
      localStorage.removeItem('token');
      setUser(null);
    };

    // Check token on app load
    useEffect(() => {
      const checkAuth = async () => { ... };
      checkAuth();
    }, []);

    return (
      <AuthContext.Provider value={{ user, login, register, logout, loading }}>
        {children}
      </AuthContext.Provider>
    );
  };
  ```
- **Protected Routes**
  ```jsx
  const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    if (loading) return <Loading />;
    if (!user) return <Navigate to="/login" />;
    return children;
  };
  ```
- **Navbar with Auth State** (Show Login/Register or User Name/Logout)

### លំហាត់ (Exercise)
- បង្កើត Register & Login Pages ជាមួយ Tailwind
- បង្កើត AuthContext & AuthProvider
- បង្កើត ProtectedRoute Component
- បង្កើត Navbar ដែលផ្លាស់ប្តូរតាម Auth State

---

## Lesson 33: Full-Stack CRUD (Part 1) — Create & Read

### គោលបំណង (Objectives)
- អាច Create & Read Data ពី Frontend ទៅ Backend
- បង្កើត UI សម្រាប់ List & Create

### មាតិកា (Topics)
- **List Page (Read)**
  - Fetch Data on Component Mount
  - Display Data in Cards/Table
  - Loading & Error States
  - Empty State UI
- **Pagination**
  ```jsx
  // Frontend
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { data } = await api.get(`/products?page=${page}&limit=10`);
  ```
  ```js
  // Backend
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  const products = await Product.find().skip(skip).limit(limit);
  const total = await Product.countDocuments();
  ```
- **Search & Filter**
  ```jsx
  const [search, setSearch] = useState('');
  const { data } = await api.get(`/products?search=${search}&category=${category}`);
  ```
- **Create Form**
  - Form UI with Validation
  - Submit to Backend API
  - Success/Error Feedback (Toast notifications)
  - Redirect or Update List after Creation
- **React Hook Form** (Optional improvement)
  ```bash
  npm install react-hook-form
  ```

### លំហាត់ (Exercise)
- បង្កើត Products List Page (Cards + Pagination)
- បន្ថែម Search Bar & Category Filter
- បង្កើត "Add Product" Form Page
- ភ្ជាប់ Form ទៅ Backend API (POST)

---

## Lesson 34: Full-Stack CRUD (Part 2) — Update & Delete

### គោលបំណង (Objectives)
- អាច Update & Delete Data ពី Frontend
- Handle Confirmation & Feedback

### មាតិកា (Topics)
- **Detail Page**
  - Fetch Single Item by ID
  - Display Full Details
  - Edit & Delete Buttons
- **Edit/Update**
  - Pre-fill Form with Existing Data
  ```jsx
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await api.get(`/products/${id}`);
      setFormData(data);
    };
    fetchProduct();
  }, [id]);
  ```
  - Submit Updated Data (PUT request)
  - Success Feedback & Redirect
- **Delete**
  - Confirmation Dialog
  ```jsx
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete?')) return;
    await api.delete(`/products/${id}`);
    // Update list state
  };
  ```
  - Remove from UI after Deletion
  - Error Handling
- **Toast Notifications**
  ```bash
  npm install react-hot-toast
  ```
  ```jsx
  import toast from 'react-hot-toast';
  toast.success('Product created successfully!');
  toast.error('Failed to delete product');
  ```
- **Optimistic Updates** (Optional concept)

### លំហាត់ (Exercise)
- បង្កើត Product Detail Page
- បង្កើត Edit Product Page (Pre-filled Form)
- បន្ថែម Delete Button ជាមួយ Confirmation
- បន្ថែម Toast Notifications សម្រាប់ Success/Error

---

## Lesson 35: User Roles & Permissions

### គោលបំណង (Objectives)
- អាច Implement Role-Based Access Control
- បង្កើត Admin Dashboard

### មាតិកា (Topics)
- **User Roles**
  ```js
  // User Model
  const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: { type: String, enum: ['user', 'admin'], default: 'user' }
  });
  ```
- **Role Middleware (Backend)**
  ```js
  const authorize = (...roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Not authorized for this action' });
      }
      next();
    };
  };

  // Usage
  app.delete('/api/products/:id', protect, authorize('admin'), deleteProduct);
  ```
- **Role-Based UI (Frontend)**
  ```jsx
  {user.role === 'admin' && <Link to="/admin">Admin Dashboard</Link>}
  ```
- **Admin Dashboard Page**
  - User Management (View Users, Change Roles)
  - Product Management (CRUD)
  - Statistics Overview
- **Admin Route Protection**
  ```jsx
  const AdminRoute = ({ children }) => {
    const { user } = useAuth();
    if (user?.role !== 'admin') return <Navigate to="/" />;
    return children;
  };
  ```

### លំហាត់ (Exercise)
- បន្ថែម Role field ទៅ User Model
- បង្កើត authorize Middleware
- បង្កើត Admin Dashboard Page
- បន្ថែម User Management (Admin អាចមើល Users ទាំងអស់)

---

## Lesson 36: File Upload (Full-Stack)

### គោលបំណង (Objectives)
- អាច Upload File ពី React ទៅ Express
- បង្ហាញ Image Preview & Progress

### មាតិកា (Topics)
- **File Input in React**
  ```jsx
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };
  ```
- **Upload with FormData**
  ```jsx
  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('name', productName);

    const { data } = await api.post('/products', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress: (progressEvent) => {
        const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setProgress(percent);
      }
    });
  };
  ```
- **Image Preview before Upload**
- **Upload Progress Bar**
- **Display Uploaded Images**
  ```jsx
  <img src={`${API_URL}/${product.image}`} alt={product.name} />
  ```
- **Profile Picture Update**
- **Multiple File Upload** (Optional)

### លំហាត់ (Exercise)
- បង្កើត Product Form ជាមួយ Image Upload
- បន្ថែម Image Preview before Upload
- បង្កើត Upload Progress Bar
- បន្ថែម Profile Picture Upload & Display

---

## Lesson 37: State Management

### គោលបំណង (Objectives)
- យល់ដឹងពី State Management Patterns
- អាចប្រើ Context API or Zustand

### មាតិកា (Topics)
- **State Management ហេតុអ្វីត្រូវការ?**
  - Prop Drilling Problem
  - Global State vs Local State
  - When to use State Management
- **Context API (Built-in)**
  - ល្អសម្រាប់ State សាមញ្ញ (Auth, Theme)
  - បញ្ហា: Re-rendering ច្រើន
- **Zustand (Recommended)**
  ```bash
  npm install zustand
  ```
  ```js
  import { create } from 'zustand';

  const useProductStore = create((set) => ({
    products: [],
    loading: false,
    fetchProducts: async () => {
      set({ loading: true });
      const { data } = await api.get('/products');
      set({ products: data, loading: false });
    },
    addProduct: (product) =>
      set((state) => ({ products: [...state.products, product] })),
    deleteProduct: (id) =>
      set((state) => ({
        products: state.products.filter((p) => p._id !== id)
      })),
  }));
  ```
  ```jsx
  // Usage in Component
  const { products, loading, fetchProducts } = useProductStore();
  ```
- **When to Use What**
  | Use Case | Solution |
  |----------|----------|
  | Auth State | Context API |
  | Theme | Context API |
  | Product Data | Zustand |
  | Cart | Zustand |
  | Form State | Local useState |

### លំហាត់ (Exercise)
- Refactor Product State ទៅប្រើ Zustand
- បង្កើត Cart Store (Add, Remove, Clear, Total)
- ប្រើ Auth Context + Product Store ជាមួយគ្នា

---

## Lesson 38: Full-Stack Project Workshop

### គោលបំណង (Objectives)
- ចាប់ផ្តើមបង្កើត Major Project ពេញលេញ
- Apply Skills ទាំងអស់ពី Part 1-4

### មាតិកា (Topics)
- **Project Planning**
  - Feature List & User Stories
  - Database Schema Design
  - API Endpoint Planning
  - UI Wireframes
  - Component Tree
- **Project Setup**
  - Monorepo Structure
  - Backend: Express + MongoDB + Auth
  - Frontend: React + Tailwind + Router
  - State Management: Zustand + Auth Context
- **Build Sprint**
  - Database Models
  - API Endpoints + Controllers
  - Frontend Pages + Components
  - Connect Frontend to Backend
  - File Upload Integration
  - Role-Based Access

### Project Options (ជ្រើសរើស 1)

**Option A: E-Commerce Website**
| Feature | Description |
|---------|-------------|
| Auth | Register, Login, Profile |
| Products | Browse, Search, Filter, Detail |
| Cart | Add, Remove, Update Quantity |
| Checkout | Order Summary, Place Order |
| Admin | Manage Products, View Orders |
| Upload | Product Images |

**Option B: Admin Dashboard**
| Feature | Description |
|---------|-------------|
| Auth | Login, Role-based Access |
| Dashboard | Stats, Charts, Overview |
| Users | CRUD, Role Management |
| Products | CRUD with Image Upload |
| Orders | View, Update Status |
| Reports | Sales, User Activity |

### វាយតម្លៃ (Evaluation)
- [ ] Full-Stack ភ្ជាប់គ្នាពេញលេញ
- [ ] Authentication & Authorization ដំណើរការ
- [ ] CRUD Operations ពេញលេញ
- [ ] File Upload ដំណើរការ
- [ ] User Roles ដំណើរការ
- [ ] State Management ល្អ
- [ ] UI/UX ស្អាត (Tailwind)
- [ ] Responsive Design
- [ ] Code on GitHub
