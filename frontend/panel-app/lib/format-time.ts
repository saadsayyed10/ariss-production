export const formatTo12Hour = (isoTime: string): string => {
  const timePart = isoTime.split("T")[1]?.split(".")[0]; // "04:34:11"
  if (!timePart) return "";

  const [hours, minutes, seconds] = timePart.split(":").map(Number);
  const period = hours >= 12 ? "PM" : "AM";
  const hour12 = hours % 12 || 12; // Convert 0/12 to 12

  return `${hour12}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${period}`;
};
