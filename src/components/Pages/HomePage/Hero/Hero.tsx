import Socials from "@/components/Shared/ui/Socials/Socials"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import ProfileImage from "./ProfileImage"
import { SendIcon } from "lucide-react"
import MyBadge from "./MyBadge"
import CountUp from 'react-countup'
import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import { ExpressOriginalWordmark , 
    StreamlitOriginalWordmark, 
    GooglecloudOriginalWordmark, 
    NodejsOriginalWordmark, 
    ReactOriginalWordmark, 
    AmazonwebservicesOriginalWordmark,
    JavascriptOriginal ,
    TypescriptPlain ,
    PythonOriginal ,
    JavaOriginalWordmark ,
    KubernetesOriginal ,
    DockerPlain ,
    SpringOriginal, 
} from 'devicons-react'


export default function Hero() {
    const [stackIndex, setStackIndex] = useState(0)
    const [langIndex, setLangIndex] = useState(0)

    const stack = [
        <ReactOriginalWordmark size={60}/>, 
        <NodejsOriginalWordmark size={70}/>, 
        <AmazonwebservicesOriginalWordmark size={70}/>, 
        <GooglecloudOriginalWordmark size={80}/>, 
        <StreamlitOriginalWordmark  size={70}/>, 
        <ExpressOriginalWordmark size={90}/>,
        <SpringOriginal size={45}/>,
    ]

    const langs = [
    <TypescriptPlain size={50}/>, 
    <JavascriptOriginal size={50}/>, 
    <KubernetesOriginal size={50}/>, 
    <DockerPlain size={50}/>, 
    <PythonOriginal size={50}/>, 
    <JavascriptOriginal size={50}/>,
    <JavaOriginalWordmark size={50}/>,
    ]

    const animBadgeOne = {initial:{ opacity: 0, y: 0 }, animate:{ opacity: 1, y: 0 }, transition:{ duration: 0.5, ease: "easeIn", delay: 0.9 }}
    const animBadgeTwo = {initial:{ opacity: 0, y: 0 }, animate:{ opacity: 1, y: 0 }, transition:{ duration: 0.5, ease: "easeIn", delay: 1 }}
    const animBadgeThree = {initial:{ opacity: 0, y: 0 }, animate:{ opacity: 1, y: 0 }, transition:{ duration: 0.5, ease: "easeIn", delay: 1.3 }}
    useEffect(() => {
        const interval = setInterval(() => {
            setStackIndex((prevIndex) => (prevIndex + 1) % stack.length)
            setLangIndex((prevIndex) => (prevIndex + 1) % langs.length)
        }, 3000)  
        return () => clearInterval(interval)
    })
    
    return (
        <section className='relative py-12 xl:py-24 h-[23vh] xl:h-[100vh] xl:pt-30 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-hero_dark'>
            <div className="container mx-auto z-10">
                <div className="flex justify-between gap-x-8">
                    <div className="flex max-w-[700px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left ">
                        <div className="xl:hidden self-center mb-8">
                            <ProfileImage containerStyles="z-10 w-[200px] h-[200px] -left-2 dark:border-white dark:border-2" imgSrc="/profile/vieira-bot.jpeg"></ProfileImage>       
                        </div>
                        <div className="xl:text-lg text-md uppercase font-bold mb-4 py-4 xl:mb-0 xl:py-6 text-primary tracking-[1px]">Fullstack Software Engineer</div>
                        <h1 className="text-[58px] marker">Let's Build Together!</h1>
                        <span className="text-muted-foreground mt-2 text-md px-1 py-1 xl:py-0">Your next Web App,  Your next Api Project, Your next Ai Intelligent Automation.</span>
                        <div className="py-6 xl:py-8 xl:px-1">
                            <div className="subtitle">I'm <b>Ian V. Salgado</b>, a <b>Senior Developer</b> based in Brazil! </div>
                        </div>
                        
                        <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
                            <Button variant='default' disabled className="rounded-full shadow-md gap-x-2">Download CV</Button>
                            <Link to={'/pro-landing/contact'}>
                                <Button variant='secondary' className="rounded-full shadow-md gap-x-2">Contact Me<SendIcon size={18}/></Button>
                            </Link>
                        </div>
                        <Socials iconsStyles='text-primary xl:text-[44px] text-[32px] hover:text-secondary transition-all' containerStyles='flex gap-x-6 mx-auto xl:mx-0 '></Socials>
                    </div>
                    <div className="hidden xl:flex relative transitial-all ease-in">
                        <motion.div className="z-10" initial={animBadgeOne.initial} animate={animBadgeOne.animate} transition={animBadgeOne.transition}>
                            <MyBadge containerStyles="absolute top-[14%] -left-[10rem] dark:border-white dark:border-2">
                                <div>
                                    <div className='flex items-center gap-x-4'>
                                        <div className='text-4xl leading-none font-semibold text-primary'>
                                            <CountUp
                                            end={4}
                                            delay={1}
                                            duration={2}/>+
                                            
                                        </div>
                                        <div className='max-2-[70px] leading-none text-[15px] font-medium text-black dark:text-primary'>
                                            Years of Experience
                                        </div>
                                    </div>
                                </div>
                            </MyBadge>
                        </motion.div>
                        <motion.div className="z-10" initial={animBadgeTwo.initial} animate={animBadgeTwo.animate} transition={animBadgeTwo.transition}>
                            <MyBadge containerStyles="absolute top-[45%] -left-[12rem] dark:border-white dark:border-2">
                                <div>
                                    <div className='flex items-center gap-x-6'>
                                        <div className='text-xl leading-none font-bold text-primary'>
                                            Stack:
                                        </div>
                                        <div>
                                            <motion.div 
                                                key={stackIndex}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.6 }}
                                                >
                                                    {stack[stackIndex]}
                                                </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </MyBadge>
                        </motion.div>
                        <motion.div className="z-10" initial={animBadgeThree.initial} animate={animBadgeThree.animate} transition={animBadgeThree.transition}>
                            <MyBadge containerStyles="absolute top-[75%] -left-[8rem] dark:border-white dark:border-2">
                                <div>
                                    <div className='flex items-center gap-x-4'>
                                        <div className='text-xl leading-none font-bold text-primary'>
                                            Skills In:
                                        </div>
                                        <div>
                                            <motion.div 
                                                key={langIndex}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                                >
                                                   {langs[langIndex]}
                                                </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </MyBadge>
                        </motion.div>
                        <ProfileImage containerStyles="w-[350px] h-[350px] dark:border-white dark:border-2" imgSrc="/profile/vieira-bot.jpeg"></ProfileImage>       
                    </div>
                </div>
            </div>
            <div className="absolute  inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-white dark:to-[#0c0a0a]"></div>
        </section>
    )
}