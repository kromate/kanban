import { v4 as uuidv4 } from 'uuid'
import { useTicketModal } from './core/modals'
import { dummyData, keys } from '@/helper/data'
import { levelType } from '@/helper/type'

const taskModalState = {
	type: ref(''),
	modal_title: ref(''),
	title: ref(''),
	desc: ref(''),
	level: ref<levelType>(),
	assignee: ref('')
}

const clearTaskModalState = () => {
	taskModalState.type.value = ''
	taskModalState.modal_title.value = ''
	taskModalState.title.value = ''
	taskModalState.desc.value = ''
	taskModalState.level.value = null
	taskModalState.assignee.value = ''
}

export const useTicket = () => {
	const loading = ref(false)
	const createTicket = () => {
        loading.value = true
        //
        dummyData.value[taskModalState.type.value].push({
            id: uuidv4(),
            title: taskModalState.title.value,
            desc: taskModalState.desc.value,
            level: Number(taskModalState.level.value),
            assignee: taskModalState.assignee.value
        })
		loading.value = false
		useTicketModal().closeTicket()
		clearTaskModalState()
	}
	return { loading, createTicket, taskModalState }
}

export const useEditTicket = () => {
	const loading = ref(false)
	const editTicket = (data) => {
		loading.value = true
		console.log(data)
		loading.value = false
		useTicketModal().closeTicket()
		clearTaskModalState()
	}
	return { loading, editTicket }
}

export const openTicketModal = (ticketType) => {
	taskModalState.type.value = keys[ticketType]
	taskModalState.modal_title.value = `Create "${ticketType}" Ticket`
	useTicketModal().openTicket()
}
