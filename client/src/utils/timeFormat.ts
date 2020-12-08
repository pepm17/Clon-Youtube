export const formatTimeString = (value: string): string => {
  let values: string[] = value.match(/(\d+)(?=[HMS])/g) || []
  let resul: string = values
    .map((val) => {
      if (val.length < 2) val = '0' + val
      return val
    })
    .join(':')
  return resul
}
