export const convertHourStringToMinutes = (hourString: string) => {
  const [hours, minutes] = hourString.split(":").map(Number);
  const minutesAmount = hours * 60 + minutes;
  return minutesAmount;
};

export const convertMinutesToHourString = (minutesAmount: number) => {
  const hours = Math.floor(minutesAmount / 60);
  const minutes = minutesAmount % 60;
  const addZerofill = (number: number) => String(number).padStart(2, "0");

  return `${addZerofill(hours)}:${addZerofill(minutes)}`;
};
