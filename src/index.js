import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.render(
  <Auth0Provider
    domain="dev-9a9kx51c.eu.auth0.com"
    clientId="LEVrIDiSTTlnNDWkeLZyuvwid7g5UL2W"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>

  , document.getElementById('root'))

  // dev-9a9kx51c.eu.auth0.com
  // LEVrIDiSTTlnNDWkeLZyuvwid7g5UL2W
