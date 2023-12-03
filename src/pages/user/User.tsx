import { useState, useEffect } from "react";

import { Box, Button, Container, Typography } from "@mui/material";

import UserTable from "./UserTable";
import CreateUserDialog from "./UserDialog";
import EditUserDialog from "./UserDialog";

import UserService from "@/services/UserService";

type Props = {};

export default function User({}: Props) {
  const [userList, setUserList] = useState<any>([]);
  const [openCreateUsertDialog, setOpenCreateUsertDialog] = useState(false);
  const [openEditUsertDialog, setOpenEditUsertDialog] = useState(false);
  const [userData, setUserData] = useState<any>({});
  const[userID, setUserID] = useState("")

  const handleOpenEdit = (id: string, data: any) => {
    setOpenEditUsertDialog(true);
    setUserID(id);
    setUserData(data);
  };

  useEffect(() => {
    try {
      const getUser = async () => {
        const user = await UserService.getUsers();
        setUserList(user.data.data);
      };
      getUser();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleChange = (e: any) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleCreateUser = async () => {
    try {
      const user = await UserService.createUser(userData)

      if(user.data.success) {
        let newUserList = [...userList]
        newUserList.push(user.data.data)
        setUserList(newUserList)
        setOpenCreateUsertDialog(false)
        setUserData({})
      }else {
        console.log(user)
      }
    } catch (error) {
      console.log(error)
    }
    
  }

  const handleUpdateUser = async () => {
    try {
      const user = await UserService.updateUser(userID, userData)

      if(user.data.success) {
        let newUserList = [...userList]
        let index = newUserList.findIndex((user) => user._id === userID)
        newUserList[index] = user.data.data
        setUserList(newUserList)
        setOpenEditUsertDialog(false)
        setUserData({})
        setUserID("")
      } else {
        console.log(user)
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  const deleteUser = async (id: string) => {
    try{
      const user = await UserService.deleteUser(id)

      if(user.data.success) {
        const newUserList = [...userList]
        const index = newUserList.findIndex(user => user._id === userID)
        newUserList.splice(index, 1)
        setUserList(newUserList)
      }
    }catch(error) {
      console.log(error)
    }
  }

  return (
    <Container maxWidth="xl">
      <Box
        sx={{ display: "flex", justifyContent: "space-between" }}
        marginY={2}
      >
        <Typography variant="h4">User Management</Typography>
        <Button
          variant="contained"
          onClick={() => setOpenCreateUsertDialog(true)}
        >
          + Create
        </Button>
      </Box>
      <CreateUserDialog
        title="Add User"
        buttonText="Create"
        open={openCreateUsertDialog}
        setOpen={setOpenCreateUsertDialog}
        handleChange={handleChange}
        handleClick={handleCreateUser}
        data={userData} 
      />
      <EditUserDialog
        title="Edit User"
        buttonText="Edit"
        open={openEditUsertDialog}
        setOpen={setOpenEditUsertDialog}
        handleChange={handleChange}
        handleClick={handleUpdateUser}
        data={userData} 
      />
      <UserTable onEdit={handleOpenEdit} dataList={userList} deleteUser={deleteUser} />
    </Container>
  );
}
