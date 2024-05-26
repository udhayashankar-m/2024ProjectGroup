import './App.css';
import HomePage from './pages/homepage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticleListPage from './pages/ArticleListPage';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './pages/navbar';
import NotFound from './pages/NotFoundPage';
import LoginPage from './pages/login';
import CreateAccount from './pages/createAccount';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <div className="App">  
        <div id="page-body">
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/articles' element={<ArticleListPage/>}/>
            <Route path='/articles/:articleId' element={<ArticlePage/>}/>
            <Route path='/login' element={<LoginPage/>}/>  
            <Route path='/createAccount' element={<CreateAccount/>}/>  
            <Route path='*' element={<NotFound />}/> 
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
