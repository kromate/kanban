import { useStorage } from '@vueuse/core'
import { Ref } from 'vue'
import { boardType } from './type'

export const dummyData: Ref<boardType> = useStorage('DemoKanbanBoard', {
	id: '123456789',
	title: 'Demo Kanban Board',
	backlog: [
		{
			id: '1',
			title: 'Demo Task one',
			desc: 'This is a demo task one',
			level: 3,
			assignee: 'Kromate'
		}
	],
	todo: [
		{
			id: '2',
			title: 'Demo Task two',
			desc: 'This is a demo task two',
			level: 1,
			assignee: 'Kromate'
		},
		{
			id: '3',
			title: 'Demo Task three',
			desc: 'This is a demo task three',
			level: 2,
			assignee: 'Kromate'
		},
		{
			id: '4',
			title: 'Demo Task four',
			desc: 'This is a demo task four',
			level: 3,
			assignee: 'Kromate'
		}
	],
	inprogress: [
		{
			id: '5',
			title: 'Demo Task five',
			desc: 'This is a demo task five',
			level: 3,
			assignee: 'Kromate'
		},
		{
			id: '6',
			title: 'Demo Task six',
			desc: 'This is a demo task six',
			level: 2,
			assignee: 'Kromate'
		}
	],
	done: []
})
