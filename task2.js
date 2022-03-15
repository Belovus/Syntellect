const people = 10

function calc(people) {
  if (people < 0) {
    return new Error("Колличество человек не может быть отрицательным")
  }
  let counter = 0
  for (let i = 1; i <= people; i++) {
    counter = counter + i - 1
  }
  return counter
}

console.log(calc(people))