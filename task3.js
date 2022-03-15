const line = "кошка,собака,лошадь,корова,кошка"

function calc(line) {
  return line.split(',').reduce(
    (accumulator, val) => accumulator.includes(val) ? accumulator : [...accumulator, val], []
  ).join()
}

console.log(calc(line))