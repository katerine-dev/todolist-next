'use client';
'use client';

import { useState } from 'react';
import NovaTarefa from './NovaTarefa';
import { useContadorDeTarefas } from '@/hooks/useContadorDeTarefas';
import type { Task } from '@/types/task';

export default function ListaTarefas({ initialTasks }: { initialTasks: Task[] }) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const addTask = (title: string) => {
    setTasks(prev => [...prev, { id: crypto.randomUUID(), title, done: false }]);
  };

  const count = useContadorDeTarefas(tasks);

  return (
    <section aria-label="Lista de tarefas">
      <p data-testid="contador">Total: {count}</p>
      <ul>
        {tasks.map(t => (
          <li key={t.id} data-testid="item-tarefa">
            <span>{t.title}</span>
          </li>
        ))}
      </ul>
      <NovaTarefa onAdd={addTask} />
    </section>
  );
}
