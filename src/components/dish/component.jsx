import { useState } from 'react'

export const Dish = ({ dish }) => {
  const [actualCount, setCount] = useState(0)

  if (!dish) {
    return null
  }

  return (
    <>
      <div key={dish.id}>
        {dish.name} | {dish.price + '$'}
        <span>
          <button
            onClick={() => setCount(actualCount - 1)}
            disabled={actualCount <= 0}
          >
            -
          </button>
          {actualCount}
          <button
            onClick={() => setCount(actualCount + 1)}
            disabled={actualCount >= 5}
          >
            +
          </button>
        </span>
      </div>
    </>
  )
}
