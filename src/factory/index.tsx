import React from 'react'

type AnyFunction = (...args: Array<any>) => void

type TAction = {
  [key: string]: any,
  type: string
}

type TDispatch<Action> = (action: Action) => void

type TState = {
  [key: string]: any
}

type TGetActions<Action> = (dispatch: TDispatch<Action>) => {
  [action: string]: AnyFunction
}

type TReducer<Action, State> = (state: State, action: Action) => State

type Primitive = string | number | boolean | AnyFunction | undefined | null
type DeepReadonly<T> = T extends Primitive ? T : DeepReadonlyObject<T>
type DeepReadonlyObject<T> = Readonly<{
  [P in keyof T]: DeepReadonly<T[P]>
}>

const factory = <
  Action extends TAction,
  State extends TState,
  GetActions extends TGetActions<Action>
>(
  initialState: State,
  reducer: TReducer<Action, State>,
  getActions: GetActions
) => {
  type TStore = {
    state: State,
    actions: ReturnType<GetActions>
  }

  const Store = React.createContext<TStore>(null!)

  const useStore = (): DeepReadonly<TStore> => {
    const store = React.useContext(Store) as any
    return store
  }

  const useActions = (dispatch: TDispatch<Action>): ReturnType<GetActions> => {
    const getInitial = () => getActions(dispatch)
    const actions = React.useMemo(getInitial, [ dispatch ]) as any
    return actions
  }

  const useProvider = () => {
    const [ state, dispatch ] = React.useReducer(reducer, initialState)
    const actions = useActions(dispatch)
    return { state, actions }
  }

  const Provider: React.FC = ({ children }) => {
    const store = useProvider()

    return (
      <Store.Provider value={store}>
        {children}
      </Store.Provider>
    )
  }

  return { Provider, useStore }
}

export default factory
