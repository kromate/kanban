import { User } from '@firebase/auth'
import { useStorage } from '@vueuse/core'
// import { FirebaseUserType } from './types'
import { Ref } from 'vue'
interface globalStateType {
    userString: Ref<string>,
    user: User,
    isLoggedIn: Ref<boolean>
    id: Ref<string>
}

const globalState:globalStateType = {
    userString: useStorage('userString', null),
    user: useStorage('userString', '').value ? JSON.parse(useStorage('userString', '').value) as User : undefined,
    isLoggedIn: useStorage('isLoggedIn', false),
    id: useStorage('id', null)
}

export const useUser = () => {
    const setUser = (user: User) => {
        globalState.userString.value = JSON.stringify(user) as any
        globalState.user = user
        globalState.id.value = user.uid
        globalState.isLoggedIn.value = true
    }

    const clearUser = () => {
        globalState.user = null
        globalState.userString.value = null
        globalState.isLoggedIn.value = false
        globalState.id.value = null
    }

    return { setUser, clearUser, ...globalState }
}
