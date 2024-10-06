"use client";
import FormProduct from "@/(components)/FormProduct";
import {
  deleteProduct,
  getProduct,
  setIsEdit,
} from "@/app/store/slice/productSlice";
import { EditFilled, DeleteFilled, EyeFilled } from "@ant-design/icons";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
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
  const [productId, setProductId] = useState(false);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const rows = products;
  // const columns = ["id", "name", "category_id", "order_num"];
  const columns = [
    { value: "id", text: "Id" },
    { value: "name", text: "Tên" },
    { value: "category_id", text: "Id thể loại" },
    { value: "order_num", text: "Vị trí" },
  ];
  const handleEdit = (e) => {
    // console.log("vào đây");
    setProductId(e.currentTarget.dataset.id);
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
    dispatch(deleteProduct(deleteId));
    handleClose();
  };

  useEffect(() => {
    dispatch(getProduct());
  }, []);
  return (
    <div className="flex flex-col justify-center items-center gap-3 mx-[5rem]">
      <h1 className="text-3xl">Products</h1>
      <FormProduct id={productId} setProductId={setProductId}></FormProduct>
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
    </div>
  );
}
