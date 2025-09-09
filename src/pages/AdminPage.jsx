import Dashboard from "../components/Dashboard/Dashboard";
import transition from "../components/transition";

function AdminPage() {
    return (
        <div className="admin-page">
            <Dashboard />
        </div>
    );
}

// 👇 wrappa l’export con la transition
export default transition(AdminPage);