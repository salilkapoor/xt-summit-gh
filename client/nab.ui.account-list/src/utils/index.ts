export function currencyFormatter(value: number): string {
  return Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(value)
}

export function accountNumberFormatter(value: number): string {
  return `XXXX XXXX XXXX ${value}`
}
