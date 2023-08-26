import React from 'react'

const commentsData = [
    {
        name:"Pratik",
        text:"asdfasdfasdf, asdf asdf",
        replies: [],
    },
    {
        name:"Pratik",
        text:"asdfasdfasdf, asdf asdf",
        replies: [
            {
                name:"Pratik",
                text:"asdfasdfasdf, asdf asdf",
                replies: [{
                    name:"Pratik",
                    text:"asdfasdfasdf, asdf asdf",
                    replies: [{
                        name:"Pratik",
                        text:"asdfasdfasdf, asdf asdf",
                        replies: [{
                            name:"Pratik",
                            text:"asdfasdfasdf, asdf asdf",
                            replies: [],
                        },],
                    },],
                },],
            },
            {
                name:"Pratik",
                text:"asdfasdfasdf, asdf asdf",
                replies: [],
            },
            {
                name:"Pratik",
                text:"asdfasdfasdf, asdf asdf",
                replies: [],
            },
        ],
    },
    {
        name:"Pratik",
        text:"asdfasdfasdf, asdf asdf",
        replies: [],
    },
    {
        name:"Pratik",
        text:"asdfasdfasdf, asdf asdf",
        replies: [],
    },
    
];

const Comment = ({data}) => {
    const {name, text, replies} = data;

    return <div className='flex shadow-sm bg-gray-100 pl-5 ml-2'>
        <img className='w-8 h-8' alt = "user" src="https://freepngimg.com/thumb/youtube/62644-profile-account-google-icons-computer-user-iconfinder.png" />
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>;
}

const CommentsList = ({comments}) => {

    return  comments.map((comment,index) => (

            <div>
            <Comment key ={index} data ={comment} />
            <div className="pl-5 border border-l-black ml-5">
                <CommentsList comments={comment.replies} />
            </div>
            </div>
            ))
       
}

const CommentsContainer = () => {
  return (
    <div classname="m-5 p-2">
        <h1 className='text-2xl font-bold pl-5'>Comments:</h1>
        <CommentsList  comments = {commentsData} />
    </div>
  )
}

export default CommentsContainer