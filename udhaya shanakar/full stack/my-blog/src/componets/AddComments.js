import { useState } from "react"
import axios from "axios";
import useUser from "../hooks/useUser";

const AddCommnets = ({articleID,Settercomment})=>{

    const [Name,SetName] = useState("");
    const [Comment,SetComment] = useState("");

    const {User} = useUser();

    const addcomments = async (e)=>{
        e.preventDefault();
        const token = User && await User.getIdToken();
        const headers = token ? {authtoken:token} : {};
        const response = await axios.post(`/api/articles/${articleID}/comments`,{
            postedby:Name,
            text:Comment
        },{headers,})
        const NewUpdatedcomments = response.data;
        Settercomment(NewUpdatedcomments)
        SetName("")
        SetComment("");
    }
    return(
        <div>
            <h3>Add a comment</h3>
            {User && <p>your are posting as {User.email}</p>}
            <form action="#">
                .<div class="form-floating mb-3">
                    <textarea rows="5" className="form-control"
                    id="textarea"
                    value={Comment}
                    onChange={e => SetComment(e.target.value)}
                    required
                    ></textarea>
                    <label htmlFor="textarea">comments</label>
                </div>
                <button class="btn btn-primary" onClick={addcomments}>Add comment</button>
            </form>
        </div>
    )
}

export default AddCommnets