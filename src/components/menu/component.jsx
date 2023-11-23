export const Menu = ({ menu }) => {
  return (
    <>
      <h3>Menu</h3>
      <ul>
        {menu.map((item) => {
          return (
            <li key={item.id}>
              {item.name} | {item.price + '$'}
            </li>
          )
        })}
      </ul>
    </>
  )
}
