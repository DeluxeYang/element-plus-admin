import request from '/@/utils/request'
import { AxiosPromise } from 'axios'
import { store } from '/@/store'


export interface loginParam {
    username: string,
    password: string
}


export function login(param: loginParam): AxiosPromise {
  return request({
    url: '/login',
    method: 'post',
    data: param
  })
}


export function getUser(): AxiosPromise {
  return request({
    url: '/getUser',
    method: 'get',
    data: { token: store.state.user.ACCESS_TOKEN }
  })
}

export function getRouterList(): AxiosPromise {
  return request({
    url: '/getRoute',
    method: 'get',
    data: { token: store.state.user.ACCESS_TOKEN }
  })
}
