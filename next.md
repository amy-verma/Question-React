1. Next js is the React framework that enables the features like server-side rendering(SSR),
   Static site generation(SSG),file-based routing and API routes out of the box.
2. It helps to build fast and SEO freindly React application.

---------------------------------------------

2. What is the difference between SSR and SSG in Next.js?
   -SSR(Server side rendering): The page is generated on every request using getServerSideProps()

-   SSG(Static site Generation): The page is generated at build time using getStaticProps()

SSG is faster for static content, SSR is better for frequently changing data.

-------------------------------

3.  What is file-based routing in Next.js?
    -Next.js user pages/folder to create routers automatically

-   pages/index.js -> /
-   pages/about.js ->/about
-   pages/blog/[id].js ->/blog/133

---------------------------------------------

4.  How do you create a dynamic route in Next.js?
    step 1. pages/blog/[id].js

---

## step 2. Then access the id in the component:

import {useRouter} from 'next/router';

const BlogPost=()=>{
const router=useRouter();
const {id}=router.query;

return(

<h1>Blog post id:{id}</h1>  
)
}

---------------------------------------------------

5. What is getStaticProps and when do you use it?

-getStaticProps is next.js function that allows you to fetch data at build time for static generation
    use it when

1. the data does not change often.
2. You want fast performance.
3. SEO Important

export async function getStaticprops(){
const res=await fetch("");
const data=await res.json()
retrun {props:{data}}
}

------------------------------------------------
6. When would you use getServerSideProps?
Hint: Fetch data on every request (SSR).
1. When data changes frequently
- live acores,stock prices
2. User Specific data
- Ex user dashboard, auth based content
3. SEO is important but data must be real time
- News article, trending post

export const function getServerSideProps(){
    const res=await fetch("");
    const data=await res.json()
    cosnole.log(data)

    return{
        props:{data}
    }
}
--------------------------------------------------------------
7. What is getInitialProps and why is it less common now?
Hint: Legacy method runs on both server and client; superseded by more granular APIs.
- getInitialProps is a legacy data-fetching method in Next.js 
- it is used fetch data before page is rendered on both the server side  and the client.

- It was the original way to do SSR/SSG-style data fetching in Next.js.

--Example--
const Blog = ({ posts }) => {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

Blog.getInitialProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return { posts };
};

export default Blog;

Question. Why is it less common now?
 Because it has some downsides:
 1. Runs on both server side and the client site, which can lead to unexpected behaviour
 2. Does not support static generation
 3. Disable automatic static optimization
 4. Make performance and caching harder to maintain
-------------------------------------------------------------------
8. How do API routes work?
Hint: Files under pages/api become serverless endpoints
- Any files inside the /pages/api folder becomes an API endpoint-also called serverless function
Imp- These files run only on the server,never in the browser

// File: pages/api/hello.js

export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from API route!' });
}

Request Types (GET, POST, etc.)
API routes have access to the request (req) and response (res) just like in Express.

export default function handler(req,res){
    if(req.method===="POST"){
        const data=req.body;
        res.status(201).json({success:true,data})
    }else{
        res.status(405).json({error:"Method not allowed"})
    }
} 

 Use Cases

 You can use API routes to 
 1. Handle form submission
 2. connect to DB(Mongo db,firebase)
 3. Call third party api security
 4. Protect API key
--------------------------------------------------------------------
9. How does the <Link> component optimize navigation?
Hint: Prefetches linked pages and enables client‑side transitions.
 1. Client-Side Navigation
 - Instead of doing full page reload (like traditional anchoe tag),<Link> uses JS to transition between rhe pages
 2. That means page does not reload - only the new content is updated  keeeping the app feeling smooth like SPA

  2. Prefetching
  1. When a <Link> is visible in the viewport NJS automatically prefetches the the linked page from the background
  2. So when the user clicks, the page loads instantly, because it’s already been downloaded!

  import Link from 'next/link';

  export default function Home(){
    retrun(
        <Link href="/about">Hello</Link>
    )
  }
----------------------------------------------------------------
10. What benefits does the built‑in <Image> component provide?
Hint: Automatic resizing, format selection, lazy‑loading, and CDN support.

Benefits of the <Image> Component in Next.js
1. Automatic Resizing - based on device size
2. format selection - Converts image to modern format like WebP
3. Lazy loading -  Loads image only when they enter the viewport
4. CDN Support 
5. Smart Caching - Images are cached and served efficiently
----------------------------------------------------------------------------
11. How are environment variables handled?
Hint: .env.local + NEXT*PUBLIC* prefix for client exposure; loaded via process.env.
1. Where do you define environment variables?
You store them in files like:
1. .env.local->Best for local developement
2. .env.production->For production
3. .env -> shared across environment

 2. How do you access them in code?
 // This is accessible in both client and server (because of NEXT_PUBLIC_)
const apiurl=process.env.NEXT_PUBLIC_API_URL

