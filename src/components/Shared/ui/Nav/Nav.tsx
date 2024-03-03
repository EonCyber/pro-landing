import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { routesPaths } from '../../api/routes/routes'
export default function Nav({sectionStyle, linkStyle, underlineStyle}: {sectionStyle: string, linkStyle: string, underlineStyle: string}) {
    const links = [
        { path: routesPaths.home, name: 'Home'},
        { path: routesPaths.contact, name: 'Contact'},
    ]
    const anim = {
        initial: { y: '-100%'},
        animate: { y: 0},
        transition: { type: 'tween'},
    }
    const path = useLocation().pathname // Actual Path Selected
    return (
        <div className={`${sectionStyle} flex`}>
            {
                links.map((link, index) => {
                    return <Link 
                    to={link.path}
                    className={`capitalize ${linkStyle} hover:text-secondary dark:hover:text-[#C252E1] transition-all`}
                    key={index}
                    >
                        {/* Underline animation */}
                        {link.path === path && (
                            <motion.span
                                initial={anim.initial}
                                animate={anim.animate}
                                transition={anim.transition}
                                layoutId='underline'
                                className={`${underlineStyle}`}
                            />
                        )}
                        <b>{link.name}</b>
                    </Link>
                })
            }

        </div>
    )
}