import React, { useState } from "react";

export default function GetWeekday() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-200 ">
      <div className="bg-white h-[300px] w-[400px] rounded-xl flex flex-col items-center gap-4 px-6">
        <h1 className="text-center p-2 font-bold">Get Weekday</h1>
        <input type="date" data-testid="date-input" />
        <button className="bg-blue-500 px-6 py-4 ">Find Day</button>
      </div>
    </div>
  );
}
