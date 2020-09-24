export function addComma(num: number) {
  return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
}
