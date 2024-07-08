export const arrayToObject = (values: string[], names?: string[]) => {
  const obj = values.map((value: string, index: number) => ({
    value: value,
    name: names?.[index] ?? value,
  }))
  console.log(obj)
  return obj
}
