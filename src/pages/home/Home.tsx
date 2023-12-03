import { useEffect, useState } from "react";

import { Container, Typography, Box } from "@mui/material";
import DashboardCard from "@/components/DashboardCard";
import dashboardService from "@/services/DashboardService";

type Props = {};

// const dashboardCardData = [
//   { id: 1, title: "Daily Income", amount: "800,000", color: "#008000" },
//   { id: 2, title: "Yesterday Income", amount: "1,000,000", color: "#ffc000" },
//   { id: 3, title: "Weekly Income", amount: "4,000,000", color: "#008000" },
//   { id: 4, title: "Monhtly Income", amount: "10,000,000", color: "#008000" },
// ];

export default function Home({}: Props) {
  const [dailyIncome, setDailyIncome] = useState(0);
  const [yesterdayIncome, setYesterdayIncome] = useState(0);
  const [weeklyIncome, setWeeklyIncome] = useState(0);
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const getDashboardInfo = async () => {
        const dailyIncome = await dashboardService.getDailyIncome();
        const yesterdayIncome = await dashboardService.getYesterdayIncome();
        const weeklyIncome = await dashboardService.getWeeklyIncome();
        const monthlyIncome = await dashboardService.getMonthlyIncome();

        if (dailyIncome.data.success) {
          setDailyIncome(dailyIncome.data.data);
        }

        if (yesterdayIncome.data.success) {
          setYesterdayIncome(yesterdayIncome.data.data);
        }
        if (weeklyIncome.data.success) {
          setWeeklyIncome(weeklyIncome.data.data);
        }
        if (monthlyIncome.data.success) {
          setMonthlyIncome(monthlyIncome.data.data);
        }

        setLoading(false)
      };

      getDashboardInfo();
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }, []);

  return (
    <Box sx={{ paddingY: "50px", backgroundColor: "#d3d3d3", height: "100vh" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h4" gutterBottom>
          OverView
        </Typography>
        <Box display={"flex"}>
          {/* {dashboardCardData.map((card) => ( */}
          <DashboardCard
            title={"Daily Income"}
            amount={dailyIncome}
            color={"#008000"}
            loading={loading}
          />

          <DashboardCard
            title={"Yesterday Income"}
            amount={yesterdayIncome}
            color={"#ffc000"}
            loading={loading}
          />

          <DashboardCard
            title={"Weekly Income"}
            amount={weeklyIncome}
            color={"#008000"}
            loading={loading}
          />

          <DashboardCard
            title={"Monhtly Income"}
            amount={monthlyIncome}
            color={"#008000"}
            loading={loading}
          />
          {/* ))} */}
        </Box>
      </Container>
    </Box>
  );
}
