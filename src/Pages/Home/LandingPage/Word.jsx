import React, { useState } from 'react'

const Word = () => {
  const [count, setCount] = useState('')
  return (
    <div>
      <input
        type="text"
        value={count}
        onChange={(e) => setCount(e.target.value)}
        className='border-4' />
      <div>
        {count.length}
      </div>
    </div>
  )
}

export default Word;