'use client';

import { useState, FormEvent } from 'react';

export default function NovaTarefa({ onAdd }: { onAdd: (title: string) => void }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setTitle('');
  };

  const isDisabled = title.trim().length === 0;

  return (
    <form onSubmit={handleSubmit} aria-label="form-nova-tarefa">
      <label htmlFor="titulo">Nova tarefa</label>
      <input
        id="titulo"
        name="titulo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Digite a tarefa..."
        aria-invalid={isDisabled}
        data-testid="input-nova-tarefa"
      />
      <button type="submit" disabled={isDisabled} data-testid="btn-adicionar">
        Adicionar
      </button>
    </form>
  );
}
