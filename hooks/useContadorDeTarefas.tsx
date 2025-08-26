import type { Task } from '@/types/task'; 

export function useContadorDeTarefas(tasks: Task[]): number {
  return tasks.length;
}
