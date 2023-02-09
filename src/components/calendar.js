import React, { useState } from "react";

const Calender = () => {
  let date = new Date();
  let today = date.getDate();
  const [month, setMonth] = useState(date.getMonth());
  let year = date.getFullYear();
  var MONTHS = [
    { ndays: 31, month: "January" },
    { ndays: 28, month: "February" },
    { ndays: 31, month: "March" },
    { ndays: 30, month: "April" },
    { ndays: 31, month: "May" },
    { ndays: 30, month: "June" },
    { ndays: 31, month: "July" },
    { ndays: 31, month: "August" },
    { ndays: 30, month: "September" },
    { ndays: 31, month: "October" },
    { ndays: 30, month: "November" },
    { ndays: 31, month: "December" },
  ];
  var days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const setOffsetdays = () => {
    let offset = days.length - MONTHS[month].ndays;
    console.log("offset" + offset);
    for (var i = 0; i < offset; i++) {
      days.pop();
    }
  };
  setOffsetdays();
  const handleNextmonth = () => {
    setMonth(month + 1);
    console.log(days);
  };
  const handleLastmonth = () => {
    setMonth(month - 1);
  };
  return (
    <>
      <div className="flex flex-row justify-center">
        <button
          onClick={handleLastmonth}
          className="rounded-full px-3 m-5 bg-darkPurple text-white"
        >
          <i className="text-lg fa-solid fa-caret-left"></i>
        </button>
        <h1 className="flex justify-center text-center my-5  text-black">
          {MONTHS[month].month} {year}
        </h1>
        <button
          onClick={handleNextmonth}
          className="rounded-full px-3 m-5 bg-darkPurple text-white"
        >
          <i className="text-lg fa-solid fa-caret-right"></i>
        </button>
      </div>
      <div className="flex flex-wrap w-[5/6] max-w-[1000px] justify-center   mx-auto">
        {days.map((day, index) => {
          return (
            <div
              key={index}
              className={`flex w-[140px] h-[140px]   text-black border ${
                day === today &&
                month === date.getMonth() &&
                "bg-darkPurple text-white"
              }`}
            >
              <div className="m-3 text-lg "> {day}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Calender;
