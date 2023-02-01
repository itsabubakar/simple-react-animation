import Navbar from '@/components/Navbar'
import '@/style/global.css'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps, router }) {
  return <>
    <div className='p-10'>
      <Navbar />
      <AnimatePresence inital={false}>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>

  </>
}
