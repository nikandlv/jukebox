export function formatSeconds (input) {
  var secondNumber = parseInt(input, 10)
  var hours = Math.floor(secondNumber / 3600)
  var minutes = Math.floor(secondNumber / 60) % 60
  var seconds = secondNumber % 60

  return [hours, minutes, seconds]
    .map(v => v < 10 ? '0' + v : v)
    .filter((v, i) => v !== '00' || i > 0)
    .join(':')
}
