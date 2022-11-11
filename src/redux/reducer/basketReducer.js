import { ADD, REMOVE } from "../type/basketype"


const initialState =[]
const reducer = (state=initialState , {type,payload}) => {
  switch (type) {
  case ADD:
    return [...state.filter((item)=>item.id!==payload.id),payload]
  case REMOVE:
    return [...state.filter((item)=>item.id!==payload.id)]

  default:
    return state
  }
}
export default reducer