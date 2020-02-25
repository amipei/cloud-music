import produce, { castImmutable } from 'immer';

interface State {
  banners: any
}

const defaultState: State = {
  banners: null
}

const findReducer = (state: State, action: any) => {
  return produce(defaultState, (draft) => {

  })
}

export default findReducer