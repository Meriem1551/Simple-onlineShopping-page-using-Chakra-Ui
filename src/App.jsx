import { createBrowserRouter, 
  createRoutesFromElements, 
  Route,
  RouterProvider,
} from 'react-router-dom'
//layouts
import Header from './layouts/rootLayout'
import ShopLayout from './layouts/shopLayout'
import HelpLayout from './layouts/helpLayout'

//pages
import Main from './pages/landingPage'
import ShopPage, { productsLoader } from './pages/shopNow'
import BuyPage, { detailsLoader } from './pages/buyNow'
import About from './pages/about'
import Faq, { questionsLoader } from './pages/faq'
import Contact from './pages/contact'
import Done from './pages/done'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route exact path="/"
      element={<Header 
                 logo="ONlineMark" 
                 homeLink="Home" 
                 aboutLink="About" 
                 contactLink="Contact Us"
                 helpLink="Help"
                />}>
      <Route index 
        element={<Main 
                  title="Online Shopping"
                  subTitle="New Collection for this  Summer." 
                  exclamation="Hurry Up !"text="Live for influential and innovative Fashion. "
                />}/>
      <Route path="shopNow" 
        element={<ShopLayout 
                  title="Welcome to Our market"
                />} >
        <Route index 
          element={<ShopPage 
                    thanks="Thank you for visiting Us"
                  />} 
          loader={productsLoader}/>
        <Route path=":id" 
          element={<BuyPage />} 
          loader={detailsLoader}
        />
      </Route>
      <Route path="done" element={<Done />}/>
      <Route path="about" 
        element={<About 
                  title="About Us" 
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "/>}
      />
      <Route path="help" exact
        element={<HelpLayout 
                  title=" Website Help"/>}>
        <Route path="faq"
          element={<Faq/>}
          loader={questionsLoader}
        />
        <Route path="contact"
          element={<Contact/>}
        />
      </Route>
    </Route>
  )
)
function App() {
  return (
      <RouterProvider router={router} />
  )
}

export default App
