"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CategoryEstimateChart } from "./charts/category-est-chart";

const tableData = [
  {
    name: "Danh mục A",
    value: "+5,87%",
    
  },
  {
    name: "Danh mục B",
    value: "+10,3%",
    
  },
  {
    name: "Danh mục C",
    value: "-2,3%",
    
  },
];

export const CategoryChangesTable = () => {
 
  return (
    <Table>
      <TableHeader className="bg-emerald-300">
        <TableRow>
          <TableHead
            colSpan={2}
            className="font-semibold text-white text-center border-r border-emerald-100"
          >
            Thay đổi của giá trị danh mục
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="grid grid-cols-1 md:grid-cols-2">
          <TableCell className="bg-white p-3">
            <h1 className="text-lg text-cyan-700 font-semibold">
              Từ lúc bắt đầu danh mục
            </h1>
            <CategoryEstimateChart />
          </TableCell>
          <TableCell className="text-center p-3 bg-white">
            <div className="flex items-center justify-between">
              <h1 className="text-lg whitespace-nowrap text-cyan-700 font-semibold">
                Thời gian
              </h1>
              <Select>
                <SelectTrigger className="text-orange-500 rounded-md w-fit">
                  <SelectValue placeholder="Tất cả" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value="1"
                    className="text-orange-500 focus:text-orange-800"
                  >
                    1 ngày trước
                  </SelectItem>
                  <SelectItem
                    value="7"
                    className="text-orange-500 focus:text-orange-800"
                  >
                    7 ngày qua
                  </SelectItem>
                  <SelectItem
                    value="30"
                    className="text-orange-500 focus:text-orange-800"
                  >
                    1 tháng qua
                  </SelectItem>
                  <SelectItem
                    value="90"
                    className="text-orange-500 focus:text-orange-800"
                  >
                    3 tháng qua
                  </SelectItem>
                  <SelectItem
                    value="180"
                    className="text-orange-500 focus:text-orange-800"
                  >
                    6 tháng qua
                  </SelectItem>
                  <SelectItem
                    value="365"
                    className="text-orange-500 focus:text-orange-800"
                  >
                    1 năm qua
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
             <div className="grid grid-cols-1 gap-2 mt-3">
              {tableData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2"
                >
                  <span className="text-lg">{item.name}</span>
                  <span
                    className={`font-semibold ${
                      item.value.startsWith("+")
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </TableCell>
         
        </TableRow>
      </TableBody>
    </Table>
  );
};
