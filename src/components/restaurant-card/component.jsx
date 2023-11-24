import { Menu } from '../menu/component'
import { Reviews } from '../reviews/component'

export const RestaurantCard = ({ restaurant }) => {
  if (!restaurant) {
    return null
  }
  return (
    <>
      <div key={restaurant.id}>
        <h1>{restaurant.name}</h1>
        <Menu dishes={restaurant.menu}></Menu>
        <Reviews reviews={restaurant.reviews}></Reviews>
      </div>
    </>
  )
}
