import Link from "next/link";

export default async function Home() {
  const posts=await fetch("https://jsonplaceholder.typicode.com/posts", {cache:"no-store"});

  const postData=await posts.json();
  return (
    <main>
      <h1>hi from home page</h1>
      <span className="font-bold">current time {new Date().toLocaleTimeString()}</span>
      <h2>
         {
          postData.map(post=>(
            <div key={post.id}>
              <Link href={`/posts/${post.id}`} className="list-item">
              {  post.title}
              </Link>
            </div>
          ))
         }
      </h2>
    </main>
  );
}
