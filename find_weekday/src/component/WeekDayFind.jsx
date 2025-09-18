import React, { useState } from "react";

const WeekDayFind = () => {
  const [date, setDate] = useState("");
  const [result, setResult] = useState("");

  const handleFindDay = () => {
    if (!date) return;

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const selectedDate = new Date(date);
    const dayName = days[selectedDate.getUTCDay()];

    setResult(`That date falls on ${dayName}`);
  };

  return (
    <div className="container">
      <h1>Get Weekday</h1>

      <input
        type="date"
        data-testid="date-in-put"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button data-testid="find-day-btn" onClick={handleFindDay}>
        Find Day
      </button>

      {result && (
        <p className="result" data-testid="result">
          {result}
        </p>
      )}
    </div>
  );
};

export default WeekDayFind;
