import { ref } from 'vue'
import { useModal } from './modal'
import CreateTicket from '@/components/modals/CreateTicket.vue'
import EditTicket from '@/components/modals/EditTicket.vue'
import DeleteConfirmation from '@/components/modals/DeleteConfirmation.vue'
import CreateBoard from '@/components/modals/CreateBoard.vue'
import EditBoard from '@/components/modals/EditBoard.vue'

type TicketTypes = 'CreateTicket' | 'EditTicket' | 'DeleteConfirmation'
type BoardTypes = 'CreateBoard' | 'EditBoard'

const TicketModals = { CreateTicket, EditTicket, DeleteConfirmation } as Record<TicketTypes, any>
const BoardModals = { CreateBoard, EditBoard } as Record<BoardTypes, any>

export const modal = useModal(ref([] as any))
const ticketModal = modal.register('Ticket', TicketModals)
const boardModal = modal.register('Board', BoardModals)

export const useTicketModal = () => ticketModal
export const useBoardModal = () => boardModal
