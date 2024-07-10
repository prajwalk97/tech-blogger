import { useNavigate } from "react-router-dom"
import { Avatar } from "./Avatar"
import { WriterIcon } from "./WriterIcon";

export const AppBar = () => {
    const navigateTo = useNavigate();
    return (
        <div className="sticky top-0 z-50 bg-gray-400 shadow-lg">
            <div className="flex justify-between items-center border-b p-5 border-slate-400">
                <div className="font-light text-lg cursor-pointer" onClick={() => { navigateTo("/blogs") }}>
                    Tech Blogger
                </div>
                <div className="flex gap-5">
                    <WriterIcon onClickHandler={() => navigateTo("/publish")} />
                    <Avatar authorName="prajwal K" size="big" />
                </div>
            </div>
        </div>
    )
}