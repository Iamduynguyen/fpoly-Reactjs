import React from 'react'

const NewsItem = (props) => {
    console.log(props.post);
    return (
        <div className="col-4">
            <div className="card">
                <img
                    src="http://picsum.photos/400/200"
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">{props.post.title}</h5>
                    <button onClick={()=>props.removeItem(props.post.id)}>delete</button>
                </div>
            </div>
        </div>
    )
}

export default NewsItem