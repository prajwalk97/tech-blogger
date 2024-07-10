export const Avatar =
    ({ avatarURL, authorName, size = "small" }:
        {
            avatarURL?: string;
            authorName: string;
            size: "small" | "big"
        }
    ) => {
        return (
            (avatarURL ? (
                <img className={`${size === "big" ? "w-8" : "6"} ${size === "big" ? "h-8" : "h-6"} rounded-full`} src={avatarURL} alt="Rounded avatar" />
            ) : (
                <div className={`relative inline-flex items-center justify-center ${size === "big" ? "w-7" : "w-6"} ${size === "big" ? "h-7" : "h-6"} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`} >
                    <span className={`font-${size === "big" ? "md" : "xs"} text-gray-600 dark:text-gray-300`}>{authorName[0].toLocaleUpperCase()}</span>
                </div >
            ))
        );
    };