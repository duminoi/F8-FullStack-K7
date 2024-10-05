"use client";
import FormCategory from "@/(components)/FormCategory";
import { getCategory, setIsEdit } from "@/app/store/slice/categorySlice";
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

export default function () {
  // function createData(name, calories, fat, carbs, protein) {
  //   return { name, calories, fat, carbs, protein };
  // }
  const [categoryId, setCategoryId] = useState(false);
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  const rows = categories;
  const columns = ["id", "name", "short_name", "order_num"];

  const handleEdit = (e) => {
    setCategoryId(e.currentTarget.dataset.id);
    dispatch(setIsEdit(true));
  };

  useEffect(() => {
    dispatch(getCategory());
  }, []);
  return (
    <div className="flex flex-col justify-center items-center gap-3 mx-[5rem]">
      <h1 className="text-3xl">Category</h1>
      <FormCategory id={categoryId}></FormCategory>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column}>{column}</TableCell>
              ))}
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id} // Đảm bảo mỗi hàng có một key duy nhất
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {columns.map((column) => (
                  <TableCell key={`${column}-${row.id}`}>
                    {row[column]}
                  </TableCell>
                ))}
                <TableCell data-id={row.id}>
                  <div
                    onClick={handleEdit}
                    data-id={row.id}
                    className="flex gap-4"
                  >
                    <EditFilled data-id={row.id} />
                    <DeleteFilled data-id={row.id} />
                    <EyeFilled data-id={row.id} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
