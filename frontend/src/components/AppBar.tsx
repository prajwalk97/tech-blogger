import { Avatar } from "./Avatar"

export const AppBar = () => {
    return (
        <div className="flex justify-between p-4 border-b border-slate-400">
            <div onClick={() => { }}>
                Tech Blogger
            </div>
            <Avatar authorName="Prajwal K" />
        </div>
    )
}