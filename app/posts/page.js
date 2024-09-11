import Link from 'next/link';
import List from './_components/List';

const PostsPage = async() => {
    const posts=await fetch(`http://localhost:3000/api/post`, {cache:"no-store"});

    const postData=await posts.json();
  return (
    <div className='px-4 sm:px-6 lg:px-8 mt-10'>
        <div className='sm:flex sm:items-center'>
            <div className='sm:flex-auto'>
                <h1 className='text-base font-semibold leading-6 text-gray-900'>Post</h1>
                <p className='mt-2 text-sm text-gray-700 '> Alist of all posts from the json file</p>

            </div>
            <div className=' mt-4 sm:ml-16 sm:mt-0 sm:flex-none'>
                <Link 
                type='button'
                className=' block rounded-md bg-rose-600 px-5 py-2 text-center 
                text-sm font-semibold text-white shadow-sm hover:bg-rose-500 
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600
                '
                
                href={'/post/new'}>Add post</Link>

            </div>

        </div>
          <List postData={postData}/>
    </div>
  )
}    

export default PostsPage