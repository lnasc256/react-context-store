import { Dispatch } from './reducer'

const getActions = (dispatch: Dispatch) => ({
  increment: (value: number = 1) => {
    dispatch({ type: 'increment', value })
  },
  decrement: (value: number = 1) => {
    dispatch({ type: 'decrement', value })
  },
  reset: () => {
    dispatch({ type: 'reset' })
  }
})

export default getActions
