import { ref } from 'vue'
import { useModal } from './modal'
import CreateTicket from '@/components/modals/CreateTicket.vue'
import EditTicket from '@/components/modals/EditTicket.vue'

type TicketTypes = 'CreateTicket' | 'EditTicket'

const TicketModals = { CreateTicket, EditTicket } as Record<TicketTypes, any>

export const modal = useModal(ref([] as any))
const ticketModal = modal.register('Ticket', TicketModals)

export const useTicketModal = () => ticketModal
