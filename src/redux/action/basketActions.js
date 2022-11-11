import { ADD, REMOVE,CLEAR } from "../type/basketype"

export const add = (payload) => {
  return {type:ADD,payload:payload}
}
export const remove= (payload) => {
  return {type:REMOVE,payload:payload}
}
export const clear= (payload) => {
  return {type:CLEAR,payload:payload}
}

