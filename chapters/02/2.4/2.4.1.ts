export const isString = (x: any): boolean => {
  return typeof x === 'string'
}

const f = (x: string | number): number => {
  if (isString(x)) {
    // qui x non è raffinato
    return x.length // error
  } else {
    return x // error
  }
}
