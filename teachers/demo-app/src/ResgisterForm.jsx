import { useState } from "react";

const inputStyle = { flex: 1, padding: "5px", borderRadius: "5px", border: "1px solid #ccc" };
const rowStyle = { display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" };

const RegisterForm = () =>{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // State សម្រាប់ Conditional Rendering (Lesson 16 · Exercise 4)
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [submitted, setSubmitted] = useState(null);

    function handleSubmit(e) {
        e.preventDefault(); // កុំឲ្យ Browser Reload Page
        setError(null);

        if (password.length < 6) {
            setError("Password ត្រូវមានយ៉ាងតិច 6 តួអក្សរ");
            return;
        }

        setIsLoading(true);
        // ធ្វើត្រាប់តាម Request ទៅ Server (Lesson 19 នឹងប្រើ API ពិត)
        setTimeout(() => {
            setSubmitted({ firstName, lastName, email });
            setIsLoading(false);
        }, 1000);
    }

    return(
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "500px" }}>
            <h1>Register Form</h1>

            <div style={rowStyle}>
                <h3>First Name:</h3>
                <input
                    style={inputStyle}
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div style={rowStyle}>
                <h3>Last Name:</h3>
                <input
                    style={inputStyle}
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div style={rowStyle}>
                <h3>Email:</h3>
                <input
                    style={inputStyle}
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div style={rowStyle}>
                <h3>Password:</h3>
                <input
                    style={inputStyle}
                    /* Conditional — type ប្ដូរតាម State */
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="button" onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? "🙈 Hide" : "👁 Show"}
                </button>
            </div>

            {/* && សម្រាប់ Show/Hide — Error Message */}
            {error && <p style={{ color: "crimson", margin: 0 }}>⚠️ {error}</p>}

            <button type="submit" disabled={isLoading} style={{ width: "fit-content" }}>
                {isLoading ? "កំពុងផ្ញើ..." : "Register"}
            </button>

            {/* Success State */}
            {submitted && (
                <div style={{ padding: "10px", backgroundColor: "#e6ffed", borderRadius: "5px" }}>
                    <strong>✅ ជោគជ័យ!</strong>
                    <p style={{ margin: "5px 0 0" }}>
                        {submitted.firstName} {submitted.lastName} — {submitted.email}
                    </p>
                </div>
            )}
        </form>
    )
}

export default RegisterForm;
