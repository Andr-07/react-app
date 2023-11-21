// import { RestaurantCard } from "../../components/restaurant-card/component";
import { RestaurantCard } from '../../components/restaurant-card/component'
import { TopTab } from '../../components/top-tab/component'

export const RestaurantsPage = ({ restaurants }) => {
  const names = Array.from(new Set(restaurants.map(({ name }) => name)))
  return (
    <>
      <TopTab names={names} />
      <RestaurantCard restaurants={restaurants} />
    </>
  )
}
