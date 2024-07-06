export const Avatar = ({ avatarURL, authorName }: { avatarURL?: string; authorName: string }) => {
    return (
        (avatarURL ? (
            <img className="w-6 h-6 rounded-full" src={avatarURL} alt="Rounded avatar" />
        ) : (
            <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-xs text-gray-600 dark:text-gray-300">{authorName[0]}</span>
            </div>
        ))
    );
};