import DashboardCard from "./components/DashboardCard";

export default function Page() {

    return (

        <div>

            <h1>Dashboard</h1>

            <div className="dashboard-grid">

                <DashboardCard
                    title="Pages"
                    href="/admin/pages"
                />

                <DashboardCard
                    title="Settings"
                    href="/admin/settings"
                />

                <DashboardCard
                    title="Prompt"
                    href="/admin/prompts"
                />

                <DashboardCard
                    title="Analytics"
                    href="/admin/analytics"
                />

                <DashboardCard
                    title="Conversations"
                    href="/admin/conversations"
                />

            </div>

        </div>

    );

}