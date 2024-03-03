import { ReactNode } from "react";

export default function MyBadge({children, containerStyles}: {children: ReactNode, containerStyles: string}) {
    return (
        <div className={`badge ${containerStyles}`}>
            {children}
        </div>
    )
}