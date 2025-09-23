import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchapi } from './store/Fetchapi';
import { FaHeart } from "react-icons/fa";
const App = () => {
  const [wishlist, setWishlist] = useState([])
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(fetchapi())
  }, [])
  const toggolewishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(itemId => itemId !== id))
    } else {
      setWishlist([...wishlist, id])
    }
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 lg:ml-[40px] lg:mt-3  ml-4">
        Using Redux Toolkit Fetching Data from APIs
      </h1>
      <div className='flex justify-center'>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:ml-[30px] lg:justify-normal justify-center ">
          {items.map((post, index) => (
            <div key={index} className="bg-white border rounded-xl shadow-md w-[300px] lg:h-[400px] h-[410px] " >

              <div className='relative'><img src={post.images} className="w-full h-[260px] rounded-t-xl  object-fit" />
                <button className='absolute top-3 right-2 text-black' onClick={() => toggolewishlist(post.id)}>
                  <FaHeart
                    className={`text-2xl transition ${wishlist.includes(post.id)
                        ? "text-red-600"
                        : "text-black  "
                      }`}
                  />
                </button>

              </div>
              <div className="p-3 flex flex-col gap-">
                <p className="text-gray-500 text-sm">Idno: {post.id}</p>
                <h2 className="text-[12px] font-semibold text-gray-800 mt-1 truncate">
                  {post.title}
                </h2>

                <p className="text-gray-500 text-[12px]  truncate"> {post.slug}</p>
                <p className="text-gray-500 text-sm">Price: {post.price}</p>
                <div className='flex justify-center bg-blue-500 px-1 py-1 rounded-md hover:bg-blue-400 '><button className='text-white font-semibold hover:text-black '>View details</button></div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App