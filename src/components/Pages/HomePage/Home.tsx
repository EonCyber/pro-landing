import { motion } from 'framer-motion'
import Hero from './Hero/Hero'

export default function Home() {
    const anim = {
        initial: { opacity: 0},
        animate: { opacity: 1},
        exit: { opacity: 0},
    }
    return (
        <motion.div
            initial={anim.initial}
            animate={anim.animate}
            exit={anim.exit}
        >
            <main>
                <Hero/>
            </main>
        </motion.div>
        
    )
}