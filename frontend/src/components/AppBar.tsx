import { useNavigate } from "react-router-dom"
import { Avatar } from "./Avatar"
import { WriterIcon } from "./WriterIcon";
import { useDispatch } from "react-redux";


export const AppBar = ({ authorName = 'guest_user' }: { authorName: string }) => {
    const navigateTo = useNavigate();
    const dispatch = useDispatch();
    console.log(authorName);
    function handleSignInSignOut() {
        if (authorName === 'guest_user') {
            navigateTo('/signinsignup', { state: { signin: true } })
        } else {
            localStorage.clear();
            dispatch({
                type: 'UPDATE_JWT',
                payload: {
                    jwt: '',
                    authorName: 'guest_user',
                    isSignedIn: false
                }
            })
            navigateTo('/');
        }
    }

    return (
        <div className="sticky top-0 z-50 bg-gray-400 shadow-lg">
            <div className="flex justify-between items-center border-b p-5 border-slate-400">
                <div className="font-light text-lg cursor-pointer" onClick={() => { navigateTo("/") }}>
                    Tech Blogger
                </div>
                <div className="flex gap-5">
                    <WriterIcon onClickHandler={() => navigateTo("/publish")} />
                    <Avatar authorName={authorName} size="big" />
                    <button className="font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 px-3 py-1" onClick={() => { handleSignInSignOut() }}>{authorName === "guest_user" ? "Sign In" : "Sign Out"}</button>
                </div>
            </div>
        </div>
    )
}