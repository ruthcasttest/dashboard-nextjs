import { CartCounter } from '@/app/shopping-cart';

export const metadata = {
  title: "Counter Page",
  description: "A simple counter page",
};

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">

      <span>Productos en el carrito</span>
      <CartCounter />

    </div>
  );
}