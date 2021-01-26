import { createStore, Store, useStore as baseUseStore } from 'vuex'
import menu from '/@/store/module/menu'
import tags from '/@/store/module/tags'
import { IState } from './type/'
import user from '/@/store/module/user'

export const store = createStore<IState>({
  modules: {
    menu,
    tags,
    user
  }
})

export function useStore(): Store<IState> {
  return baseUseStore()
}
