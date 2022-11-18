import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarIcon } from "@heroicons/react/outline";
// import checkinImage from "../../../assets/checkin.PNG";
const DatePickers = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    // <img src={checkinImage} />
    <div className="flex p-16 relative space-x-5">
      <div>
        <CalendarIcon className="h-4 left-18  top-20 absolute" />
        <DatePicker
          className="text-center border-l border-red w-40 p-3 rounded text-sm  outline-none  focus:ring-0 bg-transparent"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="MMMM d, yyyy "
        />
      </div>
      <DatePicker
        className="text-center p-3 w-40 rounded text-sm  outline-none  focus:ring-0 bg-transparent"
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        dateFormat="MMMM d, yyyy "
      />
    </div>
  );
};

export default DatePickers;
