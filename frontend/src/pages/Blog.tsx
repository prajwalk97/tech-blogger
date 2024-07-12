import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { Spinner } from "../components/Spinner";
import { FullBlog } from "../components/FullBlog";
import { BaseScreenWithBackGround } from "../screens/BaseScreenWithBackGround";
import { useSelector } from "react-redux";
import { getJwt } from "../reducers";

// atomFamilies/selectorFamilies
export const Blog = () => {
  const { id } = useParams();
  const jwt = useSelector((state) => getJwt(state));
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState();
  console.log(id);
  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
      headers: {
        Authorization: jwt,
      }
    })
      .then(response => {
        console.log(response)
        setBlog(response.data);
        setLoading(false);
      })
  }, [id])

  return <BaseScreenWithBackGround>
    {(loading || !blog) ?
      (
        <div className="h-screen flex flex-col justify-center">

          <div className="flex justify-center">
            <Spinner />
          </div>
        </div>) :
      (<div>
        <FullBlog blog={blog} />
      </div>)}
  </BaseScreenWithBackGround>;
};

export default Blog;