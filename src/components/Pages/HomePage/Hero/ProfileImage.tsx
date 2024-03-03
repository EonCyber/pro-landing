export default function ProfileImage({containerStyles, imgSrc}: {containerStyles: string,imgSrc: string}) {
    return (
        <div className={`right-10 bg-white dark:backdrop-blur-[44px] shadow-md rounded-full overflow-hidden relative ${containerStyles}`}>
            <img src={imgSrc} alt="Profile Image" className="w-full h-full object-cover" />
        </div>
    )
}