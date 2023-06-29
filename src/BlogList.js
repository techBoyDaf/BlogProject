import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({blogs,titles}) => {
    // const blogs = props.blogs
    // const header = props.titles
    return ( 
        <div className="blog-list">
        <h1>{titles}</h1> 
{blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>            
            <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>{blog.author}</p>
            
            </Link>
            
        </div>
    ) )}
        </div>
     );
}
 
export default BlogList;