import { Link } from "react-router-dom";

export default function Logo({imgSrc}:{imgSrc: string}) {
    const path = "/"
    const logo = <img src={imgSrc} width={54} height={54} alt="my logo"></img>
    return (
        <div>
            <Link to={path}>{logo}</Link>
        </div>
    )
}