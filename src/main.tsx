import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from 'store/store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './ui/base-css/index'

import { Header, Footer } from 'widgets/index'
import { Home, Posts, InfoPost, Registration, Login, TwoFactor } from 'pages/index'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
            <BrowserRouter basename="/FunnyPosts/">
                <Header />

                <main>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/posts' element={<Posts />} />
                        <Route path='/posts/:id' element={<InfoPost/>}/>

                        {/* AUTH */}
                        <Route path='/auth/registration' element={<Registration/>}/>
                        <Route path='/auth/login' element={<Login/>}/>
                        <Route path='/auth/two-factor' element={<TwoFactor/>}/>
                    </Routes>
                </main>

                <Footer />
            </BrowserRouter>
            </Provider>
        </QueryClientProvider>

    </StrictMode>,
)
