export function currencyFormatter(value: number): string {
  return Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(value)
}

function publishTransaction(
  type: string,
  data: { amount: number; to: number; from: number }
) {
  if (window?.['NABdashboard']?.checkEmit(type)) {
    window?.['NABdashboard'].publish().emit(type, data)
  }
}

export async function fetchWrapper(
  url: string,
  options?: RequestInit
): Promise<string> {
  try {
    const fetchedData = await fetch(url, options)
    if (fetchedData.ok) {
      const data = await fetchedData.json()
      publishTransaction('TRANSFER_INITIATE', data.data)
      return data.message
    }
    const error = await fetchedData.text()
    throw new Error(error)
  } catch (e) {
    console.error(e)
  }
}
