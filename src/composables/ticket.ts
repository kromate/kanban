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

export const useTicket = () => {
	const loading = ref(false)
	const createTicket = () => {
        loading.value = true
        //
        dummyData.value[taskModalState.type.value].push({
            id: '123',
            title: taskModalState.title.value,
            desc: taskModalState.desc.value,
            level: taskModalState.level.value,
            assignee: taskModalState.assignee.value
        })
		loading.value = false
	}
	return { loading, createTicket, taskModalState }
}

export const openTicketModal = (ticketType) => {
	taskModalState.type.value = keys[ticketType]
	taskModalState.modal_title.value = `Create "${ticketType}" Ticket`
	useTicketModal().openTicket()
}
