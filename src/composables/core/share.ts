import { useShare, useClipboard } from '@vueuse/core'
import { useAlert } from '@/composables/core/useNotification'

const source = ref('')
const { copy } = useClipboard({ source })
const { share, isSupported } = useShare()

const copyLink = () => {
	copy()
	useAlert().openAlert(
		'Seems something went wrong while trying to share, don\'t worry we copied it to your clipboard '
	)
}

export const useShareUtil = () => {
	const shareBoard = (board) => {
		source.value = `${location.href}/${board.id}`
		if (!isSupported) {
			copyLink()
		}
		try {
			share({
				title: board.value.title,
				text: board.value.desc,
				url: source.value
			})
		} catch {
			copyLink()
		}
	}

	return { shareBoard }
}
