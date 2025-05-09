export default function StatusAlert({ type, message }: { type: string, message: string }) {
  const colors = {
    success: 'bg-green-100 text-green-800',
    error: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800',
  };
  return <div className={`p-3 rounded ${colors[type as keyof typeof colors]}`}>{message}</div>;
}
