// src/App.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store';
import { decrement, increment, selectCount } from './redux/Feature/counterSlice';
// import { RootState } from './app/store';
// import { increment, decrement, selectCount } from './features/counter/counterSlice';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => selectCount(state));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Counter: {count}</h1>
      <div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
