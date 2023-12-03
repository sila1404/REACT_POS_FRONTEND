import { Container, Grid, Paper } from "@mui/material";
import ProductCard from "@/components/ProductCard";

type Props = {
  productList: any[];
  handleAddProductToSale: (
    id: string,
    barcode: string,
    price: number,
    qty: number,
    name: string
  ) => void;
};

function SaleProduct(props: Props) {
  return (
    <Container maxWidth="lg">
      <Paper sx={{ p: 5 }}>
        <Grid container spacing={2}>
          {props.productList.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.barcode}>
              <ProductCard
                id={product._id}
                barcode={product.barcode}
                name={product.name}
                price={product.price}
                qty={product.qty}
                handleAddProductToSale={props.handleAddProductToSale}
              />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}

export default SaleProduct;
