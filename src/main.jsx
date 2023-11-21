import ReactDOM from 'react-dom/client'

import { App } from './App'
import { restaurants } from './constants/mock'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App restaurants={restaurants} />,
)
