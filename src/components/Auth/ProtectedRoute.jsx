import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const [loading, setLoading] = useState(true);
    const [authorized, setAuthorized] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("admin_token");
        if (!token) {
            navigate("/login"); // se non c’è token, via al login
            return;
        }

        // verifica il token con il backend
        fetch(`/api/auth/me`, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((res) => {
                if (!res.ok) throw new Error("not authorized");
                return res.json();
            })
            .then(() => {
                setAuthorized(true);
            })
            .catch(() => {
                localStorage.removeItem("admin_token");
                navigate("/login");
            })
            .finally(() => setLoading(false));
    }, [navigate]);

    if (loading) return <p>Loading...</p>; // spinner volendo
    if (!authorized) return null;

    return children;
}
