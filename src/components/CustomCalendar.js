"use client";
import { useState } from "react";
import moment from "moment";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const events = [
  { title: "G-DIS", date: "2025-04-05", mode: "Online", link: "Zoom" },
  { title: "G-labs", date: "2025-04-05", mode: "Offline - CATS" },
  { title: "Training X", date: "2025-04-07", mode: "Online" },
];

export default function CustomCalendar() {
  const [currentMonth, setCurrentMonth] = useState(moment());
  const [selectedDate, setSelectedDate] = useState(null);

  const startOfMonth = currentMonth.clone().startOf("month");
  const endOfMonth = currentMonth.clone().endOf("month");
  const startDate = startOfMonth.clone().startOf("week");
  const endDate = endOfMonth.clone().endOf("week");

  const days = [];
  const current = startDate.clone();

  while (current.isBefore(endDate)) {
    days.push(current.clone());
    current.add(1, "day");
  }

  const handlePrev = () => {
    setCurrentMonth(currentMonth.clone().subtract(1, "month"));
    setSelectedDate(null);
  };

  const handleNext = () => {
    setCurrentMonth(currentMonth.clone().add(1, "month"));
    setSelectedDate(null);
  };

  const getEventsForDate = (date) => {
    return events.filter((event) => moment(event.date).isSame(date, "day"));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Calendar - 3/4 width */}
        <div className="w-full md:w-3/4">
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={handlePrev}
              className="bg-white border rounded px-2 py-2 hover:bg-gray-100 text-[#a58255]  border-[#a58255]"
            >
              <SlArrowLeft />
            </button>
            <h3 className="text-xl font-semibold font-inter">
              {currentMonth.format("MMMM YYYY")}
            </h3>
            <button
              onClick={handleNext}
              className="bg-white border rounded px-2 py-2 hover:bg-gray-100 text-[#a58255]  border-[#a58255]"
            >
             <SlArrowRight />
            </button>
          </div>

          {/* Week Days */}
          <div className="grid grid-cols-7 gap-2 text-center font-medium mb-2 ">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-2 text-center text-sm ">
            {days.map((day, idx) => {
              const isCurrentMonth = day.month() === currentMonth.month();
              const isSelected = selectedDate?.isSame(day, "day");
              const isToday = day.isSame(moment(), "day");
              const hasEvent = getEventsForDate(day).length > 0;

              let bgColor = "bg-gray-100 text-black";
              if (isToday) bgColor = "bg-blue-500 text-white";
              if (isSelected) bgColor = "bg-[#a58255] text-white"; // override if selected

              return (
                <div
                  key={idx}
                  className={`rounded-lg p-4 cursor-pointer flex flex-col items-center justify-center ${bgColor} ${
                    !isCurrentMonth ? "text-gray-400" : ""
                  }`}
                  onClick={() => setSelectedDate(day)}
                >
                  <div className="relative">
                    {day.date()}
                    {hasEvent && (
                      <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-500 rounded-full"></span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Events Card - 1/4 width */}
        <div className="w-full lg:w-1/4">
          {selectedDate && getEventsForDate(selectedDate).length > 0 ? (
            <div className="space-y-4">
              {getEventsForDate(selectedDate).map((event, i) => (
                <div
                  key={i}
                  className="border rounded-xl p-4 shadow flex flex-col gap-1"
                >
                  <h3 className="text-lg font-bold text-[#a58255]">
                    {event.title}
                  </h3>
                  <p className="text-sm">Module - {event.title}</p>
                  <p className="text-sm">Time: No time</p>
                  <p className="text-sm">{event.title}</p>
                  <div className="text-sm text-[#007367]">
                    {event.mode === "Online" ? (
                      <a href="#" className="underline">
                        Join Zoom
                      </a>
                    ) : (
                      <span>{event.mode}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : selectedDate ? (
            <p className="text-gray-500 text-center font-inter">No events for this day.</p>
          ) : (
            <p className="text-gray-500 text-center font-inter">Select a date to view events.</p>
          )}
        </div>
      </div>
    </div>
  );
}
