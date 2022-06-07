window['NABdashboard'] = { publishers: new Map() }

type IPublisher = {
  emit: (type: string, handler: (data: unknown) => void) => void
}

export function register(type: string, handler: () => void): void {
  window['NABdashboard'].publishers.set(type, handler)
}

export function publish(): IPublisher {
  return {
    emit: (type, data) => {
      window['NABdashboard'].publishers.get(type)({ type, ...data })
    }
  }
}

export function checkEmit(type: string): boolean {
  return window['NABdashboard'].publishers.has(type)
}

window['NABdashboard'].register = register
window['NABdashboard'].publish = publish
window['NABdashboard'].checkEmit = checkEmit
