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
      <div className='flex justify-center '>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:ml-[30px] lg:justify-normal justify-center ">
          {items.map((post, index) => (
            <div key={index} className="bg-white border rounded-md shadow-md w-[300px]  transition-all duration-150   hover:scale-95  " >

              <div className='relative'><img src={post.images} className="w-full h-[200px] rounded-t-md  object-fit" />
                <button className='absolute top-3 right-2 text-black' onClick={() => toggolewishlist(post.id)}>
                  <FaHeart
                    className={`text-md transition ${wishlist.includes(post.id)
                        ? "text-red-600"
                        : "text-black  "
                      }`}
                  />
                </button>

              </div>
              <div className="p-3 flex flex-col gap-1">
                <p className="text-gray-500 text-sm">Idno: {post.id}</p>
                <h2 className="text-[12px] font-semibold text-gray-800 mt-1 truncate">
                  {post.title}
                </h2>

                <p className="text-gray-500 text-[12px]  truncate"> {post.slug}</p>
                <p className="text-gray-500 text-sm">Price: {post.price}</p>
                <div className='flex justify-between p-3 mt-2 '>
                  <button className='text-black shadow-md text-sm font-bold hover:text-black   border-2 px-3 py-1 rounded-md hover:bg-yellow-400'>Add to cart</button>
                  <button className='text-black text-sm shadow-md font-bold hover:text-black   bg-yellow-600 px-3 py-1 rounded-md hover:bg-yellow-400'>Buy Now</button>
                  </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App