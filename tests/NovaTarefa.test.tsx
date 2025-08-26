import { render, screen, fireEvent } from '@testing-library/react';
import NovaTarefa from '@/components/NovaTarefa';

describe('<NovaTarefa />', () => {
  it('desabilita o botão quando input está vazio', () => {
    render(<NovaTarefa onAdd={() => {}} />);
    const button = screen.getByTestId('btn-adicionar') as HTMLButtonElement;
    expect(button).toBeDisabled();
  });

  it('habilita o botão quando há texto válido', () => {
    render(<NovaTarefa onAdd={() => {}} />);
    const input = screen.getByTestId('input-nova-tarefa') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Estudar' } });
    const button = screen.getByTestId('btn-adicionar') as HTMLButtonElement;
    expect(button).not.toBeDisabled();
  });

  it('chama onAdd e limpa o input no submit', () => {
    const onAdd = jest.fn();
    render(<NovaTarefa onAdd={onAdd} />);

    const input = screen.getByTestId('input-nova-tarefa') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Nova tarefa' } });

    const form = screen.getByRole('form', { name: /form-nova-tarefa/i });
    fireEvent.submit(form);

    expect(onAdd).toHaveBeenCalledWith('Nova tarefa');
    expect(input.value).toBe('');
  });
});
