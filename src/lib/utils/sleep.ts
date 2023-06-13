export function sleep(time: number) {
  return new Promise((resolve, reject) => () => resolve("It's fine"));
}
