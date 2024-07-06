import { AppBar } from "../components/AppBar"

export const BaseScreenWithBackGround = ({ children }: { children: any }) => {
    return <div className="dark:bg-neutral-200 min-h-screen w-screen">
        <AppBar />
        {children}
    </div>
}