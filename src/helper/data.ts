interface boardType {
	id: string;
	title: string;
	backlog: taskType[];
	todo: taskType[];
	inprogress: taskType[];
	done: taskType[];
}

type levelType = 1 | 2 | 3;

interface taskType {
	id: string;
	title: string;
	desc: string;
	level: levelType;
	assigne:string;
}

export const dummyData: boardType = {
	id: '123456789',
	title: 'Demo Kanban Board',
	backlog: [
		{
			id: '1',
			title: 'Demo Task one',
			desc: 'This is a demo task one',
			level: 1,
			assigne: 'Kromate'
		},
		{
			id: '1',
			title: 'Demo Task one',
			desc: 'This is a demo task one',
			level: 3,
			assigne: 'Kromate'
		}
	],
	todo: [
		{
			id: '2',
			title: 'Demo Task two',
			desc: 'This is a demo task two',
			level: 1,
			assigne: 'Kromate'
		},
		{
			id: '3',
			title: 'Demo Task three',
			desc: 'This is a demo task three',
			level: 2,
			assigne: 'Kromate'
		},
		{
			id: '4',
			title: 'Demo Task four',
			desc: 'This is a demo task four',
			level: 3,
			assigne: 'Kromate'
		}
	],
    inprogress: [
        {
			id: '5',
			title: 'Demo Task five',
			desc: 'This is a demo task five',
			level: 3,
			assigne: 'Kromate'
		},
		{
			id: '6',
			title: 'Demo Task six',
			desc: 'This is a demo task six',
			level: 2,
			assigne: 'Kromate'
		}
    ],
	done: []
}
