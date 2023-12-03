import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import img from "@/assets/image/no_image.jpg";

type Props = {
  barcode: string;
  id: string
  name: string;
  price: number;
  qtyToSale: number;
  handleDeleteProductToSale: (id: string) => void;
};

export default function OrderItem(props: Props) {
  return (
    <Card sx={{ display: "flex", margin: 1 }}>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        image={img}
        alt="Water Bottle"
      />
      <CardContent sx={{ display: "flex", width: "100%" }}>
        <Box flex={3}>
          <Typography component="div" variant="body1">
            {props.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Qty: {props.qtyToSale}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Price: {props.price}
          </Typography>
        </Box>
        <Box flex={1} justifyContent={"flex-end"}>
          <IconButton onClick={() => props.handleDeleteProductToSale(props.id)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}
