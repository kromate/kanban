import { useTaskModal } from './modals'
export const createTicket = (ticketType) => {
    console.log(ticketType)
    useTaskModal().openTask()
}
