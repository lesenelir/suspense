// communicate with suspense component

// Wrap a promise and Determine if the returned data is ready to be read.

// the promise argument parameter is always going to be a network request to retrieve some data from an API.

type PromiseStatus = 'pending' | 'success' | 'error'

export function wrapPromise<T>(promise: Promise<T>) {
  let status: PromiseStatus = 'pending'
  let response: T | Error

  const suspender = promise.then(
    (res) => {
      status = 'success'
      response = res
    },
    (err) => {
      status = 'error'
      response = err
    },
  )

  const read = () => {
    switch (status) {
      case 'pending':
        throw suspender
      case 'error':
        throw response
      default:
        return response
    }
  }

  return {
    read
  }
}
