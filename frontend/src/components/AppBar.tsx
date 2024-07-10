import { useNavigate } from "react-router-dom"
import { Avatar } from "./Avatar"
import { WriterIcon } from "./WriterIcon";
import { useEffect, useState } from "react";
import { useJwt } from "react-jwt";

export const AppBar = () => {
    const navigateTo = useNavigate();
    const [authorName, setAuthorName] = useState<string>('');
    useEffect(() => {
        try {
            const jwt = localStorage.getItem('jwt');
            const { decodedToken } = useJwt(jwt);
            console.log(decodedToken);
            // setAuthorName(decodedToken.name);

        } catch (e) {
            setAuthorName("guestUser");
        }
    }, []);
    return (
        <div className="sticky top-0 z-50 bg-gray-400 shadow-lg">
            <div className="flex justify-between items-center border-b p-5 border-slate-400">
                <div className="font-light text-lg cursor-pointer" onClick={() => { navigateTo("/blogs") }}>
                    Tech Blogger
                </div>
                <div className="flex gap-5">
                    <WriterIcon onClickHandler={() => navigateTo("/publish")} />
                    <Avatar authorName={authorName} size="big" />
                </div>
            </div>
        </div>
    )
}