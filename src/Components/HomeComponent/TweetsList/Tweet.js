import { COMMENTS, KZ_IMG_PATH, LIKES, RETWEETS, SHARE, DELETE } from "../images"

export default function Tweet({tweet, deleteTweet}) {
    console.log(tweet)
    return(
        <div className="mt-3 mx-3">
            <p className='mx-5' style={{fontSize:14, fontWeight:'600'}}>You might like! <span>See more</span></p>
            <div className="d-flex">
                <img src={tweet.img} style={{width: 50, height: 50, borderRadius: 50}}/>
                <div className="mx-3">
                    <p>{tweet.author} <span>{tweet.authorUserName}</span></p>
                    <p >{tweet.content}</p>
                </div>
                <button onClick={()=>deleteTweet(tweet.id)} style={{width: 35, height: 35, border:'none', backgroundColor:'transparent'}}>
                    {DELETE}
                </button>
            </div>
            <div className="d-flex m-auto justify-content-between" style={{width: '80%'}}>
                <div className="d-flex">
                    <div style={{width: 20, height: 20}}>{COMMENTS}</div>
                    <p className="px-1">{tweet.replies}</p>
                </div>
                <div className="d-flex">
                    <div style={{width: 20, height: 20}}>{RETWEETS}</div>
                    <p className="px-1">{tweet.retweets}</p>
                </div>
                <div className="d-flex">
                    <div style={{width: 20, height: 20}}>{LIKES}</div>
                    <p className="px-1">{tweet.likes}</p>
                </div>
                <div className="d-flex">
                    <div style={{width: 20, height: 20}}>{SHARE}</div>
                </div>
            </div>
        </div>

    )
}