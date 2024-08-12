import { Dispatch } from 'redux'
import { isAxiosError } from 'axios'
import { setAppErrorAC } from '../../app/app-reducer.ts'

type ServerError = {
  errorMessages: Array<{ field: string; message: string }>
}

export const handleAppError = (error: any, dispatch: Dispatch) => {
  let errorMessage: string
  if (isAxiosError<ServerError>(error)) {
    //если серверная ошибка,выводим первый, если ошибка по типу отключенного интернета, то вторую
    errorMessage = error.response ? error.response.data.errorMessages[0].message : error.message
  } else {
    //здесь выводим нативную ошибку что в коментах
    errorMessage = (error as Error).message
  }
  dispatch(setAppErrorAC(errorMessage))
  console.log(errorMessage)
}