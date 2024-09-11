
const PostInfoPage = async({params}) => {
console.log(params)
const post =await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

const postInfo=await post.json()
    return (
    <div className="">PostInfoPage {params.id}
    <div className="font-sans font-light"> {postInfo.body}</div>
    </div>
  )
}

export default PostInfoPage