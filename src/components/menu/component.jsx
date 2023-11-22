import { useState } from 'react'
import { addOrder, reduceOrder } from '../../utils'

export const Menu = ({ menu }) => {
  return (
    <>
      <h3>Menu</h3>
      <ul>
        {menu.map((item) => {
          const [actualCount, setCount] = useState(0)

          return (
            <li key={item.id}>
              {item.name} | {item.price + '$'}
              <span>
                <button onClick={() => reduceOrder(actualCount, setCount)}>
                  -
                </button>
                {actualCount}
                <button onClick={() => addOrder(actualCount, setCount)}>
                  +
                </button>
              </span>
            </li>
          )
        })}
      </ul>
    </>
  )
}
