import React, { useState } from 'react'
import useFeatch from '../customhook/useFeatch';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../component/Spinner';

export default function Product() {
    const {products,error,loading} = useFeatch('https://fakestoreapi.com/products');
    const [load, setLoad] = useState(true);
    const {id} = useParams()
    const navigate = useNavigate()

    const product = products.find(pro => pro.id === Number(id))
    console.log(product);
    
    if (loading) return <Spinner/>
    if (error) return `Error : ${error}`
  return (
   <div className="container mx-auto p-6">
  <div className="flex flex-col md:flex-row items-center gap-8 border rounded-2xl shadow-lg p-6 bg-white">
    {/* Product Image */}
    <div className="w-full md:w-1/2 flex justify-center">
    {load && <Spinner />}
      <img
        src={product?.image}
        alt={product?.title}
        className="max-w-sm w-full object-contain rounded-xl"
        onLoad={() => setLoad(false)}
        onError={() => setLoad(false)}
      />
    </div>

    {/* Product Details */}
    <div className="w-full md:w-1/2 flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-gray-800">
        {product?.title}
      </h1>
      <p className="text-gray-600">{product?.description}</p>
      <p className="text-xl font-semibold text-green-600">
        Price: ${product?.price}
      </p>

      <div className="flex gap-4 mt-4">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
          Buy Now
        </button>
        <button className="px-6 py-2 border border-gray-400 rounded-xl hover:bg-gray-100 transition">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-xl mt-10 shadow hover:bg-blue-700 transition"
          type='button'
          onClick={()=> navigate(-1)}
          >
          Go Back
        </button>
</div>

  )
}
