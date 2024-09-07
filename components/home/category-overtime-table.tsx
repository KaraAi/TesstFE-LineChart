"use client";

import { categoriesOvertime } from "@/app/data/categories";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export const CategoryOvertimeTable = () => {
  const categoryOvertimeData = categoriesOvertime;
  const categorieNames = categoryOvertimeData[0].categoryData.map(
    (item) => item.name
  );
  const [page, setPage] = useState(1);

  return (
    <Table>
      <TableHeader className="bg-emerald-300">
        <TableRow>
          <TableHead className="font-semibold text-white text-center border-r border-emerald-100">
            Ngày
          </TableHead>
          {categorieNames.map((item) => (
            <TableHead
              key={item}
              className="font-semibold text-white text-center border-r border-emerald-100"
            >
              {item}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {categoryOvertimeData.map((item) => (
          <TableRow key={item.date.toLocaleDateString("vi-VN")}>
            <TableCell className="text-cyan-900 font-medium p-3 bg-white">
              {format(item.date, "dd/MM/yyyy")}
            </TableCell>
            {item.categoryData.map((category) => (
              <TableCell
                key={category.name}
                className="text-center text-cyan-900 font-medium p-3 bg-white"
              >
                {category.value}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          {/* Pagination */}
          <TableCell colSpan={4} className="py-6 bg-white text-center">
            <div className="flex items-center justify-center w-full gap-2.5">
              <Button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                size="icon"
                className="disabled:bg-neutral-300 bg-orange-500 hover:bg-orange-500/70"
              >
                <ChevronLeft />
              </Button>
              {[1, 2, 3, 4, 5].map((item, index) => (
                <Button
                  key={index}
                  onClick={() => setPage(index + 1)}
                  className={cn(
                    "bg-transparent hover:bg-transparent shadow-none font-semibold",
                    page === index + 1 ? "text-orange-500" : "text-cyan-900"
                  )}
                >
                  {item}
                </Button>
              ))}
              <Button
                disabled={page === 5}
                onClick={() => setPage(page + 1)}
                size="icon"
                className="disabled:bg-neutral-300 bg-orange-500 hover:bg-orange-500/70"
              >
                <ChevronRight />
              </Button>
            </div>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};
