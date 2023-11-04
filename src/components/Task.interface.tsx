import { MouseEvent, FormEvent } from 'react';

export interface ITask {
    id: number;
    text: string;
    check: boolean;
}

export interface ITaskProps {
    task: ITask;
    onCheckTask: (event: MouseEvent, task: ITask) => void;
    onDeleteTask: (event: MouseEvent, task: ITask) => void;
}

export interface ITaskAddProps {
    onCreateTask: (event: FormEvent, task: string) => void;
}
