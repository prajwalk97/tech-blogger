import { AppBar } from "../components/AppBar"
import { useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import { useSelector } from "react-redux";
import { getJwt } from "../reducers";
export const BaseScreenWithBackGround = ({ children }: { children: any }) => {
    const jwt = useSelector((state) => getJwt(state));
    const { decodedToken }: any = useJwt(jwt || '');
    const [authorName, setAuthorName] = useState<string>('');

    useEffect(() => {
        if (decodedToken) setAuthorName(decodedToken?.name);
        else setAuthorName("guest_user")
    }, [jwt]);
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