import { useEffect, useState } from "react";

import { Container, Typography } from "@mui/material";

import SaleTableReport from "@/components/SaleTableReport";
import ReportService from "@/services/ReportService";

type Props = {};

export default function DailyReport({}: Props) {
  const [dailyReport, setDailyIncome] = useState<any[]>([]);

  useEffect(() => {
    try {
      const getDailyReport = async () => {
        const dailyReport = await ReportService.getDailyReport();
        if (dailyReport.data.success) {
          setDailyIncome(dailyReport.data.data);
        }
      };

      getDailyReport();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Container maxWidth="xl">
      <Typography variant="h4">Daily Sale Report</Typography>
      <SaleTableReport dataList={dailyReport} />
    </Container>
  );
}
