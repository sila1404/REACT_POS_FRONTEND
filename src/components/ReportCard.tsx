import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  path: string
};

export default function ReportCard(props: Props) {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(props.path);
  };

  return (
    <Card sx={{ width: 275, m: 2 }}>
      <CardContent>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          {props.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={navigateTo}>
          View
        </Button>
      </CardActions>
    </Card>
  );
}
