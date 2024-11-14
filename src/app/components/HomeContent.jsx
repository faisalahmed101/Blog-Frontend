import SidebarWidget from './SidebarWidget'



export default async function HomeContent() {

  const getPosts = await fetch('http://127.0.0.1:8000/api/posts')
  const posts = await getPosts.json()
  console.log(posts);


  return (
    //   {/* <!-- Main Contents --> */}
    <section className="flex flex-col gap-8 px-4 py-20 mx-auto xl:gap-24 xl:grid xl:grid-cols-12 max-w-7xl sm:px-6 lg:px-8 min-h-[100vh]">
      {/* <!-- Posts --> */}
      <section className="flex flex-col gap-8 xl:col-span-8">

        {posts.map((post, index) => (

          <article
            className="w-full rounded-xl p-6 text-white shadow-lg bg-zinc-900/20 ring-1 backdrop-blur-[2px] ring-white/15 space-y-6">
            <div className="flex flex-row items-center justify-between">
              {/* <!-- Category Pill --> */}
              <div>
                <a className="inline-flex gap-0.5 justify-center overflow-hidden text-sm sm:text-base font-medium transition rounded-full py-1 px-3 bg-emerald-400/10 text-emerald-400 ring-1 ring-inset ring-emerald-400/20 hover:bg-emerald-400/10 hover:text-emerald-300 hover:ring-emerald-300"
                  href="/#">{post.category.name}</a>
              </div>

              {/* <!-- Date --> */}
              <p className="text-sm font-semibold sm:text-base text-zinc-400">
                4 months ago
              </p>
            </div>

            {/* <!-- Main Content --> */}
            <div>
              {/* <!-- Article Title --> */}
              <a href="./pages/article.html">
                <h3 className="mb-4 text-xl font-bold md:text-4xl hover:underline decoration-emerald-700">
                  {post.title}
                </h3>
              </a>

              {/* <!-- excerpt --> */}
              <p className="text-base font-medium text-zinc-400 md:text-lg line-clamp-3">
                {post.body}
              </p>
            </div>

            {/* <!-- Card Bottom --> */}
            <div className="flex flex-row items-center justify-between">
              {/* <!-- Author Info --> */}
              <div className="flex items-center gap-2">
                <img className="w-8 h-8 p-0.5 rounded-full ring-1 ring-emerald-500"
                  src="https://avatars.githubusercontent.com/u/176869046?v=4" alt="Al Nahian" />
                <h4>{post.user.name}</h4>
              </div>

              {/* <!-- Read More Link --> */}
              <a className="inline-flex gap-0.5 justify-center overflow-hidden text-base font-medium transition text-emerald-400 hover:text-emerald-500"
                href="./pages/article.html">
                Read more
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="mt-0.5 h-5 w-5 relative top-px -mr-1">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                    d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"></path>
                </svg>
              </a>
            </div>
          </article>


        ))}


      </section>

      <SidebarWidget />
    </section>
  )
}
