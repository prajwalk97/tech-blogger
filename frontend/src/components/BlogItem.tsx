import { Avatar } from "./Avatar";
import { Separator } from "./Separator";
import { TextLabel } from "./TextLabel";

interface BlogItemProps {
    avatarURL?: string;
    authorName: string;
    title: string;
    description: string;
    datePublished: string;
}
export const BlogItem = ({
    avatarURL,
    authorName,
    title,
    description,
    datePublished
}: BlogItemProps) => {
    console.log();
    return (<div className="border-b border-slate-300 p-4">
        <div className="flex gap-2 items-center">
            <Avatar avatarURL={avatarURL} authorName={authorName.toLocaleUpperCase()} />
            <TextLabel text={authorName} classNames="text-sm font-extralight text-black dark:text-black" />
            <Separator />
            <div className="font-extralight text-sm text-slate-500">
                {datePublished}
            </div>
        </div>
        <div className="font-semibold text-xl">
            {title}
        </div>
        <div className="font-extralight text-base">
            {description.slice().length > 150 ? description.slice(0, 97) + '...' : description}
        </div>
        <div className="font-extralight text-base text-slate-500">
            {Math.ceil(description.slice().length / 70) + " mins read"}
        </div>
    </div>)
}