export default function returnPercentageValue(part, base, afterComma = 2) {
  return ((part / base) * 100).toFixed(afterComma);
}
