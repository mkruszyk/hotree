export const formatTime = (data) => {
  const { selectedValue } = data;
  const { value } = data.time;
  if (value.length === 0) {
    return data;
  }

  const arr = value.split(":");

  let hours = Number(arr[0]);
  let minutes = Number(arr[1]);

  if (selectedValue === "pm" && hours < 12) { hours = hours + 12; }
  if (selectedValue === "am" && hours >= 12) { hours = hours - 12; }
  if (hours < 10) { hours = `0${hours}`; }
  if (minutes < 10) { minutes = `0${minutes}`; }
  
  data.time.value = `${hours}:${minutes}`;
  
  return data;
};  
