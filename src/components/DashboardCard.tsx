import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

type Props = {
  title: string;
  amount: number;
  color: string;
  loading: boolean;
};

export default function DashboardCard(props: Props) {
  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <Card sx={{ width: 275, m: 2 }}>
      <CardContent>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="h5" component="div" color={props.color}>
          {props.loading ? <CircularProgress /> : numberWithCommas(props.amount) + " LAK"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">More</Button>
      </CardActions>
    </Card>
  );
}
