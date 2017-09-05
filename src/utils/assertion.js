export const assertParams = (params) => {
  for (const prop in params) {
    if (params[prop] === undefined) {
      throw Error(`Argument ${prop} is undefined`)
    }
  }
}