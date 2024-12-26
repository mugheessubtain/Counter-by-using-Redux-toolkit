"use client"

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from '../store/features/userSlice'

export default function Home() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-extrabold text-blue-600 mb-8 text-center">
        Counter App using Redux Toolkit
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center space-y-6">
        <p className="text-lg font-semibold">
          Currently Count is <span className="text-blue-500">{count}</span>
        </p>
        <div className="flex space-x-4">
          <button
            onClick={() => dispatch(decrement())}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
          >
            -
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
          >
            +
          </button>
          <button
            onClick={() => dispatch(incrementByAmount(count))}
            className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
          >
            *
          </button>
        </div>
      </div>
    </div>

  );
}
