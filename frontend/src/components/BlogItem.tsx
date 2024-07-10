import { useNavigate } from "react-router-dom";
import { Avatar } from "./Avatar";
import { Separator } from "./Separator";
import { TextLabel } from "./TextLabel";

export interface BlogItemProps {
    id: string;
    avatarURL?: string;
    authorName: string;
    title: string;
    content: string;
    publishedTime: string;
}
export const BlogItem = ({
    id,
    avatarURL,
    authorName,
    title,
    content,
    publishedTime
}: BlogItemProps) => {
    const navigateTo = useNavigate();
    const blogItemCLickHandler = () => {
        console.log(id)
        navigateTo(`/blog/${id}`)
    }
    return (<div className="border-b border-slate-300 p-4" onClick={blogItemCLickHandler}>
        <div className="flex gap-2 items-center">
            <Avatar avatarURL={avatarURL} authorName={authorName.toLocaleUpperCase()} size={"small"} />
            <TextLabel text={authorName} classNames="text-sm font-extralight text-black dark:text-black" />
            <Separator />
            <div className="font-extralight text-sm text-slate-500">
                {publishedTime}
            </div>
        </div>
        <div className="font-semibold text-xl">
            {title}
        </div>
        <div className="font-extralight text-base">
            {content.slice().length > 150 ? content.slice(0, 97) + '...' : content}
        </div>
        <div className="font-extralight text-base text-slate-500">
            {Math.ceil(content.slice().length / 70) + " mins read"}
        </div>
    </div>)
}