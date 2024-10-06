"use client";
import FormCategory from "@/(components)/FormCategory";
import {
  deleteCategory,
  getCategory,
  setIsEdit,
} from "@/app/store/slice/categorySlice";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CommonTable from "@/(components)/CommonTable";

export default function () {
  // function createData(name, calories, fat, carbs, protein) {
  //   return { name, calories, fat, carbs, protein };
  // }
  const { isLoading } = useSelector((state) => state.category);
  console.log(isLoading);

  const [categoryId, setCategoryId] = useState(false);
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const rows = categories;
  // const columns = ["id", "name", "short_name", "order_num"];
  const columns = [
    { value: "id", text: "Id" },
    { value: "name", text: "Tên" },
    { value: "short_name", text: "Tên ngắn" },
    { value: "order_num", text: "Vị trí" },
  ];
  const handleEdit = (e) => {
    // console.log("vào đây");
    setCategoryId(e.currentTarget.dataset.id);
    dispatch(setIsEdit(true));
  };
  const handleOpen = (e) => {
    setDeleteId(e.currentTarget.dataset.id);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    console.log("deleteId", deleteId);
    dispatch(deleteCategory(deleteId));
    handleClose();
  };

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-3 mx-[5rem]">
      <h1 className="text-3xl">Category</h1>
      <FormCategory
        id={categoryId}
        setCategoryId={setCategoryId}
      ></FormCategory>
      <CommonTable
        columns={columns}
        rows={rows}
        handleEdit={handleEdit}
        handleOpen={handleOpen}
      ></CommonTable>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Xác nhận trước khi xóa?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn đã chắn chắn xóa dữ liệu này? nếu đã xóa sẽ không thể khôi phục
            được
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Không</Button>
          <Button onClick={handleDelete} autoFocus>
            Đồng ý
          </Button>
        </DialogActions>
      </Dialog>
      {isLoading && <ClimbingBoxLoader />}
    </div>
  );
}
