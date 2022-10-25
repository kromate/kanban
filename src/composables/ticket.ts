import { v4 as uuidv4 } from 'uuid'
import { useTicketModal } from './core/modals'
import { KanbanData } from './board'
import { keys } from '@/helper/data'
import { levelType } from '@/helper/type'

const taskModalState = {
	type: ref(''),
	id: ref(''),
	modal_title: ref(''),
	title: ref(''),
	desc: ref(''),
	level: ref<levelType>(''),
	assignee: ref('')
}

const clearTaskModalState = () => {
	taskModalState.type.value = ''
	taskModalState.modal_title.value = ''
	taskModalState.title.value = ''
	taskModalState.desc.value = ''
	taskModalState.level.value = ''
	taskModalState.assignee.value = ''
}

export const useTicket = () => {
	const loading = ref(false)
	const createTicket = () => {
		loading.value = true
		//
		KanbanData.value[taskModalState.type.value].push({
			id: uuidv4(),
			title: taskModalState.title.value,
			desc: taskModalState.desc.value,
			level: Number(taskModalState.level.value),
			assignee: taskModalState.assignee.value
		})
		loading.value = false
		useTicketModal().closeCreateTicket()
		clearTaskModalState()
	}
	return { loading, createTicket, taskModalState }
}

export const useEditTicket = () => {
	const loading = ref(false)
	const openEditTicket = (data, title) => {
		loading.value = true
		taskModalState.type.value = keys[title]
		taskModalState.id.value = data.id
		taskModalState.title.value = data.title
		taskModalState.desc.value = data.desc
		taskModalState.level.value = data.level
		taskModalState.assignee.value = data.assignee
		openTicketModal(data.title, true)
		loading.value = false
	}

	const editTicket = () => {
		loading.value = true
		const index = KanbanData.value[taskModalState.type.value].findIndex((item) => item.id === taskModalState.id.value)
		KanbanData.value[taskModalState.type.value][index].title = taskModalState.title.value
		KanbanData.value[taskModalState.type.value][index].desc = taskModalState.desc.value
		KanbanData.value[taskModalState.type.value][index].level = Number(taskModalState.level.value)
		KanbanData.value[taskModalState.type.value][index].assignee = taskModalState.assignee.value
		loading.value = false
		useTicketModal().closeEditTicket()
		clearTaskModalState()
	}
	return { loading, openEditTicket, taskModalState, editTicket }
}

export const openTicketModal = (ticketType, edit = false) => {
	if (edit) {
		taskModalState.modal_title.value = `Edit "${ticketType}" Ticket`
		useTicketModal().openEditTicket()
	} else {
		clearTaskModalState()
		taskModalState.type.value = keys[ticketType]
		taskModalState.modal_title.value = `Create "${ticketType}" Ticket`
		useTicketModal().openCreateTicket()
	}
}

export const useDeleteTicket = () => {
	const loading = ref(false)
	const openDeleteTicket = (data, title) => {
		loading.value = true
		taskModalState.id.value = data.id
		taskModalState.title.value = title
		taskModalState.modal_title.value = `Delete "${data.title}" Ticket`
		useTicketModal().openDeleteConfirmation()

		loading.value = false
	}
	const deleteTicket = () => {
		const index = KanbanData.value[keys[taskModalState.title.value]].findIndex((item) => item.id === taskModalState.id.value)
		KanbanData.value[keys[taskModalState.title.value]].splice(index, 1)
		useTicketModal().closeDeleteConfirmation()
	}
	return { deleteTicket, loading, openDeleteTicket, taskModalState }
}
