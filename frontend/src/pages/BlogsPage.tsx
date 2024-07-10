import { useEffect, useState } from "react"
import { BlogItem, BlogItemProps } from "../components/BlogItem"
import { BaseScreenWithBackGround } from "../screens/BaseScreenWithBackGround"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { BlogSkeleton } from "../components/BlogSkeleton";

export const BlogsPage = () => {
    const [blogs, setBlogs] = useState<BlogItemProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        console.log(jwt);
        axios.get(BACKEND_URL + '/api/v1/blog/bulk', {
            headers: {
                "Authorization": jwt
            }
        }).then(response => {
            console.log("debuf", response.data);
            setBlogs(response.data);
            setLoading(false);
        })
    }, [])
    return (
        <BaseScreenWithBackGround>
            <div className="flex flex-col justify-center items-center">
                {loading ? (<div>
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                </div>) : (<div>
                    {blogs ? blogs.map((blog) => {
                        return <BlogItem id={blog.id} authorName={blog.authorName || "guest user"} title={blog.title} content={blog.content} publishedTime={blog.publishedTime?.split('T')[0] ?? Date.now().toLocaleString()}/>;
                    }) : null}
                    <BlogItem authorName="Prajwal Kumar" publishedTime={new Date().toDateString()} title={"prajwalaaa first blag"} content={" asdfsdhf  dfksdf dfkfhas fsfsfkafjsjffhsd  sdh fjsfa fha fh s f s fjs fs fs s fsf skfsfs fsd ff s fs fs kf haf has f s f has fs hundefined"} id={""} />
                    <BlogItem authorName="Prajwal Kumar" publishedTime={new Date().toDateString()} title={"prajwalaaa first blag"} content={" asdfsdhf  dfksdf dfkfhas fsfsfkafjsjffhsd  sdh fjsfa fha fh s f s fjs fs fs s fsf skfsfs fsd ff s fs fs kf haf has f s f has fs hundefined"} id={""} />
                    <BlogItem authorName="Prajwal Kumar" publishedTime={new Date().toDateString()} title={"prajwalaaa first blag"} content={" asdfsdhf  dfksdf dfkfhas fsfsfkafjsjffhsd  sdh fjsfa fha fh s f s fjs fs fs s fsf skfsfs fsd ff s fs fs kf haf has f s f has fs hundefined"} id={""} />
                    <BlogItem authorName="Prajwal Kumar" publishedTime={new Date().toDateString()} title={"prajwalaaa first blag"} content={" asdfsdhf  dfksdf dfkfhas fsfsfkafjsjffhsd  sdh fjsfa fha fh s f s fjs fs fs s fsf skfsfs fsd ff s fs fs kf haf has f s f has fs hundefined"} id={""} />
                    <BlogItem authorName="Prajwal Kumar" publishedTime={new Date().toDateString()} title={"prajwalaaa first blag"} content={" asdfsdhf  dfksdf dfkfhas fsfsfkafjsjffhsd  sdh fjsfa fha fh s f s fjs fs fs s fsf skfsfs fsd ff s fs fs kf haf has f s f has fs hundefined"} id={""} />
                    <BlogItem authorName="Prajwal Kumar" publishedTime={new Date().toDateString()} title={"prajwalaaa first blag"} content={" asdfsdhf  dfksdf dfkfhas fsfsfkafjsjffhsd  sdh fjsfa fha fh s f s fjs fs fs s fsf skfsfs fsd ff s fs fs kf haf has f s f has fs hundefined"} id={""} />
                </div>)}
            </div>
        </BaseScreenWithBackGround >
    )
}