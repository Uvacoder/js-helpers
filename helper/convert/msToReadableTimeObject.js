import padZero from "../transform/padZero";

export default function msToReadableTimeObject(ms) {
  let days = padZero(Math.floor(ms / (1000 * 60 * 60 * 24)));
  let hours = padZero(
    Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  let minutes = padZero(Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60)));
  let seconds = padZero(Math.floor((ms % (1000 * 60)) / 1000));

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}
