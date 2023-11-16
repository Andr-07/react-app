import ReactDOM from 'react-dom/client'

import { restaurants } from './constants/mock'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ul className="main">
    <ul>
      <li>
        <h1> {restaurants[0].name}</h1>
        <h3>Меню</h3>
        <ul className="menu">
          <li id={restaurants[0].menu[0].id}>{restaurants[0].menu[0].name}</li>
          <li id={restaurants[0].menu[1].id}>{restaurants[0].menu[1].name}</li>
          <li id={restaurants[0].menu[2].id}>{restaurants[0].menu[2].name}</li>
        </ul>
        <h3>Отзывы</h3>
        <ul>
          <li id={restaurants[0].reviews[0].id}>
            {restaurants[0].reviews[1].user} | {restaurants[0].reviews[0].text}{' '}
            | {restaurants[0].reviews[0].rating}
          </li>
          <li id={restaurants[0].reviews[1].id}>
            {restaurants[0].reviews[1].user} | {restaurants[0].reviews[1].text}{' '}
            | {restaurants[0].reviews[1].rating}
          </li>
        </ul>
      </li>
      <li>
        <h1> {restaurants[1].name}</h1>
        <h3>Меню</h3>
        <ul className="menu">
          <li id={restaurants[1].menu[0].id}>{restaurants[1].menu[0].name}</li>
          <li id={restaurants[1].menu[1].id}>{restaurants[1].menu[1].name}</li>
        </ul>
        <h3>Отзывы</h3>
        <ul>
          <li id={restaurants[1].reviews[0].id}>
            {restaurants[1].reviews[1].user} | {restaurants[1].reviews[0].text}{' '}
            | {restaurants[0].reviews[0].rating}
          </li>
          <li id={restaurants[1].reviews[1].id}>
            {restaurants[1].reviews[1].user} | {restaurants[1].reviews[1].text}{' '}
            | {restaurants[1].reviews[1].rating}
          </li>
          <li id={restaurants[1].reviews[1].id}>
            {restaurants[1].reviews[2].user} | {restaurants[1].reviews[2].text}{' '}
            | {restaurants[1].reviews[2].rating}
          </li>
        </ul>
      </li>
      <li>
        <h1> {restaurants[2].name}</h1>
        <h3>Меню</h3>
        <ul className="menu">
          <li id={restaurants[2].menu[0].id}>{restaurants[2].menu[0].name}</li>
          <li id={restaurants[2].menu[1].id}>{restaurants[2].menu[1].name}</li>
          <li id={restaurants[2].menu[2].id}>{restaurants[2].menu[2].name}</li>
        </ul>
        <h3>Отзывы</h3>
        <ul>
          <li id={restaurants[2].reviews[0].id}>
            {restaurants[2].reviews[0].user} | {restaurants[2].reviews[0].text}{' '}
            | {restaurants[2].reviews[0].rating}
          </li>
        </ul>
      </li>
      <li>
        <h1> {restaurants[3].name}</h1>
        <h3>Меню</h3>
        <ul className="menu">
          <li id={restaurants[3].menu[0].id}>{restaurants[3].menu[0].name}</li>
          <li id={restaurants[3].menu[1].id}>{restaurants[3].menu[1].name}</li>
        </ul>
        <h3>Отзывы</h3>
        <ul>
          <li id={restaurants[3].reviews[0].id}>
            {restaurants[3].reviews[0].user} | {restaurants[3].reviews[0].text}{' '}
            | {restaurants[3].reviews[0].rating}
          </li>
          <li id={restaurants[0].reviews[1].id}>
            {restaurants[3].reviews[1].user} | {restaurants[3].reviews[1].text}{' '}
            | {restaurants[3].reviews[1].rating}
          </li>
        </ul>
      </li>
    </ul>
  </ul>,
)
