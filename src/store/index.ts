import factory from '../factory'
import getActions from './actions'
import reducer, { INITIAL_STATE } from './reducer'

const { Provider, useStore } = factory(INITIAL_STATE, reducer, getActions)

export default Provider

export { useStore }
