export type boardType = {
	id: string;
	title: string;
	private: boolean;
	desc: string;
	backlog: taskType[];
	todo: taskType[];
	inprogress: taskType[];
	done: taskType[];
} | Record<string, never>

export type levelType = '' | 1 | 2 | 3;
export type titleType = 'Backlog' | 'To do' | 'In progress' | 'Done';

interface taskType {
	id: string;
	title: string;
	desc: string;
	level: levelType;
	assignee:string;
}
