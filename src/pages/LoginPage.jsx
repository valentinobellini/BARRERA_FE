import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [username, setU] = useState("");
    const [password, setP] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");
        try {
            const res = await fetch(`/api/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });
            if (!res.ok) {
                const data = await res.json();
                setError(data.message || "Login fallito");
                return;
            }
            const data = await res.json();
            localStorage.setItem("admin_token", data.token);
            navigate("/admin");
        } catch {
            setError("Errore di rete");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <input
                placeholder="Username"
                value={username}
                onChange={(e) => setU(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setP(e.target.value)}
            />
            <button type="submit">Entra</button>
            {error && <p>{error}</p>}
        </form>
    );
}
