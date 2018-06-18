export const formatTime = data => {
  const { value, am_pm } = data.time;
  const { selectedValue } = data;
console.log('DEBUG formatTIME: ', 'wlazi');
  const arr = value.split(":");
  let hours = Number(arr[0]);
  let minutes = Number(arr[1]);
  console.log('DEBUG hours, minutes: ', hours, minutes);

  if (selectedValue !== am_pm) {
    if (selectedValue === "pm" && hours < 12) {
      hours = hours + 12;
    }
    if (selectedValue === "am" && hours > 12) {
      hours = hours - 12;
    }
    if (selectedValue === "am" && hours === 12) {
      hours = hours - 12;
    }
  } else {
    if (am_pm === "pm" && hours < 12) {
      hours = hours + 12;
    }
    if (am_pm === "am" && hours === 12) {
      hours = hours - 12;
    }
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  console.log('DEBUG hours, minutes: ', hours, minutes);
  data.time.value = `${hours}:${minutes}`;
  return data;
};
