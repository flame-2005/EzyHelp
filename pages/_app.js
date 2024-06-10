import "@/styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import {store} from '../redux/store';



export default function App({ Component, pageProps }) {
  const router = useRouter();
  return <Provider store={store}>
  <Navbar/>
  <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={{
            initial: {
              opacity: 0,
              x: 50,
            },
            animate: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
              },
            },
            exit: {
              opacity: 0,
              x: -50,
              transition: {
                duration: 0.5,
              },
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
  <Footer/>
  </Provider>
}
