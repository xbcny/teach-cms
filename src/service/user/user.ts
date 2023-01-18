import xbcRequest from '../index'

export const createUserRequest = (payload: any) => {
  return xbcRequest.post({
    url: '/user',
    data: payload
  })
}
export const searchUserRequest = (payload: any = { limit: 10, offset: 0 }) => {
  return xbcRequest.get({
    url: `/user?limit=${payload.limit}&offset=${payload.offset}`
  })
}
export const deleteUserRequest = (userId: any) => {
  return xbcRequest.delete({
    url: '/user/:userId'
  })
}
export const updateUserRequest = (payload: any) => {
  return xbcRequest.patch({
    url: '/user',
    data: payload
  })
}
