import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Text from './Components/Text/Text';
import Friends from './Components/Friends/Friends';
import FriendDetails from './Components/FriendDetails/FriendDetails';
import Posts from './Components/Posts/Posts';
import PostDetails from './Components/PostDetails/PostDetails';



// 3 things to be done to setup react-router

//1
import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";



//2 (basic of router)
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>
//     // compo also can be used here
//   },

//   {
//     path: "/about",
//     element: <About></About>,
//     // errorElement: <ErrorPage></ErrorPage>
//   },

//   {
//     path: "/about/aboutall",
//     element: <div>This is the aboutall page</div>
//   },

//   {
//     path: "/contact",
//     element: <Contact></Contact>
//   },


// ]);
// tumi ekhane direct set kore diccho kon path e gele ki dekhabo




// Nested-routing
const router = createBrowserRouter([
  {
    // ekhane home holo amr main component shekhane ami outlet r opore shob child r jonno ja fixed ta likhbo.root e shobr jonno common jinish gulo likhbo
    
    path: '/',
    element: <Home></Home>,
    children: [

      // defaul/akbare root page e ki dekhabe shetakeko alada component e niye gelam
      {
        path: '/',
        element: <Text></Text>
        // ekhane body/main component r kaj gulo show kora jete pare first page e 
      },



      //*** total 3 ta component lagbe dynamic data show koranor  jonno
      // 1. for AllData (like users)     ekhane shob data k map kore singledata compo t padhiye dibo
      // 2. for singleData (like user)    ekhane single data guloke UI t dekhabo. and singledataDetails e dynamically id pathabo
      // 3.for dynamic singleDataDetails  dynamic id ta get kore singleDetails r jonno arek compo t dekhabo

      //*** R route lagbe 2 ta posts(first to fetch all data then send to posts compo) and  postId(for dynamic one)



      // static dataload
      {
        path: 'friends',
        element: <Friends></Friends>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        // Friends component e jeye useLoaderData() hook diye data recieve kore then dekhao
        // jokhon e ami ai path e jabo ai data load hoye friends component pathaya dibe
      },



      // dynamic route and dynamic data load
      {
        // friendId ta k Link theke dynamic bhabe pathabo jeta pathabo shei link ei jaabe
        path:'friend/:friendId',
        element:<FriendDetails></FriendDetails>,
        
        // loader:({params})=> console.log(params.friendId) 
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
        
        // FriendDetails e data ta get korlei hobe
        // ekhane friendId akta parameter jeta load korle akta object r vhitore ai parameter ta k dibe
        
      },






      // recap another example of dynamically data showing
      // 2 bar fetch r jonno 2ta path niye korte hobe 1st shob datar jonno fetch 2nd ta hobe dynamic & single data
      {
        path:'/posts',
        element:<Posts></Posts>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts')

        // data gula recieve korba ai element a jeyee by useloaderData() hooks
      },


      // for single post(dynamic routing)
      {
        path:'/post/:postId',
        element:<PostDetails></PostDetails>,
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)

        // dynamic take load korte hole param diye fetch korte hobe
        // dynamic route e id wala link k fetch kore receive kore dekhabo abar arek component e 
      },





      {
        path: '/about',
        element: <About></About>,
      },

      {
        path: '/contact',
        element: <Contact></Contact>
      },



      // for error page 404 because of any unwanted wrong link
      // * diye shesh route kora hoy mane ai link nai shob check korar por
      {
        path: '*',
        element: <div>4444444444440000044444444</div>
      },



    ]
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* 3     */}
    <RouterProvider router={router} />

  </React.StrictMode>,
)
