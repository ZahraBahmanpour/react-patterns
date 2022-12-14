import { Link } from 'react-router-dom';

const Blog = ({id, title, author}) => {
    return (
        <div className="blog-preview" key={id} >
        <Link to={`/blogs/${id}`}>
          <h2>{ title }</h2>
          <p>Written by { author }</p>
        </Link>
      </div>
    )
}

export default Blog;