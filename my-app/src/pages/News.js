import React from 'react'
import NewsItem from '../component/NewItem';

const News = (props) => {
    return (
        <div>
            <h2>Tin tuc hoc tap</h2>
            <div className="row">
                {props.news.map(function (post, index){
                    return <NewsItem key={index} post={post} {...props}/>
                })}
            </div>

        </div>
    )
}

export default News
