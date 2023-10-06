import { formatTimestamp } from "@/utils/time";
import React, { useEffect, useState } from "react";

function TimeFormat({ time }: { time: number }) {
  const [timeFormat, setTimeFormat] = useState(formatTimestamp(time));

  const renderTime = () => {
    switch (timeFormat.unit) {
      case "seconds":
        return `${timeFormat.time} giây trước`;
      case "minutes":
        return `${timeFormat.time} phút trước`;
      case "hours":
        return `${timeFormat.time} giờ trước`;
      case "days":
        return `${timeFormat.time} ngày trước`;
      case "months":
        return `${timeFormat.time} tháng trước`;
      default:
        return `${timeFormat.time}`;
    }
  };

  useEffect(() => {
    if (timeFormat.unit !== "hours") return;
    if (Number(timeFormat.time) > 1) return;

    const interval = setInterval(() => {
      setTimeFormat(formatTimestamp(time));
    }, 1000);
    return () => clearInterval(interval);
  }, [time, timeFormat]);

  return (
    <p className="text-[12px] text-gray-500 whitespace-nowrap mr-0 ml-auto">
      {renderTime()}
    </p>
  );
}

export default React.memo(TimeFormat);