// This is only accessible on the server side
const secret = process.env.SECRET_API_KEY;

4. Loading & Usage
Next.js automatically loads variables from .env* files at build time using process.env.
You don't need to install dotenv — Next.js handles that internally.
--------------------------------------------------------------------------------
12. How do you customize 404 and error pages?
Hint: Add pages/404.js and pages/\_error.js (or \_error.tsx).

 10.How do you handle 404 pages in Next.js?
 - You can create a custom 404 page by adding a file:
 pages/404.js
------------------------------------------------------------------------
13. What are common deployment targets for Next.js?
Hint: Vercel (first‑class), Netlify, AWS, custom Node server—build → .next output.
-------------------------------------------------------------------------------
14. Deep‑dive into Incremental Static Regeneration (ISR).
Hint: Static pages can be re‑built on‑demand using a revalidate interval.
1. It lets you to update static pages without rebuilding the whole site
Steps
a. It pre-render the page at build time(line getStaticProps)
b. Then,after a setInterval, it rebuild the page in background
c. The new version replaces the old one seamlessly 

How to use it?
You just add a revalidate key to your getStaticProps:
export const getStaticProps=async()=>{
    const res = await fetch('https://api.example.com/posts');
  const data = await res.json();

  return{
    props:{data},
    revalidate:10,// Regenerate the page every 10 seconds (on-demand)
  }
}

How it works — Behind the scenes
1. At build time: Page is generated and cached
2. First request after revalidate time (e.g., 10s):
  1. The old page is shown
  2. A background regeneration happens on the server.

3. Next request: Sees the fresh version of the page.

Use case examples
1. Blog Posts -Show content imediately,updates in the bckground
2. Product Listing - Updates stock prices or discounts every mins
3. E-commerce pages	Regenerate product detail pages as they change
---------------------------------------------------------------------------------
15. App Router vs. Pages Router in Next.js
Compare the App Router (Next 13+) vs. the Pages Router.
Hint: App uses React Server Components, nested layouts, and streaming.

Feature	                   Pages Router (pages/)                	App Router (app/)
📁 Directory	            Uses pages/ folder          	        Uses app/ folder
⚛️ Component Model	    React Client Components         	    React Server Components (by default)
🧩 Layout System	No native layout support	                 Supports nested layouts (layout.js)
📦 Data Fetching	getStaticProps, getServerSideProps, etc.	    fetch() in Server Components + generateMetadata()
⏱ Rendering	                Full page pre-render	                Supports streaming with Suspense
🚀 Routing	                File-based, static	                File-based, with nested routing
🧠 Middleware	        Limited to _middleware.js	                More powerful with server logic in components
📄 Custom Error Pages	404.js, _error.js	                        not-found.js, error.js inside folders
⚙️ Client/server control	Manual (all components are client-side) 	Use "use client" to make Client Components
---------------------------------------------------------------------------------------
16. When and why to use Server Components vs. Client Components?
Hint: Server for data‑heavy, no‑JS UI; Client for interactivity and browser APIs.
1. What Are They?
 Server Components
- Runs only on server
- Don't incluede any client side JS
- can fetch data directly
- sent as html superfast

Client Components
- Runs in browser 
- Can use interactivity, state, effects
- Include JS bundles

How to declare Client Components?

"use client";//keyword

// app/components/Counter.js
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}

-------------------------------------------------------------------------------
17. What can you achieve with middleware.ts and Edge Functions?
Hint: Run code at the edge before routing—for auth, redirects, rewrites, headers.

What is middleware.ts?
- It's a special file that lets you run custom logic before a request reaches a route/page.
- Runs at the Edge, super fast
- Perfect for things like:
  Authentication
  A/B TESTING
  Rewrites/redirects
  Header manipulation

   Place it in the root of your app:
   middleware.ts

What is an Edge Function?
  - Edge Functions are serverless functions that run at the closest CDN location to the user.
  - They power middleware, but can also be used independently in custom APIs.
  - Benefit: Low latency, runs globally

---------------------------------------------------------------------------------------
6. What are API Routes in Next.js?

-   API routes let you to create backend endpoints in the pages/api directory

export default function handler(req,res){
res.status(200).json({ message: 'Hello World' });
}

-----------------------------------------------------------

7.  How do you do client-side navigation in Next.js?

-   use the built-in Link components from next/link:

import Link from 'next/link';

 <Link href="/about">Go to About</Link>
 -----------------------------------------
 8. What is the use of getStaticPaths in Next.js?
 - used along with getStaticProps for dynamic static generation(SSG) of pages like /blogs/[id].js
 ---------------------------------------------------
 9. What is hydration in Next.js?
 - Hydration is when the static HTML generated by the server becomes interactive by attaching React event listeners on the client side.
 -----------------------------------------------


Next.js

1. Is a framework build on the top of react
2. Gives a complete full stack solution (frontend + backend)
3. Built in routing,SSR,(SSC)Static site generation and API Routes
4. Better SEO Out of the box
5. Optimize performance with image optimization,Incremental Static Regeneration(ISR)

