import React from "react";
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'
import { useEffect, useState } from "react";

function PostCard({$id, title, featuredImage}) {

   
 
  

    
  return (

    <Link to={`/post/${$id}`}>
    <div className='w-full bg-gray-100 rounded-xl p-4 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105'>
      <div className='relative w-full mb-4 overflow-hidden rounded-xl'>
        <img
          src={appwriteService.getFilePreview(featuredImage)}
          alt={title}
          className='object-cover w-full h-48 rounded-xl'
        />
      </div>
      <h2 className='text-xl font-bold'>{title ? title : 'nhi hai'}</h2>
    </div>
  </Link>

   

  
  )
}


export default PostCard