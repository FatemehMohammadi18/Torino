"use client";

import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function PersianDatePicker({ dateRange, setDateRange }) {
  return (
    <DatePicker
      value={dateRange}
      onChange={setDateRange}
      range
      containerClassName="custom-date-picker"
      calendar={persian}
      locale={persian_fa}
      calendarPosition="bottom-center"
      highlightToday={true}
      numberOfMonths={1}
      shadow={true}
      format="YYYY/MM/DD"
      weekDays={["ش", "ی", "د", "س", "چ", "پ", "ج"]}
      months={[
        "فروردین",
        "اردیبهشت",
        "خرداد",
        "تیر",
        "مرداد",
        "شهریور",
        "مهر",
        "آبان",
        "آذر",
        "دی",
        "بهمن",
        "اسفند",
      ]}
      plugins={[<DatePanel key="date-panel" position="right" />]}
      placeholder="تاریخ"
    />
  );
}

export default PersianDatePicker;
