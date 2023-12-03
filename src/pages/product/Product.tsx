import { useState, useEffect } from "react";
import { Typography, Button, Container, Box } from "@mui/material";

import CreateProductDialog from "./ProductDialog";
import EditProductDialog from "./ProductDialog";
import ProductTable from "./ProductTable";

import ProductService from "@/services/ProductService";

type Props = {};

export default function Product({}: Props) {
  const [productList, setProductList] = useState<any>([]);
  const [openCreateProductDialog, setOpenCreateProductDialog] = useState(false);
  const [openEditProductDialog, setOpenEditProductDialog] = useState(false);
  const [productData, setProductData] = useState<any>({});
  const [productID, setProductID] = useState("");

  useEffect(() => {
    try {
      const getProducts = async () => {
        const product = await ProductService.getProducts();

        if (product.data.success) {
          setProductList(product.data.data);
        } else {
          console.log(product)
        }
      };
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleChange = (e: any) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleCreateProduct = async () => {
    try {
      const products = await ProductService.createProduct(productData);
      if (products.data.success) {
        let newProductList = [...productList];
        newProductList.push(products.data.data);
        setProductList(newProductList);
        setOpenCreateProductDialog(false);
        setProductData({});
      } else {
        console.log(products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateProduct = async () => {
    try {
      const products = await ProductService.updateProducts(
        productID,
        productData
      );

      if (products.data.success) {
        let newProductList = [...productList];
        let index = newProductList.findIndex(
          (product) => product._id === productID
        );
        newProductList[index] = products.data.data;
        setProductList(newProductList);
        setOpenEditProductDialog(false);
        setProductData({});
        setProductID("");
      } else {
        console.log(products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteProduct = async (id: string) => {
    try {
      const product = await ProductService.deleteProducts(id);

      if (product.data.success) {
        let newProductList = [...productList];
        let index = newProductList.findIndex(
          (product) => product._id === productID
        );
        newProductList.splice(index, 1);
        setProductList(newProductList);
      } else {
        console.log(product);
      }

    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenEdit = (id: string, data: any) => {
    setOpenEditProductDialog(true);
    setProductID(id);
    setProductData(data);
  };

  return (
    <Container maxWidth="xl">
      <Box
        sx={{ display: "flex", justifyContent: "space-between" }}
        marginY={2}
      >
        <Typography variant="h4">Product Management</Typography>
        <Button
          variant="contained"
          onClick={() => setOpenCreateProductDialog(true)}
        >
          + Create
        </Button>
      </Box>
      <CreateProductDialog
        open={openCreateProductDialog}
        setOpen={setOpenCreateProductDialog}
        handleChange={handleChange}
        title="Add Product"
        buttonText="Create"
        handleClick={handleCreateProduct}
        data={productData}
      />
      <EditProductDialog
        open={openEditProductDialog}
        setOpen={setOpenEditProductDialog}
        handleChange={handleChange}
        title="Edit Product"
        buttonText="Edit"
        handleClick={handleUpdateProduct}
        data={productData}
      />
      <ProductTable
        onEdit={handleOpenEdit}
        dataList={productList}
        handleDeleteProduct={handleDeleteProduct}
      />
    </Container>
  );
}
