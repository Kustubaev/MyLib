export const getPropertyByString = <T extends object, K extends keyof T>(
  obj: T,
  propString: string,
): T[K] => {
  const props = propString.split(".")
  let property: any = obj
  for (let i = 0; i < props.length; i++) {
    property = property[props[i] as keyof typeof property]
  }
  return property
}
