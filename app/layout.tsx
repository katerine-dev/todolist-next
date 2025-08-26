export const metadata = {
  title: 'Todolist - Next',
  description: 'Lista e adição de tarefas com testes unitários',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body style={{ fontFamily: 'system-ui, sans-serif', margin: 0, padding: 24, background: '#0b1120', color: '#e2e8f0' }}>
        {children}
      </body>
    </html>
  );
}
