export const calcHeight = (duration: number): number => {
  if (duration < 100) {
    return 100
  }

  if (duration > 200) {
    return 200
  }

  return duration
}
