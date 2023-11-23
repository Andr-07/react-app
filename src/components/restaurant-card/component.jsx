import { Menu } from '../menu/component'
import { Reviews } from '../reviews/component'

export const RestaurantCard = ({ restaurants }) => {
  return (
    <>
      {restaurants.map((restaurant) => (
        <div key={restaurant.id}>
          <h1>{restaurant.name}</h1>
          <Menu menu={restaurant.menu}></Menu>
          <Reviews reviews={restaurant.reviews}></Reviews>
        </div>
      ))}
    </>
  )
}
