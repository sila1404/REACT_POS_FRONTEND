import { Box, Container, Typography } from "@mui/material";

import ReportCard from "@/components/ReportCard";
type Props = {};


export default function Report({}: Props) {
  return (
    <Box sx={{ paddingY: "50px", backgroundColor: "#d3d3d3", height: "100vh" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h4" gutterBottom>
          Report
        </Typography>
        <Box display={"flex"}>
            <ReportCard title={"Daily Sale Report"} path={"/report/daily-sale"}/>
            <ReportCard title={"Yesterday Sale Report"} path={"/report/yesterday-sale"}/>
            <ReportCard title={"Weekly Sale Report"} path={"/report/weekly-sale"}/>
            <ReportCard title={"Monthly Sale Report"} path={"/report/monthly-sale"}/>
        </Box>
      </Container>
    </Box>
  );
}
