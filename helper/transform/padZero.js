export default function padZero(int) {
  if (int <= 9) {
    return "0" + int;
  }
  return int;
}
