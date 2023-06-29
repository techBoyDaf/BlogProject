import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author}
        fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      setIsLoading(false)
      history.push("/")
    })
    }
    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title: </label>
                <input type="text" 
                required 
                value={title}
                onChange={(e) => setTitle(e.target.value)}/>

                <label>Blog Body: </label>
                <textarea 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)} > </textarea>
                <label>Blog author: </label>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value ="yoshi">yoshi</option>
                    <option value ="jhargo">jhargo</option>                    
                </select>

                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button disabled>Adding new blog...</button>}
                
                

                


            </form>
        </div>
     );
}
 
export default Create;