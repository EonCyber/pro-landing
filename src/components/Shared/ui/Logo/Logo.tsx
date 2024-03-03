import { Link } from "react-router-dom";
import { routesPaths } from "../../api/routes/routes";

export default function Logo({imgSrc}:{imgSrc: string}) {
    const path = routesPaths.home
    const logo = <img src={imgSrc} width={54} height={54} alt="my logo"></img>
    return (
        <div>
            <Link to={path}>{logo}</Link>
        </div>
    )
}