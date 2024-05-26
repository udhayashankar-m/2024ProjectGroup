const CommentsList = ({ comments }) => (
    <div class="container">
        <div className="row">
            <div className="col">
                <h3>comments</h3>
            </div>
        </div>
        <div className="row">
            {comments.map((comment, i) => (
                <div key={i} class="col-sm-6 col-12 g-3 border rounded p-2 text-center text-lg-start">
                    <h4>{comment.postedby}</h4>
                    <p>{comment.text}</p>
                </div>
            )
            )}
        </div>
    </div>
);


export default CommentsList;