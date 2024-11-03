import Link from 'next/link';
import Pedidos from '../components/Pedidos';

export default function Home() {
  return (
    <div>
      <h1>Logística Inteligente</h1>
      <Link href="/pedidos">
        Ver pedidos
      </Link>
      <Pedidos />
    </div>
  );
}
