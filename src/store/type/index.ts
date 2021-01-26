import { IMenu } from '/@/store/type/menu'
import { ITags } from '/@/store/type/tags'
import { IUser } from '/@/store/type/user'


export interface IState {
    // 左侧导航栏
    menu: IMenu
    // 用户信息
    user: IUser
    // 标签栏
    tags: ITags
    isLoading: boolean
}
