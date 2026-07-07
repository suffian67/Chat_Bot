import Link from "next/link";

interface Props {

    title: string;

    href: string;

}

export default function DashboardCard({

    title,

    href

}: Props) {

    return (

        <Link

            href={href}

            className="dashboard-card"

        >

            <h3>{title}</h3>

            <p>

                Manage {title.toLowerCase()}.

            </p>

        </Link>

    );

}