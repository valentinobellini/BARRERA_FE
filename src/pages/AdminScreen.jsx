import { AdminPostProvider } from "../contexts/AdminPostContext";
import { AdminTagProvider } from "../contexts/AdminTagContext";
import AdminPage from "./AdminPage";
import transition from "../components/transition";

function AdminScreen() {
    return (
        <AdminPostProvider>
            <AdminTagProvider>
                <AdminPage />
            </AdminTagProvider>
        </AdminPostProvider>
    );
}

export default transition(AdminScreen);
