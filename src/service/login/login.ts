import xbcRequest from '../index'

export const userRegisterRequest = (user: any) => {
  const { name, password } = user
  console.log(name, password)
  return xbcRequest.post({
    url: '/user',
    data: {
      name,
      password
    }
  })
}
export const userLoginRequest = (user: any) => {
  return xbcRequest.post({
    url: '/login',
    data: user
  })
}
