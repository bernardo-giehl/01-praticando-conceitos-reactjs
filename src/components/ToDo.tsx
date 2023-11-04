import { useState, MouseEvent, FormEvent } from 'react';
import { TaskAdd } from './TaskAdd';
import { Task } from './Task';
import { ITask } from './Task.interface';
import styles from './ToDo.module.css';
import { ClipboardText  } from 'phosphor-react';

export function ToDo() {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
            check: false
        },
        {
            id: 2,
            text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer. Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
            check: false
        },
        {
            id: 3,
            text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
            check: false
        },
        {
            id: 4,
            text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
            check: true
        },
        {
            id: 5,
            text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
            check: true
        }
    ]);

    const taskTotal = tasks.length;
    const taskChecked = tasks.filter(e => e.check === true).length;
    const taskEmpty = taskTotal === 0;

    function onCreateTask(event: FormEvent, taskToCreate: string) {
        event.preventDefault();
        setTasks([...tasks, {
            id: (tasks.length === 0 ? 0 : Math.max(...tasks.map(task => task.id))) + 1,
            text: taskToCreate,
            check: false
        }]);
    }

    function onCheckTask(event: MouseEvent, taskToCheck: ITask) {
        event.preventDefault();
        const tasksWithChangeOne = tasks.map(task => {
            if (task.id === taskToCheck.id) {
                return {
                    ...taskToCheck,
                    check: !taskToCheck.check
                };
            }
            return task;
          });
        setTasks(tasksWithChangeOne);
    }

    function onDeleteTask(event: MouseEvent, taskToDelete: ITask) {
        event.preventDefault();
        const tasksWithoutDeleteOne = tasks.filter(e => {
            return e != taskToDelete;
        });
        setTasks(tasksWithoutDeleteOne);
    }

    return (
        <div className={styles.toDo}>
            <TaskAdd onCreateTask={onCreateTask} />
            <header>
                <strong className={styles.taskCreated}>
                    Tarefas criadas
                    <span>{taskTotal}</span>
                </strong>
                <strong className={styles.taskDone}>
                    Concluídas
                    <span>{taskChecked} de {taskTotal}</span>
                </strong>
            </header>
            {tasks.map((task) => 
                <Task 
                    key={task.id} 
                    task={task} 
                    onCheckTask={onCheckTask} 
                    onDeleteTask={onDeleteTask} 
                />
            )}
            {taskEmpty && (
                <footer>
                    <ClipboardText size={60} weight="light" />
                    <p><b>Você ainda não tem tarefas cadastradas</b></p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </footer>
            )}
        </div>
    );
}