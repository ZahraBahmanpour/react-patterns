import Blog from "./Blog";
import Wrapper from "./Wrapper";

const BlogList = () => {
  return (
    <Wrapper
    url={'/posts'}
    render={({data: blogs, isPending, error}) => {
      if(isPending) return <div>Loading...</div>;
      return (<>
      {blogs.map(blog => (
        <Blog {...blog} key={blog.id}/>
      ))}
    </>
      )
    }}
    />
  );
}
export default BlogList;