import { Drawer, List, ListItem, ListItemButton } from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";
import InventoryIcon from "@mui/icons-material/Inventory";
import ReportIcon from "@mui/icons-material/Report";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import HomeIcon from "@mui/icons-material/Home";

import { useNavigate } from "react-router-dom";

type Props = {
  setIsAuth: (isAuth: boolean) => void;
};

const drawerWidth = 70;

const listIcons = [
  { path: "/", icon: <HomeIcon /> },
  { path: "/sale", icon: <PointOfSaleIcon /> },
  { path: "/product", icon: <InventoryIcon /> },
  { path: "/report", icon: <ReportIcon /> },
  { path: "/user", icon: <ManageAccountsIcon /> },
];

export default function drawer(props: Props) {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    props.setIsAuth(false);
  };

  return (
    <Drawer variant="permanent" sx={{ width: drawerWidth }}>
      <List>
        {listIcons.map((icon, index) => {
          return (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => {
                  handleNavigate(icon.path);
                }}
                sx={{ minHeight: 48, justifyContent: "center", px: 2.5 }}
              >
                {icon.icon}
              </ListItemButton>
            </ListItem>
          );
        })}
        <ListItemButton
          onClick={handleLogout}
          sx={{ minHeight: 48, justifyContent: "center", px: 2.5 }}
        >
          <LogoutIcon />
        </ListItemButton>
      </List>
    </Drawer>
  );
}
