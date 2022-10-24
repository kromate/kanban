import { User } from '@firebase/auth'
import { useStorage } from '@vueuse/core'
// import { FirebaseUserType } from './types'

const globalState = {
    userString: useStorage('userString', null),
    user: useStorage('userString', '').value ? JSON.parse(useStorage('userString', '').value) as User : undefined,
    isLoggedIn: useStorage('isLoggedIn', false)
}

export const useUser = () => {
    const setUser = (user: User) => {
        globalState.userString.value = JSON.stringify(user) as any
        globalState.user = user
        id.value = user.uid
        globalState.isLoggedIn.value = true
    }

    const clearUser = () => {
        globalState.user = null
        globalState.userString.value = null
        globalState.isLoggedIn.value = false
    }
    const id = ref(globalState.user?.uid ?? '')

    return { setUser, clearUser, ...globalState, id }
}
