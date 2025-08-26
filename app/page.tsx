import { getTasks } from '@/lib/tasks';
import ListaTarefas from '@/components/ListaTarefa';

export default async function Page() {
  const initialTasks = await getTasks(); // simula fetch/SSR
  return (
    <main>
      <h1 style={{ marginTop: 0 }}>Minhas Tarefas</h1>
      <ListaTarefas initialTasks={initialTasks} />
    </main>
  );
}