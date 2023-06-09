import { useEffect, useState } from "react";
import { Typography } from "../Typography"
import { BlogCard } from "../Cards/BlogCard";
import { GetData } from "../../firebase/get";

const Blogs = () => {

  const [blogs, setBlogs] = useState<any>(null)

  const getData = async () => {
    const data = await GetData('blogs')
    setBlogs(data);
  }

  useEffect(() => {
    getData()
  }, [])

  if (blogs === null) {
    return <>Loading...</>
  }

  return (
    <div>
      {blogs.length ? (
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 mt-10 lg:w-[100%] mx-auto gap-5">
          {blogs.map((blog:any) => (
            <BlogCard
              onClick={() => window.open(
                blog.href,
                '_blank'
              )}
              {...blog}
              titleClass="!text-[28px] !leading-[30px] font-semibold"
              children={
                <Typography
                  variant="body"
                  className="mt-2 !leading-6 !text-[16px]"
                >
                  {blog.content}
                </Typography>
              }
            />
          ))}
        </div>
      ) : (
        <div className="h-40 grid place-items-center">
          <Typography
            variant="body"
            align="center"
            className="lg:w-[65%] mx-auto"
          >
            There are currently no upcoming events scheduled, but check back
            soon as new events are added all the time.
          </Typography>
        </div>
      )}
    </div>
  )
}

export default Blogs