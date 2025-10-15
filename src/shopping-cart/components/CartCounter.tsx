'use client';

import { useState } from 'react'

const props = {
    initialCount: 0
}

export const CartCounter = () => {

  const [count, setCount] = useState(props.initialCount);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count === 0 ? 0 : count - 1);

  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex gap-4">
        <button 
        onClick={increment} 
        className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
          +1
        </button>
        <button 
        onClick={decrement}
        className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]">
          -1
        </button>
      </div>
    </>
  )
}
