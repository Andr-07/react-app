import { RestaurantCard } from '../../components/restaurant-card/component'
import { Tabs } from '../../components/tabs/component'

export const RestaurantsPage = ({ restaurants }) => {
  const names = Array.from(new Set(restaurants.map(({ name }) => name)))
  return (
    <>
      <Tabs names={names} />
      <RestaurantCard restaurants={restaurants} />
    </>
  )
}
