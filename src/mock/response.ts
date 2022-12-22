import { Response } from 'miragejs'
import { ServerData } from 'plc-shared/typing/genericTypes'

interface ResponseOption {
  messageCode?: string
  message?: string
}

interface ResponseOptionWithStatus extends ResponseOption {
  statusCode?: number
}

export const response = <T>(status: number, data: T, options?: ResponseOption) => {
  const calc = status - 200
  const isSuccess = calc >= 0 && calc <= 99
  const msgCode = isSuccess ? 'REQUEST_OK' : 'REQUEST_ERROR'
  const msg = isSuccess ? 'Requisição concluida com sucesso' : 'Error requisição'

  const body: ServerData<T> = {
    success: isSuccess,
    statusCode: status,
    messageCode: options?.messageCode ?? msgCode,
    message: options?.message ?? msg,
    body: data
  }

  return new Response(status, {}, body)
}

export const success = <T>(data: T, options?: ResponseOptionWithStatus) => {
  return response(options?.statusCode ?? 200, data, options)
}

export const error = <T>(data: T, options?: ResponseOptionWithStatus) => {
  return response(options?.statusCode ?? 400, data, options)
}
