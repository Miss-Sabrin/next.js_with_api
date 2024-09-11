import Link from "next/link"

const List = ({postData}) => {
  return (
    <div className=" mt-8 flow-root">
        <div className="mx-4 -my-2 overflow-x-auto sm:6 lg:mx-8">
            <div className=" inline-block min-w-full py-2 align-middle sm:px-2 lg:px-8">
                <table className="min-w-full divide-y divide-grey-300 ">
                    <thead>
                        <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left">Id</th>
                            <th scope="col" className="px-3 py-3 text-left text-sm font-semibold text-gray-900">Title</th>
                            <th scope="col" className="px-3 py-3 text-left text-sm font-semibold text-gray-900">Body</th>
                            <th scope="col" className="relative py-3 ol-5 pr-4 sm:pr-0">
                              <span className="sr-only">Edit</span>
                            </th>

                        </tr>
                    </thead>
                    <tbody className="divide-y divide-grey-200">

                      {
                         postData.map(post=>(
                          <tr>
                            <td className="whitespace-normal py-4 pl-4 pr-3 text-sm font-medium text-grey-900 m:pl-0">{post.id}</td>
                            <td className="whitespace-normal py-4 pl-4 pr-3 text-sm font-medium text-grey-900 m:pl-0">{post.title}</td>
                            <td className="whitespace-normal py-4 pl-4 pr-3 text-sm font-medium text-grey-900 m:pl-0">{post.body}</td>
                            <td className="space-x-4 relative  whitespace-normal py-4 pl-4 pr-3 text-sm font-medium text-grey-900 m:pl-0">
                            <Link href={`/posts/${post.id}`} className="text-indigo-600 hover:text-indigo-700">
                            Edit
                            {  post.name}
                            </Link>
                            </td>

                          </tr>

                         ))
                      }

                    </tbody>

                </table>

            </div>

        </div>
   
         {/* {
          postData.map(post=>(
            <div key={post.id}>
              <Link href={`/posts/${post.id}`} className="list-item">
              {  post.title}
              </Link>
            </div>
          ))
         } */} 
    </div>
  )
}

export default List