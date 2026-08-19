import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

const API_URL = import.meta.env.VITE_API_URL;

// Lesson 18 + 19 រួមគ្នា — Dynamic Route + Fetch តាម id
const UserDetail = () => {
    const { id } = useParams(); // ជា String ជានិច្ច
    const navigate = useNavigate();

    // Custom Hook — 3 States ក្នុងបន្ទាត់តែមួយ
    const { data: user, loading, error } = useFetch(`${API_URL}/users/${id}`);

    if (loading) return <Spinner />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <h1>{user.name}</h1>
            <p style={{ margin: 0, color: "#0e7c99", fontWeight: "bold" }}>@{user.username}</p>
            <p style={{ margin: 0 }}>📧 {user.email}</p>
            <p style={{ margin: 0 }}>📞 {user.phone}</p>
            <p style={{ margin: 0 }}>🌐 {user.website}</p>
            <p style={{ margin: 0 }}>🏢 {user.company?.name}</p>
            <p style={{ margin: 0 }}>📍 {user.address?.city}, {user.address?.street}</p>
            <button onClick={() => navigate(-1)} style={{ width: "fit-content", marginTop: "10px" }}>← Back</button>
        </div>
    )
}

export default UserDetail;
