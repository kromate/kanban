import { ref } from 'vue'
import { useModal } from './modal'
import Ticket from '@/components/modals/Ticket.vue'

type TicketTypes = 'Ticket'

const TicketModals = { Ticket } as Record<TicketTypes, any>

export const modal = useModal(ref([] as any))
const ticketModal = modal.register('Ticket', TicketModals)

export const useTicketModal = () => ticketModal
