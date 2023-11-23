import { useState } from 'react'
import { RestaurantCard } from '../../components/restaurant-card/component'
import { Tabs } from '../../components/tabs/component'

export const RestaurantsPage = ({ restaurants }) => {
  const names = Array.from(new Set(restaurants.map(({ name }) => name)))
  const [selectedRestaurant, setSelectedRestaurant] = useState()

  const filteredestaurants = restaurants.filter(
    ({ name }) => name === selectedRestaurant,
  )

  return (
    <>
      <Tabs names={names} onRestarauntSelect={setSelectedRestaurant} />
      <RestaurantCard restaurants={filteredestaurants} />
    </>
  )
}
