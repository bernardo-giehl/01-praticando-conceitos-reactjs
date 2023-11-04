import { MouseEvent } from 'react';
import { ITaskProps } from './Task.interface';
import styles from './Task.module.css';
import { Circle, CheckCircle, Trash  } from 'phosphor-react';

export function Task({task, onCheckTask, onDeleteTask}: ITaskProps) {
    
    function handleCheckTask(event: MouseEvent) {
        onCheckTask(event, task);
    }

    function handleDeleteTask(event: MouseEvent) {
        onDeleteTask(event, task);
    }
    
    if(task.check) {
        return (
            <div key={task.id} className={styles.task}>
                <button onClick={handleCheckTask} className={styles.check} title='uncheck'>
                    <CheckCircle size={20} weight="fill" />
                </button>
                <p className={styles.checkText}>
                    {task.text}
                </p>
                <button onClick={handleDeleteTask} className={styles.trash} title='delete'>
                    <Trash size={20} />
                </button>
            </div>
        );
    } else {
        return (
            <div key={task.id} className={styles.task}>
                <button onClick={handleCheckTask} className={styles.uncheck} title='check'>
                    <Circle size={20}weight="bold" />
                </button>
                <p className={styles.uncheckText}>
                    {task.text}
                </p>
                <button onClick={handleDeleteTask} className={styles.trash} title='delete'>
                    <Trash size={20} />
                </button>
            </div>
        );
    }
}