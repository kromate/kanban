import { ref } from 'vue'
import { useModal } from './modal'
import Task from '@/components/modals/Task.vue'

type TaskTypes = 'Task'

const TaskModals = { Task } as Record<TaskTypes, any>

export const modal = useModal(ref([] as any))
const taskModal = modal.register('Task', TaskModals)

export const useTaskModal = () => taskModal
