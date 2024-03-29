import KPICards from "../KPICards/KPICards";
import PageHeader from "../../Layout/PageHeader/PageHeader";
import styles from "./Dashboard.module.scss";
import DashAreaChart from "./DashAreaChart/DashAreaChart";
import DashNewsFeed from "./DashNewsFeed/DashNewsFeed";
import { ColGrid } from "@tremor/react";
import DashWeather from "./DashWeather/DashWeather";

function Dashboard() {
    return (
        <div className={styles.dashboard}>
            <PageHeader title="Dashboard" content="Welcome to your dashboard!" />
            <div className={styles.dashboard__container}>
                <ColGrid numColsSm={1} numColsLg={1} gapX="gap-x-6" gapY="gap-y-6">
                    <KPICards />
                    <ColGrid
                        numColsSm={1}
                        numColsMd={2}
                        numColsLg={3}
                        gapX="gap-x-4"
                        gapY="gap-y-6"
                    >
                        <DashAreaChart />
                        <DashNewsFeed />
                        <DashWeather />
                    </ColGrid>
                </ColGrid>
            </div>
        </div>
    );
}

export default Dashboard;
