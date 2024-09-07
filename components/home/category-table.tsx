"use client";

import { categories } from "@/app/data/categories";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export const CategoryTable = () => {
  const lstCategory = categories;

  return (
    <Table>
      <TableHeader className="bg-emerald-300">
        <TableRow>
          <TableHead className="font-semibold text-white text-center border-r border-emerald-100">
            Tên danh mục
          </TableHead>
          <TableHead className="font-semibold text-white text-center border-r border-emerald-100">
            Ngày bắt đầu
          </TableHead>
          <TableHead className="font-semibold text-white text-center border-r border-emerald-100">
            Ngày kết thúc
          </TableHead>
          <TableHead className="font-semibold text-white text-center border-r border-emerald-100">
            Tăng/Giảm (%)
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {lstCategory.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="bg-cyan-950 text-orange-500 p-3">
              {item.name}
            </TableCell>
            <TableCell className="text-center text-orange-500 p-3 bg-white">
              {item.valueStart}
            </TableCell>
            <TableCell className="text-center text-orange-500 p-3 bg-white">
              {item.valueEnd}
            </TableCell>
            <TableCell className="text-center text-orange-500 p-3 bg-white">
              {item.rate}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
