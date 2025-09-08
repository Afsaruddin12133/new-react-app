import React from 'react'
import useFeatch from './../customhook/useFeatch';
import { Link } from 'react-router-dom';
import Spinner from '../component/Spinner';

export default function Home() {

  const {products,error,loading} = useFeatch('https://fakestoreapi.com/products');
  if (loading) return <Spinner/>
  if (error) return `Error : ${error}`
  
  return (
    <div>
      <h1 className='text-2xl font-bold text-gray-800'>All Product name are listed below</h1>
        <ul className="space-y-2">
  {products.map((product) => (
    <li 
      key={product.id} 
      className="font-medium text-gray-700 hover:text-blue-600 transition"
    >
      <Link 
        to={`/product/${product.id}`} 
        className="block px-4 py-2 rounded-lg hover:bg-gray-100"
      >
        {product.title}
      </Link>
    </li>
  ))}
</ul>

    </div>
  )
}
