import { useState } from 'react'
export default function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900 flex items-center justify-center'>
      <div className='bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full'>
        <h1 className='text-4xl font-bold text-slate-800 mb-2'>abcd</h1>
        <p className='text-slate-500 mb-6'>Built with AI Factory v3.3</p>
        <div className='bg-slate-50 rounded-xl p-4 mb-6 text-sm text-slate-600 space-y-1'>
          <p>✅ React 18 + Vite</p>
          <p>✅ Tailwind CSS</p>
          <p>✅ Docker container</p>
          <p>✅ GitHub + auto-commits</p>
        </div>
        <button
          onClick={() => setCount(c => c + 1)}
          className='w-full bg-indigo-600 hover:bg-indigo-700 text-white
            font-semibold py-3 rounded-xl transition-colors'
        >
          Clicked {count} times
        </button>
        <p className='mt-3 text-xs text-center text-slate-400'>
          Edit src/App.jsx to start building your app
        </p>
      </div>
    </div>
  )
}
