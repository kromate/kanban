import { useTaskModal } from './core/modals'

export const ticketState = {
    title: ref('')
}

export const createTicket = (ticketType) => {
    console.log(ticketType)
    ticketState.title.value = `Create ${ticketType} Ticket`
    useTaskModal().openTask()
}
