import { useParams } from "react-router-dom";
import Articles from "./Article-content";
import NotFound from "./NotFoundPage";
import { useState, useEffect } from "react";
import axios from "axios";
import CommentsList from "../componets/commentsList";
import AddCommnets from "../componets/AddComments";
import useUser from "../hooks/useUser";
import { Link } from "react-router-dom";


const ArticlePage = () => {
    const [articleinfo, setArticleInfo] = useState({ upvotes: 0, comments: [],canUpvote:false });
    const {canUpvote} = articleinfo
    const { articleId } = useParams();

    const {User,IsLoading} = useUser();

    useEffect(() => {
        const loadarticleinfo = async () => {
            const token = User && await User.getIdToken();
            const headers = token ? {authtoken:token} : {};
            const response = await axios.get(`/api/articles/${articleId}`,
                {headers});
            const newarticleinfo = response.data;
            setArticleInfo(newarticleinfo);
        }
        if(!IsLoading){
            loadarticleinfo()   
        }
    });

    const article = Articles.find(article => article.name === articleId);

    const addvote = async () => {
        const token = User && await User.getIdToken();
        const headers = token ? {authtoken:token} : {};
        const response = await axios.put(`/api/articles/${articleId}/upvotes`,null,
            {headers});
        const updatedArticle = response.data;
        setArticleInfo(updatedArticle);
    }

    if (article === undefined) {
        return <NotFound />
    }

    return (
        <div className="container bg-warning ">
            <div style={{ backgroundColor: "aliceblue", maxwidth: "1000px", minHeight: "100vh", margin: "30px auto", padding: "20px", borderRadius: "90px" }}>

                <h1 style={{ color: "orange" }}>{article.title}</h1>
                <div class="row g-1 bg-warning">
                    <div className="col">
                    <p class="d-inline-block p-2 text-black">This article as {articleinfo.upvotes} upvote(s)</p> 
                        {User 
                        ?
                        <button class="btn btn-outline-success mt-1" onClick={addvote}>{canUpvote ? " upvote" : " Already upvoted"}</button>
                        :
                        <button class="btn btn-outline-primary mt-1"><Link to="/login" style={{textDecoration:"none",color:"white"}}>log in to upvote</Link></button>
                        }
                    </div>
                </div>
                <br></br>
                {article.content.map((paragraph, i) => {
                    return (
                        <p key={i} style={{ color: "blue" }}>{paragraph}</p>
                    )
                })}
                {/* comment section */}
                {User 
                ?<> 
                <AddCommnets articleID={articleId} Settercomment={comment => setArticleInfo(comment)}/> 
                <CommentsList comments={articleinfo.comments} />
                </>
                : <button class="btn btn-outline-primary mt-1"><Link to="/login"style={{textDecoration:"none",color:"black"}}>log in to upvote</Link></button>
                }   
            </div>
        </div>
    )
};
export default ArticlePage;