import { render, screen } from '@testing-library/react';
import Page from '@/app/page';

describe('Página / (Server Component)', () => {
  it('renderiza título e tarefas iniciais', async () => {
    const ui = await Page(); // Server Component async
    render(ui as unknown as React.ReactElement);

    expect(screen.getByText(/Minhas Tarefas/i)).toBeInTheDocument();
    expect(screen.getByText('Aprender Next.js')).toBeInTheDocument();
    expect(screen.getByText('Escrever testes')).toBeInTheDocument();
    expect(screen.getByTestId('contador')).toHaveTextContent('Total: 2');
  });
});
