import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./admin.css";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (

        <div className="admin-layout">

            <Sidebar />

            <div className="admin-content">

                <Header />

                {children}

            </div>

        </div>

    );

}