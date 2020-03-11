type Action = (
  { type: 'increment', value: number }
  | { type: 'decrement', value: number }
  | { type: 'reset' }
)

type State = {
  count: number
}

const INITIAL_STATE: State = {
  count: 0
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment': {
      return { ...state, count: state.count + action.value }
    }
    case 'decrement': {
      return { ...state, count: state.count - action.value }
    }
    case 'reset': {
      return { ...state, count: INITIAL_STATE.count }
    }
  }
}

export type Dispatch = (action: Action) => void

export default reducer
export { INITIAL_STATE }
