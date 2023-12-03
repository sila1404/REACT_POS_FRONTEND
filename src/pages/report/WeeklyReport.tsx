import { useEffect, useState } from "react";

import { Container, Typography } from "@mui/material";
import SaleTableReport from "@/components/SaleTableReport";

import ReportService from "@/services/ReportService";

type Props = {}

export default function WeeklyReport({}: Props) {
  const [weeklyReport, setWeeklyIncome] = useState<any[]>([]);

  useEffect(() => {
    try {
      const getWeeklyReport = async () => {
        const weeklyReport = await ReportService.getWeeklyReport();
        if (weeklyReport.data.success) {
          setWeeklyIncome(weeklyReport.data.data);
        }
      };

      getWeeklyReport();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Container maxWidth="xl">
      <Typography variant="h4">Weekly Sale Report</Typography>
      <SaleTableReport dataList={weeklyReport} />
    </Container>
  );
}