import { useUser } from '@/composables/auth/user'
import { useAlert } from '@/composables/core/useNotification'

export default function isAuthenticated() {
	if (!useUser().isLoggedIn.value) {
            useAlert().openAlert('You need to sign in to View your Board dhur🙄')
			return navigateTo('/')
		}
}
