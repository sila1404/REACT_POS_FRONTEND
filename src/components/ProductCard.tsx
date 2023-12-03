import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import img from "../assets/image/no_image.jpg";

type Props = {
  id: string;
  barcode: string;
  name: string;
  price: number;
  qty: number;
  handleAddProductToSale: (
    id: string,
    barcode: string,
    price: number,
    qty: number,
    name: string
  ) => void;
};

function ProductCard(props: Props) {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia
        sx={{ height: 140, objectFit: "contain" }}
        image={img}
        title="water"
        component="img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.price} LAK
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            props.handleAddProductToSale(
              props.id,
              props.barcode,
              props.price,
              props.qty,
              props.name
            );
          }}
        >
          Add
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
