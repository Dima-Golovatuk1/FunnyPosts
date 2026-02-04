import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import '@a1rth/css-normalize'
import './ui/base-css/reset.css'
import './ui/base-css/common.css'
import './ui/base-css/vars.css'

import { Header } from 'ui/layout/Header'
import { Footer } from 'ui/layout/Footer'

import { Home } from 'ui/pages/home/Home'
import { Posts } from 'ui/pages/posts/Posts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Provider store={store}> */}
      <BrowserRouter>
      <Header/>

        <main>
          <Routes>
              <Route path='' element={<Home/>} />
              <Route path='/posts' element={<Posts/>} />
          </Routes>
        </main>

        <Footer/>
      </BrowserRouter>
    {/* </Provider> */}
  </StrictMode>,
)
