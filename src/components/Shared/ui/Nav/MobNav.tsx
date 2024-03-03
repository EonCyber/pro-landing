import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { AlignJustify } from "lucide-react"

import { useTheme } from "../Themes/theme-provider"
import Logo from "../Logo/Logo"
import Nav from "./Nav"
import Socials from "../Socials/Socials"


export default function MobileNav() {
    const {theme} = useTheme()
    return(
        <Sheet>
            <SheetTrigger asChild>
                <AlignJustify className="cursor-pointer"></AlignJustify>
            </SheetTrigger>
            <SheetContent>
                <div>
                    <div className="mb-32">
                        {theme == 'light' ? <Logo imgSrc="logo/logo-light.svg"/> : <Logo imgSrc="logo/logo-dark.svg"/>}
                    </div>
                    <div className="flex flex-col items-center gap-y-32">
                        <Nav 
                        sectionStyle="flex flex-col items-center gap-y-6"
                        underlineStyle="tweet"
                        linkStyle="text-2xl"
                        ></Nav>
                        <Socials containerStyles="flex gap-x-4 "
                        iconsStyles="text-4xl hover:text-secondary transition-all"
                        ></Socials>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}