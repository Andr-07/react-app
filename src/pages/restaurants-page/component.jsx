import { RestaurantCard } from '../../components/restaurant-card/component'
import { Tab } from '../../components/tab/component'

export const RestaurantsPage = ({ restaurants }) => {
  const names = Array.from(new Set(restaurants.map(({ name }) => name)))
  return (
    <>
      <Tab names={names} />
      <RestaurantCard restaurants={restaurants} />
    </>
  )
}
