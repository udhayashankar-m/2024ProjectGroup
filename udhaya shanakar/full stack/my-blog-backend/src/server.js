import express from "express"
import fs from "fs";
import admin from "firebase-admin";
import { db,connectToDb} from "./db.js";
import path from "path";
import 'dotenv/config';

// this part for production environment-------------     
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
//ending --------------------------------------------

const credentials = JSON.parse(
    fs.readFileSync('./credentials.json')
);

admin.initializeApp({
    credential:admin.credential.cert(credentials),  
})

const app = express();
app.use(express.json());

//this part for production environment-----------------
app.use(express.static(path.join(__dirname,"../build")));
app.get(/^(?!\/api).+/,(req,res)=>{
    res.sendFile(path.join(__dirname,'../build/index.html'))
})
//-----------------------------------------------------

app.use(async (req,res,next)=>{

    const {authtoken} = req.headers;
    if(authtoken){   
    try{
        req.user = await admin.auth().verifyIdToken(authtoken)
    }
    catch(e){
        return res.sendStatus(400)
    }
    }
    req.user = req.user || {};
    next();
})

app.get("/api/articles/:name",async(req,res)=>{
    const {name} = req.params;
    const {uid} = req.user;

    const article = await db.collection("articles").findOne({name});
    if(article){
        const upvotesIds = article.upvotesIds || [];
        article.canUpvote = uid && !upvotesIds.includes(uid);
        res.json(article);
    }
    else{
        res.sendStatus(404);
    }
})

app.use(async (req,res,next)=>{
    if(req.user){
        next();
    }
    else{
        res.sendStatus(401);
    }
})


app.put("/api/articles/:name/upvotes",async (req,res)=>{
    const {name} = req.params;
    const {uid} = req.user // new line

    const article = await db.collection("articles").findOne({name});//line alter to up
    
    if(article){
        const upvotesIds = article.upvotesIds || [];
        const canUpvote = uid && !upvotesIds.includes(uid);

    if(canUpvote){
        await db.collection("articles").updateOne({name},
        {$inc:{upvotes:1},
        $push:{upvotesIds:uid}
        });
    }

    const updatedArticle = await db.collection("articles").findOne({name});//line alter to up
    res.json(updatedArticle);
}   
    else{
        res.send("the article does\'t exist");
    }   
}); 
 

app.post("/api/articles/:name/comments",async (req,res)=>{
    const {name} = req.params
    const {text} = req.body;
    const {email} = req.user; 

    await db.collection("articles").updateOne({name},{$push:{comments:{postedby:email,text}}});
    const article =await db.collection("articles").findOne({name})
    if(article){
        res.json(article)
    }
    else{
        res.sendStatus(404)
    }
})

const PORT = process.env.PORT || 8000; 

connectToDb(()=>{
    console.log("connecting react-blog-db database successfully");
    app.listen(PORT,()=>{
        console.log(`server is listening on port ${PORT}`);
    })
});
