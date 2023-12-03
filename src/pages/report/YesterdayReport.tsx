import { useEffect, useState } from "react";

import { Container, Typography } from "@mui/material";
import SaleTableReport from "@/components/SaleTableReport";

import ReportService from "@/services/ReportService";

type Props = {}

export default function YesterdayReport({}: Props) {
  const [yesterdayReport, setYesterdayIncome] = useState<any[]>([]);

  useEffect(() => {
    try {
      const getYesterdayReport = async () => {
        const yesterdayReport = await ReportService.getYesterdayReport();
        if (yesterdayReport.data.success) {
          setYesterdayIncome(yesterdayReport.data.data);
        }
      };

      getYesterdayReport();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Container maxWidth="xl">
      <Typography variant="h4">Yesterday Sale Report</Typography>
      <SaleTableReport dataList={yesterdayReport} />
    </Container>
  );
}