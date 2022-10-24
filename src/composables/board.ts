import { v4 as uuidv4 } from 'uuid'
import { Ref } from 'vue'
import { useStorage } from '@vueuse/core'
import { useAlert, useLoading } from './core/useNotification'
import { useBoardModal } from './core/modals'
import { boardType } from '@/helper/type'
import { useUser } from '@/composables/auth/user'
import { saveToFirestore, getSingleFirestoreDocument } from '@/firebase/firestore'

const { user } = useUser()
export const useCreateBoard = () => {
    const loading = ref(false)
    const ID = uuidv4()
	const formBoardData = {
		title: ref(''),
		desc: ref('')
	}
    const createBoard = async () => {
        loading.value = true
        const boardData: boardType = {
            id: ID,
            title: formBoardData.title.value,
            desc: formBoardData.desc.value,
            backlog: [],
            todo: [],
            inprogress: [],
            done: []
        }
        const requestData = { ...boardData, userId: user.uid }
        try {
            await saveToFirestore('boards', ID, requestData)
            useRouter().push(`/board/${ID}`)
            useBoardModal().closeCreateBoard()
        } catch {
            useBoardModal().closeCreateBoard()
            useAlert().openAlert('Something went wrong, couldn\'t create Board')
        }

         loading.value = false
    }

	return { createBoard, formBoardData, loading }
}

const KanbanData: Ref<boardType> = useStorage('KanbanData', {})

export const getBoard = () => {
    const loading = ref(false)

    const fetchedData = async (id: string) => {
        useLoading().openLoading('Loading Board...')
        KanbanData.value = await getSingleFirestoreDocument('boards', id) as boardType
        useLoading().closeLoading()
    }

    return { fetchedData, KanbanData }
}
