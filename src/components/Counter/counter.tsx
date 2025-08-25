'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import { increment, decrement } from '@/features/counterSlice';

 const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="p-4">
      <p className="text-lg">Count: {count}</p>
      <div className="space-x-2">
        <button onClick={() => dispatch(increment())} className="px-3 py-1 bg-green-500 text-white rounded">
          +
        </button>
        <button onClick={() => dispatch(decrement())} className="px-3 py-1 bg-red-500 text-white rounded">
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;