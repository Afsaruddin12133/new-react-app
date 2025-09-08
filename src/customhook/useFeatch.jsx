import React, { useEffect, useState } from 'react'

export default function useFeatch(url) {

  const [products,setProducts] = useState([])
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    setLoading(false)
    try{
      fetch(url)
      .then(res => res.json())
      .then(products => setProducts(products))
    }catch{
      error(error => setError(error))
    }
    
    
  },[])

  return {products,error,loading}
}
