import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Sale from "./pages/sale/Sale";
import Product from "./pages/product/Product";
import User from "./pages/user/User";
import Register from "./pages/register/Register";
import Report from "./pages/report/Report";
import NotFound from "./pages/NotFound";
import DailyReport from "./pages/report/DailyReport";
import YesterdayReport from "./pages/report/YesterdayReport";
import WeeklyReport from "./pages/report/WeeklyReport";
import MonthlyReport from "./pages/report/MonthlyReport";

import { PrivateRoute, AuthRoute } from "./utils/Router/ProtectedRoutes";
import authService from "./services/authService";

import Drawer from "./components/Drawer";

type Props = {};

export default function App({}: Props) {
  const [isAuth, setIsAuth] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      authService
        .validateToken()
        .then((res) => {
          if (res.data.success) {
            setIsAuth(true);
          } else {
            setIsAuth(false);
            localStorage.removeItem("token");
          }
        })
        .catch((err) => {
          console.log(err);
          setIsAuth(false);
          localStorage.removeItem("token");
        });

      if (token) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (loading) {
    return <div>Loading.....</div>;
  }

  return (
    <BrowserRouter>
      {isAuth && <Drawer setIsAuth={setIsAuth} />}
      <div style={{ marginLeft: isAuth ? 70 : 0 }}>
        <Routes>
          <Route path="/" element={<PrivateRoute isAuth={isAuth} />}>
            <Route path="/" element={<Home />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/product" element={<Product />} />
            <Route path="/user" element={<User />} />
            <Route path="/report" element={<Report />} />

            <Route path="/report/daily-sale" element={<DailyReport />} />
            <Route path="/report/yesterday-sale" element={<YesterdayReport />} />
            <Route path="/report/weekly-sale" element={<WeeklyReport />} />
            <Route path="/report/monthly-sale" element={<MonthlyReport />} />
          </Route>

          <Route path="/" element={<AuthRoute isAuth={isAuth} />}>
            <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
