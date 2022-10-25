import { v4 as uuidv4 } from 'uuid'
import { Ref } from 'vue'
import { useStorage } from '@vueuse/core'
import { useAlert, useLoading } from './core/useNotification'
import { useBoardModal } from './core/modals'
import { boardType } from '@/helper/type'
import { useUser } from '@/composables/auth/user'
import { saveToFirestore, getSingleFirestoreDocument, getFirestoreUserCollection, deleteFirestoreDocument } from '@/firebase/firestore'
import { keys } from '@/helper/data'

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

export const KanbanData: Ref<boardType> = useStorage('KanbanData', {})

export const getBoard = () => {
    const loading = ref(false)

    const fetchedData = async (id: string) => {
        useLoading().openLoading('Loading Board...')
        KanbanData.value = await getSingleFirestoreDocument('boards', id) as boardType
        useLoading().closeLoading()
    }

    return { fetchedData, KanbanData }
}

export const getUserBoard = () => {
    const loading = ref(false)
    const result = ref([])

    const fetchedData = async () => {
        useLoading().openLoading('Loading your boards...')
        result.value = await getFirestoreUserCollection('boards')
        useLoading().closeLoading()
    }

    return { fetchedData, result }
}

export const useDeleteBoard = () => {
    const deleteBoard = async (id: string, result) => {
        useLoading().openLoading('Deleting the board...')
        try {
            await deleteFirestoreDocument('boards', id)
            useAlert().openAlert('Board deleted successfully')
        } catch (e) {
            useAlert().openAlert('Something went wrong, couldn\'t delete Board')
        }

        useLoading().closeLoading()
    }

    return { deleteBoard }
}

export const useUpdateBoard = () => {
    const updateBoard = async (id: string, data: boardType) => {
        useLoading().openLoading('Updating the board...')
        try {
            await saveToFirestore('boards', id, data)
            useAlert().openAlert('Board updated successfully')
        } catch (e) {
            useAlert().openAlert('Something went wrong, couldn\'t update Board')
        }

        useLoading().closeLoading()
    }

    return { updateBoard }
}

export const updateData = (e) => {
const changedArray = keys[e.type]
KanbanData.value[changedArray] = e.data
}
