import type { Task } from '@/types/task';

const seed: Task[] = [
  { id: '1', title: 'Aprender Next.js' },
  { id: '2', title: 'Escrever testes' },
];

export async function getTasks(): Promise<Task[]> {
  return Promise.resolve([...seed]);
}
