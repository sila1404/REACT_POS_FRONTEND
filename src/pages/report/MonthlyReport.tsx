import { useEffect, useState } from "react";

import { Container, Typography } from "@mui/material";
import SaleTableReport from "@/components/SaleTableReport";

import ReportService from "@/services/ReportService";

type Props = {}

export default function MonthlyReport({}: Props) {
  const [mothnlyReport, setMonthlyIncome] = useState<any[]>([]);

  useEffect(() => {
    try {
      const getMonthlyReport = async () => {
        const mothnlyReport = await ReportService.getMonthlyReport();
        if (mothnlyReport.data.success) {
          setMonthlyIncome(mothnlyReport.data.data);
        }
      };

      getMonthlyReport();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4">Monthly Sale Report</Typography>
      <SaleTableReport dataList={mothnlyReport} />
    </Container>
  )
}