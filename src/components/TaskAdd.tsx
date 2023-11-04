import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './TaskAdd.module.css';
import { PlusCircle } from 'phosphor-react';
import { ITaskAddProps } from './Task.interface';

export function TaskAdd({onCreateTask}: ITaskAddProps) {
    
    const [taskText, setTaskText] = useState('');

    function handleTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
        setTaskText(event.target.value);
    }

    function handleCreateTask(event: FormEvent) {
        onCreateTask(event, taskText);
        setTaskText('');
    }

    return (
        <form onSubmit={handleCreateTask} className={styles.taskAdd}>
            <input 
                name='task' 
                placeholder='Adicione uma nova tarefa' 
                value={taskText} 
                onChange={handleTaskTextChange} 
                required 
                minLength={10} 
                maxLength={300} 
            />
            <button type='submit'>
                Criar
                <PlusCircle size='20' />
            </button>
        </form>
    );
}