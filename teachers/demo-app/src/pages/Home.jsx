import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <h1>Welcome to Our Store 🛒</h1>
            <p>នេះជា Demo Multi-Page App ដោយប្រើ React Router — ចុច Menu ខាងលើ ដោយ Page មិន Reload។</p>
            {/* Link ជំនួស <a href> — កុំឲ្យ Browser Reload */}
            <Link to="/products" style={{ fontWeight: "bold", color: "#0e7c99" }}>
                មើល Products ទាំងអស់ →
            </Link>
        </div>
    )
}

export default Home;
