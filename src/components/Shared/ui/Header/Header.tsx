import { ToggleThemeButton } from "@/components/ui/theme-toggle-button";
import { useLocation } from "react-router-dom";
import { useTheme } from "../Themes/theme-provider";
import MobileNav from "../Nav/MobNav";
import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";
import { routesPaths } from "../../api/routes/routes";
export default function Header() {
    const path = useLocation().pathname
    const {theme} = useTheme()
    const home = routesPaths.home
    return (
        <header className={ `py-4 bg-white shadow-sm dark:bg-accent sticky top-0 z-30 transition-all ${path === home} && 'bg-slate-50'}`}>
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div>
                        {theme == 'light' ? <Logo imgSrc="logo/logo-light.svg"/> : <Logo imgSrc="logo/logo-dark.svg"/>}
                        
                        </div>
                    <div className="flex items-center gap-x-6">
                        <div></div>
                        <Nav 
                            sectionStyle="hidden xl:flex gap-x-8 items-center"
                            linkStyle="relative hover:text-primary transition-all"
                            underlineStyle="absolute left-0 top-full h-[2px] bg-primary w-full"
                        />
                        <ToggleThemeButton></ToggleThemeButton>
                        <div className="xl:hidden">
                            <MobileNav></MobileNav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}