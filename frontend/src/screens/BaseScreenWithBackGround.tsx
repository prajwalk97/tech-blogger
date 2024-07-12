import { AppBar } from "../components/AppBar"

import { shallowEqual, useSelector } from "react-redux";
import { getAuthorName } from "../reducers";
export const BaseScreenWithBackGround = ({ children }: { children: any }) => {
    const authorName = useSelector((state) => getAuthorName(state), shallowEqual);
    console.log("authorname", authorName)
    return (
        <>
            <div className="dark:bg-neutral-200 min-h-screen w-screen">
                <AppBar authorName={authorName} />
                <div>
                    {children}
                </div>
            </div>
        </>
    );
}