
'use client'

import {  
    RiLinkedinBoxFill, 
    RiGithubFill 
    } from 'react-icons/ri'
import { TbSquareRoundedLetterS } from "react-icons/tb";
import { Link } from 'react-router-dom'
export default function Socials({containerStyles, iconsStyles}: {containerStyles: string, iconsStyles: string}) {
    const icons = [
              {
            path: 'https://www.linkedin.com/in/ian-v-salgado-00790319b/',
            name: <RiLinkedinBoxFill/>
        },
        {
            path: 'https://github.com/EonCyber',
            name: <RiGithubFill/>
        },
        {
            path: 'https://posturacibernetica.substack.com/',
            name: <TbSquareRoundedLetterS/>
        },
    ]

    return (
        <div className={`${containerStyles}`}>
            {
                icons.map((icon, index) => {
                    return <Link key={index} to={icon.path}><div className={iconsStyles}>{icon.name}</div></Link>
                })
            }
        </div>
    )
}