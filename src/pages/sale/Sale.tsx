import { useEffect, useState } from "react";

import SaleProduct from "./SaleProduct";
import SaleDetail from "./SaleDetail";
import SaleService from "@/services/SaleService";
import ProductService from "@/services/ProductService";

import AlertBox from "@/components/AlertBox";

type Props = {};

export default function Sale({}: Props) {
  const [productList, setProductList] = useState([]);
  const [productToSale, setProductToSale] = useState<any[]>([]);
  const [saleData, setSaleData] = useState<any>({});
  const [openAlertBox, setOpenAlertBox] = useState(false);
  const [aletBoxStatus, setAlertBoxStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    try {
      const getProducts = async () => {
        const products = await ProductService.getProducts();

        if (products.data.success) {
          setProductList(products.data.data);
        } else {
          console.log(products);
        }
      };
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleAddProductToSale = (
    _id: string,
    barcode: string,
    price: number,
    qty: number,
    name: string
  ) => {
    let newArr: any[] = [...productToSale];
    let index = newArr.findIndex((product) => product.barcode === barcode);

    if (index === -1) {
      let qtyToSale = 1;
      let total = price * qtyToSale;

      newArr.push({ _id, barcode, price, qtyToSale, total, qty, name });
    } else {
      if (newArr[index].qtyToSale === qty) {
        return;
      } else {
        newArr[index].qtyToSale++;
        newArr[index].total = newArr[index].qtyToSale * price;
      }
    }

    setProductToSale(newArr);
  };

  const handleDeleteProductToSale = (id: string) => {
    let newArr = productToSale.filter((product) => product._id !== id);
    setProductToSale(newArr);
  };

  const handleSelectPaymentMethod = (method: string) => {
    setSaleData({ ...saleData, paymentMethod: method });
  };

  const handleCheckout = async () => {
    try {
      const data = {
        total: productToSale.reduce((acc, curr) => acc + curr.total, 0),
        paymentMethod: saleData.paymentMethod,
        products: productToSale,
      };

      const sale = await SaleService.createSale(data);
      console.log(sale)

      if (sale.data.success) {
        setOpenAlertBox(true);
        setAlertBoxStatus(true);
        setProductToSale([]);
        setSaleData({});
      } else {
        setAlertBoxStatus(false);
        setOpenAlertBox(true);
        setErrorMessage(sale.data.message)
      }
    } catch (error: any) {
      console.log(error);
      setAlertBoxStatus(false);
      setOpenAlertBox(true);
      setErrorMessage(error.response.data.message)
    }
  };

  return (
    <div
      style={{ backgroundColor: "#d3d3d3", height: "100vh", display: "flex" }}
    >
      <div style={{ flex: 3, marginTop: 35 }}>
        <SaleProduct
          productList={productList}
          handleAddProductToSale={handleAddProductToSale}
        />
      </div>
      <div style={{ flex: 1 }}>
        <SaleDetail
          productToSale={productToSale}
          handleSelectPaymentMethod={handleSelectPaymentMethod}
          saleData={saleData}
          handleCheckout={handleCheckout}
          handleDeleteProductToSale={handleDeleteProductToSale}
        />
      </div>
      <AlertBox
        open={openAlertBox}
        setOpen={setOpenAlertBox}
        success={aletBoxStatus}
        errorMessage={errorMessage}
      />
    </div>
  );
}
