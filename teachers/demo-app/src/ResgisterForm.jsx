import React from "react";
import {useState } from "react";

const RegisterForm = () =>{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return(

        <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
                <h3>First Name:</h3>
                <input
                style={{ flex: 1, padding: "5px", borderRadius: "5px", border: "1px solid #ccc" }}
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />         
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
                <h3>Last Name:</h3>
                <input
                    style={{ flex: 1, padding: "5px", borderRadius: "5px", border: "1px solid #ccc" }}
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
                <h3>Email:</h3>
                <input
                    style={{ flex: 1, padding: "5px", borderRadius: "5px", border: "1px solid #ccc" }}
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
                <h3>Password:</h3>
                <input
                    style={{ flex: 1, padding: "5px", borderRadius: "5px", border: "1px solid #ccc" }}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
        </form>

     
    )
}

export default RegisterForm;