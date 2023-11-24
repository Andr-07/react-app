import { Dish } from '../dish/component'

export const Menu = ({ dishes }) => {
  return (
    <>
      <h3>Menu</h3>
      <ul>
        {dishes.map((dish) => (
          <Dish dish={dish} />
        ))}
      </ul>
    </>
  )
}
