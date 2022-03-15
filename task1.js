const distance = 100
const dayVelocity = 50
const nightVelocity = 30

function calc(distance, dayVelocity, nightVelocity) {
  if (distance === 0) {
    return 0
  }
  if (dayVelocity === 0) {
    return
  }
  const delta1 = distance - dayVelocity // Разность высоты холма и дневного пробега
  if (delta1 <= 0) {
    return 1
  }
  const delta2 = dayVelocity - nightVelocity
  if (delta2 <= 0) {
    return
  }
  return 1 + Math.ceil(delta1 / delta2)
}

console.log(calc(distance, dayVelocity, nightVelocity))