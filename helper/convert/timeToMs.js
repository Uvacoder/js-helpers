export default function timeToMs(
  days = 0,
  hours = 0,
  minutes = 0,
  seconds = 0
) {
  let ms = days * 86400000 + hours * 3600000 + minutes * 60000 + seconds * 1000;
  return ms;
}
