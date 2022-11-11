const initialState =[]

const reducer = (state=initialState , {type,payload}) => {
  switch (type) {
  case "ADD":
    return [...state,payload]
  case "REMOVE":
    return alert("sadık")

  default:
    return state
  }
}
export default reducer