🧩 Built-in features:

1. File Based routing(no need for React router)
2. getServerSideProps, getStaticProps for data fetching
3. API Routes(like backendendpoints)
4. Works great with typescript

---

---

4. Catch-All Routes
   For routes like /docs/a/b/c, use [...param].js:

import {useRouter} from 'next/router';

const Docs=()=>{
const router=useRouter();
const {slug}=router.query;

    return(
        <pre>{JSON.stringify(slug)}</pre>
    )

}

---

General Questions
What is Next.js?
Hint: A React framework that adds SSR, SSG, routing, and more out of the box.
Explain CSR (Clinet side Rendering)
Explain SSR (Server side Rendering)
Explain SSG(Statice site generation)
Explain ISR (Incremental Static Regenertion)
Explain diff CSR vs. SSR vs. SSG vs. ISR.
Hint: Where/when rendering happens (browser vs. server vs. build vs. on‑demand).
How does file‑system routing work in Next.js?
Hint: /pages folder → URL paths; dynamic routes via [param] and catch‑alls via [...param].
What’s the role of getStaticProps?
Hint: Fetch data at build time for static generation.
When would you use getServerSideProps?
Hint: Fetch data on every request (SSR).
What is getInitialProps and why is it less common now?
Hint: Legacy method runs on both server and client; superseded by more granular APIs.
How do API routes work?
Hint: Files under pages/api become serverless endpoints.
How does the <Link> component optimize navigation?
Hint: Prefetches linked pages and enables client‑side transitions.
What benefits does the built‑in <Image> component provide?
Hint: Automatic resizing, format selection, lazy‑loading, and CDN support.
How are environment variables handled?
Hint: .env.local + NEXT*PUBLIC* prefix for client exposure; loaded via process.env.
How do you customize 404 and error pages?
Hint: Add pages/404.js and pages/\_error.js (or \_error.tsx).
What are common deployment targets for Next.js?
Hint: Vercel (first‑class), Netlify, AWS, custom Node server—build → .next output.
Advanced Questions
Deep‑dive into Incremental Static Regeneration (ISR).
Hint: Static pages can be re‑built on‑demand using a revalidate interval.
Compare the App Router (Next 13+) vs. the Pages Router.
Hint: App uses React Server Components, nested layouts, and streaming.
When and why to use Server Components vs. Client Components?
Hint: Server for data‑heavy, no‑JS UI; Client for interactivity and browser APIs.
What can you achieve with middleware.ts and Edge Functions?
Hint: Run code at the edge before routing—for auth, redirects, rewrites, headers.
How would you integrate a custom Express/Koa server?
Hint: Use next() in a Node server to handle Next.js pages alongside custom routes.

---

General Questions
What is Next.js?
Hint: A React framework that adds SSR, SSG, routing, and more out of the box.
Explain CSR (Clinet side Rendering)
Explain SSR (Server side Rendering)
Explain SSG(Statice site generation)
Explain ISR (Incremental Static Rege nertion)
Explain diff CSR vs. SSR vs. SSG vs. ISR.
Hint: Where/when rendering happens (browser vs. server vs. build vs. on‑demand).
How does file‑system routing work in Next.js?
Hint: /pages folder → URL paths; dynamic routes via [param] and catch‑alls via [...param].
What’s the role of getStaticProps?
Hint: Fetch data at build time for static generation.
When would you use getServerSideProps?
Hint: Fetch data on every request (SSR).
What is getInitialProps and why is it less common now?
Hint: Legacy method runs on both server and client; superseded by more granular APIs.
How do API routes work?
Hint: Files under pages/api become serverless endpoints.
How does the <Link> component optimize navigation?
Hint: Prefetches linked pages and enables client‑side transitions.
What benefits does the built‑in <Image> component provide?
Hint: Automatic resizing, format selection, lazy‑loading, and CDN support.
How are environment variables handled?
Hint: .env.local + NEXT*PUBLIC* prefix for client exposure; loaded via process.env.
How do you customize 404 and error pages?
Hint: Add pages/404.js and pages/\_error.js (or \_error.tsx).
What are common deployment targets for Next.js?
Hint: Vercel (first‑class), Netlify, AWS, custom Node server—build → .next output.

Advanced Questions

Deep‑dive into Incremental Static Regeneration (ISR).
Hint: Static pages can be re‑built on‑demand using a revalidate interval.
Compare the App Router (Next 13+) vs. the Pages Router.
Hint: App uses React Server Components, nested layouts, and streaming.
When and why to use Server Components vs. Client Components?
Hint: Server for data‑heavy, no‑JS UI; Client for interactivity and browser APIs.
What can you achieve with middleware.ts and Edge Functions?
Hint: Run code at the edge before routing—for auth, redirects, rewrites, headers.
How would you integrate a custom Express/Koa server?
Hint: Use next() in a Node server to handle Next.js pages alongside custom routes.
