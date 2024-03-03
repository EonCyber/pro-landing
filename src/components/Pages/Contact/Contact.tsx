import { motion } from 'framer-motion'
import ContactForm from './ContactForm'

export default function Contact() {
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
                <div className="p-1 xl:container md:container mx-auto">
                    <div className='grid xl:grid-cols-2 pt-12 mb-24 xl:gap-x-40'>
                        <div className=''>
                            <h1 className='marker'>Contact Me</h1>
                            <div className='flex xl:gap-x-2 group '>
                                <div className="none xl:h-[84px] xl:w-[3px] bg-primary relative top-12 shadow"></div>
                                <p className='subtitle font-light pt-10 '>Let's talk about technology and your brand new idea for a Web Application, Api Project, Ai Chatbot, or any sugestions!</p>
                            </div>
                            <div className='bg-bender mx-auto xl:h-[600px] w-full bg-no-repeat bg-contain'></div>
                        </div>
                        <div>
                        {/* <div> */}
                            <ContactForm></ContactForm>
                        </div>
                        <div className='h-[40vh] md:h-[60vh] xl:h-full w-full'>
                             <div className='h-[100%] w-[70%] bg-bender mx-auto xl:hidden bg-no-repeat bg-contain'></div>
                        </div>
                    </div>
                    
                </div>
            </main>
        </motion.div>
        
    )
}