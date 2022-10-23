import { useTicketModal } from './core/modals'

const taskModalState = {
  title: ref('')
}

export const useTicket = () => {
    const loading = ref(false)
    const createTicket = () => {
        loading.value = true
        // do something
        loading.value = false
    }
    return { loading, createTicket, taskModalState }
 }

export const openTicketModal = (ticketType) => {
    console.log(ticketType)
    taskModalState.title.value = `Create "${ticketType}" Ticket`
    useTicketModal().openTicket()
}
