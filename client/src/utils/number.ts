export const formatShortString = (value: string | number): string => {
  const intValue: number = typeof value === 'string' ? parseInt(value) : value
  if (intValue < 1000) return intValue + ''
  if (intValue < 1000000) return (intValue / 1000).toFixed(1) + 'k'
  return (intValue / 10000000).toFixed(1) + 'M'
}
