import React from "react";

const Calender = () => {
  let date = new Date();
  let today = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  return (
    <>
      <h1 className="flex justify-center text-center my-5 mx-auto text-black">
        {monthNames[month]} {year}
      </h1>
      <div className="flex flex-wrap w-5/6 h-3/6   mx-auto">
        {days.map((day) => {
          return (
            <div
              className={`flex w-[14%] h-1/4  text-black border ${
                day === today && "bg-darkPurple text-white"
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
