import { Link } from "react-router-dom";

const lessons = [
    {
        id: "Lesson 16",
        title: "React State & Events",
        demos: [
            { to: "/counter", label: "Counter — useState + onClick" },
            { to: "/todos", label: "Todo App — Array State · .map() · key" },
            { to: "/register", label: "Register Form — Controlled Inputs · Conditional UI" },
        ],
    },
    {
        id: "Lesson 18",
        title: "React Router",
        demos: [
            { to: "/products", label: "Products — Link · Dynamic Route /products/:id" },
            { to: "/dashboard", label: "Dashboard — Protected Route (Redirect ទៅ /login)" },
            { to: "/no-such-page", label: "404 Page — path=\"*\"" },
        ],
    },
    {
        id: "Lesson 19",
        title: "API Integration",
        demos: [
            { to: "/users", label: "User Directory — fetch · Loading / Error / Empty · Retry" },
            { to: "/users/1", label: "User Detail — useFetch Custom Hook + useParams" },
            { to: "/create-post", label: "Create Post — POST ដោយ fetch ⟷ axios" },
        ],
    },
];

const Home = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
                <h1 style={{ marginBottom: "5px" }}>Demo App 🛠</h1>
                <p style={{ margin: 0, color: "#555" }}>
                    Multi-Page App ដោយ React Router — ចុច Menu ខាងលើ ដោយ Page មិន Reload។
                </p>
            </div>

            {lessons.map((lesson) => (
                <section key={lesson.id} style={{ padding: "15px", backgroundColor: "#f0f0f0", borderRadius: "8px" }}>
                    <h2 style={{ margin: "0 0 10px" }}>
                        <span style={{ color: "#0e7c99" }}>{lesson.id}</span> — {lesson.title}
                    </h2>
                    <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
                        {lesson.demos.map((demo) => (
                            <li key={demo.to}>
                                {/* Link ជំនួស <a href> — កុំឲ្យ Browser Reload */}
                                <Link to={demo.to} style={{ color: "#0e7c99", fontWeight: "bold" }}>
                                    {demo.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </div>
    )
}

export default Home;
