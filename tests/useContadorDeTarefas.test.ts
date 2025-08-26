import { renderHook } from '@testing-library/react';
import { useContadorDeTarefas } from '@/hooks/useContadorDeTarefas';

describe('useContadorDeTarefas', () => {
  it('retorna o tamanho da lista', () => {
    const { result, rerender } = renderHook(({ list }) => useContadorDeTarefas(list), {
      initialProps: { list: [{ id: '1', title: 'A' }] },
    });

    expect(result.current).toBe(1);

    rerender({ list: [{ id: '1', title: 'A' }, { id: '2', title: 'B' }] });
    expect(result.current).toBe(2);
  });
});
