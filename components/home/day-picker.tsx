"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";

export const DayPicker = () => {
  const [dateValue, setDateValue] = useState<DateRange | undefined>(undefined);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          id="date"
          variant="outline"
          className={cn(
            "w-full justify-start rounded-md text-left gap-4 font-normal text-orange-500 hover:text-orange-800",
            !dateValue && "text-muted-foreground"
          )}
        >
          {dateValue?.from ? (
            dateValue.to ? (
              <>
                {format(dateValue.from, "dd/MM/yyyy", {
                  locale: vi,
                })}{" "}
                - {format(dateValue.to, "dd/MM/yyyy", { locale: vi })}
              </>
            ) : (
              format(dateValue.from, "dd/MM/yyyy", { locale: vi })
            )
          ) : (
            <span>Chọn ngày</span>
          )}
          <CalendarIcon className="mr-2 h-4 w-4 text-black" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={dateValue?.from}
          selected={dateValue}
          onSelect={setDateValue}
          numberOfMonths={2}
        />
      </PopoverContent>
    </Popover>
  );
};
