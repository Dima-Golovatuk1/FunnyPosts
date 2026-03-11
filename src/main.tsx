import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import './ui/base-css/index'

import { Header, Footer } from 'widgets/index'
import { Home, Posts } from 'pages/index'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Provider store={store}> */}
      <BrowserRouter basename="/FunnyPosts/">
      <Header/>

        <main>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/posts' element={<Posts/>} />
          </Routes>
        </main>

        <Footer/>
      </BrowserRouter>
    {/* </Provider> */}
  </StrictMode>,
)
