import { Link } from "react-router-dom"
import {Badge} from "react-bootstrap"

const ArticleList = ({Articles})=>{
    return (
        <>
        {Articles.map(article =>
            (   
                <>
                <h1 className="article-list-link">{article.title} <Link key={article.name} to={`/articles/${article.name}`}><Badge bg="primary" style={{width:"auto",fontSize:"15px"}}>link</Badge></Link>    </h1>
                <p className="text-decoration-none">{article.content[0].substring(0,100)}...</p>
                <br/><br/>
                </>
            ))}
            </>
    )
}

export default ArticleList