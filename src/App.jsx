import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {fetchapi} from './store/Fetchapi';
import img from './assets/hack2.jpg'
const App = () => {
  const dispatch=useDispatch();
  const {items,status,error}=useSelector((state)=>state.posts);
  useEffect(()=>{
    dispatch(fetchapi())
  },[])
  return (
   <div>
  <h1 className="text-2xl font-bold mb-6 ml-[100px]">
    Using Redux Toolkit Fetching Data from APIs
  </h1>
  <div className="grid grid-cols-3 gap-6 ml-[30px]">
    {items.map((post, index) => (
      <div key={index} className="bg-white border rounded-xl shadow-md  w-[300px] ">
        <img src={img} alt={post.title}className="w-full h-40 object-cover"/>
        <div className="p-4">
          <p className="text-gray-500 text-sm">ID: {post.id}</p>
          <h2 className="text-lg font-semibold text-gray-800 mt-1">
            {post.title}
          </h2>
        </div>
      </div>
    ))}
  </div>
</div>

  )
}

export default App