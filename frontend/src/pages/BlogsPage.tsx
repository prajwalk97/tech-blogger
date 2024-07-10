import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { BlogItem, BlogItemProps } from "../components/BlogItem"
import { BaseScreenWithBackGround } from "../screens/BaseScreenWithBackGround"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { BlogSkeleton } from "../components/BlogSkeleton";

export const BlogsPage = () => {
    const navigateTo = useNavigate();
    const [blogs, setBlogs] = useState<BlogItemProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const blogItemCLickHandler = (id: string) => {
        navigateTo(`/blog/${id}`);
    }
    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            axios.get(BACKEND_URL + '/api/v1/blog/bulk', {
                headers: {
                    "Authorization": jwt
                }
            }).then(response => {
                setBlogs(response.data);
                setLoading(false);
            })
        } else {
            axios.get(BACKEND_URL + '/').then(response => {
                setBlogs(response.data.blogs);
                setLoading(false);
            })
        }
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
                    {blogs ? blogs?.map((blog) => {
                        return <BlogItem id={blog.id} authorName={blog.authorName || "guest user"} title={blog.title} content={blog.content} publishedTime={blog.publishedTime?.split('T')[0] ?? Date.now().toLocaleString()} blogItemCLickHandler={blogItemCLickHandler} />
                    }) : null}
                </div>)}
            </div>
        </BaseScreenWithBackGround >
    )
}