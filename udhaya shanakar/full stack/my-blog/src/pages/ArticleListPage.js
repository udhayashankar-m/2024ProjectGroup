import Articles from "./Article-content";
import ArticleList from "../componets/ArticlesList";


const ArticleListPage = ()=>{
    return (
        <div className="container bg-warning mt-3">
        <h1 className="text-center border-bottom border-3 border-black ">Articles</h1>
        <ArticleList Articles={Articles}/>
        </div>
    );
}
export default ArticleListPage;