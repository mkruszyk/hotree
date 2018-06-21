const formatTime = (selected, value) => {
  if (value.length === 0) {
    return value;
  }
  let time = value;

  const arr = time.split(':');

  let hours = Number(arr[0]);
  let minutes = Number(arr[1]);

  if (selected === 'pm' && hours < 12) { hours += 12; }
  if (selected === 'am' && hours >= 12) { hours -= 12; }
  if (hours < 10) { hours = `0${hours}`; }
  if (minutes < 10) { minutes = `0${minutes}`; }

  time = `${hours}:${minutes}`;

  return time;
};

export default formatTime;
