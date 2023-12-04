import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import dogHomo from '../assets/pexels-photo-2328863.jpeg';
import dog1 from '../assets/dog+.jpg'
import dog5 from '../assets/dog5.jpg'
import {Link, useNavigate} from 'react-router-dom'
import Spinner from '../components/container/Spinner';
import {useDispatch} from "react-redux"
import authService from '../appwrite/auth';




function Home() {
    const [posts, setPosts] = useState([])
    const [load,setLoader] = useState(false);
    const [nam,setnam] = useState("")
    const dispatch = useDispatch()
   
   
   
    
   
    
   
     useEffect(() => {
      
        const fetchData = async () => {
              setLoader(true)
            const postsData = await appwriteService.getPosts();
            if (postsData) {
              setPosts(postsData.documents);
              setLoader(false);
            
            }

            const userData = await authService.getCurrentUser()
            if(userData){
              setnam(userData.name)
              console.log(userData.name)
            }
            else{
              setnam("")
            }
          };

          fetchData();
    }, [])


   

      
    
    
     
    
   
  
    if (posts.length === 0) {
        return (
           <div className="w-full text-center">
              
                {/*<img className='w-full' src={dogHomo} alt="" 
               />*/}
                <Container>
                

<div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-6">Dog Adoption Site</h1>

        <p className="text-gray-600 mb-4">
          Welcome to our dog adoption site! Here you can put details of any street dog and Anyone who want to adopt can adopt that dog.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sample Dog Card */ }
         <div className="bg-gray-200 p-4 rounded-lg shadow">
            <img
              src={dog5} // Placeholder image, replace with real dog images
              alt="Dog"
              className="w-full h-32 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold">Krish</h2>
            <p className="text-gray-600">Age: 1 years</p>
            <p className="text-gray-600">Breed: Mixed</p>
            <Link to="/signup">
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full">
              Adopt Me
            </button>
            </Link>
          </div>


          <div className="bg-gray-200 p-4 rounded-lg shadow">
            <img
              src= {dogHomo} // Placeholder image, replace with real dog images
              alt="Dog"
              className="w-full h-32 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold">Sheruu</h2>
            <p className="text-gray-600">Age: 4 years</p>
            <p className="text-gray-600">Breed: Mixed</p>
            <Link to= "/signup">
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full">
              Adopt Me
            </button>
            </Link>
          </div>

          <div className="bg-gray-200 p-4 rounded-lg shadow">
            <img
              src={dog1} // Placeholder image, replace with real dog images
              alt="Dog"
              className="w-full h-32 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold">Shwatty</h2>
            <p className="text-gray-600">Age: 2 years</p>
            <p className="text-gray-600">Breed: Mixed</p>
            <Link to= "/signup">
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full">
              Adopt Me
            </button>
            </Link>
          </div>

          {/* Add more dog cards as needed */}
        </div>

        <p className="mt-8 text-gray-600">
          Ready to make a difference? <a href="/signup" className="text-blue-500">Sign up</a> to start your adoption journey.
        </p>
      </div>
    </div>
                   
                </Container>
                
            </div> 
         
        )                             
    }
    return (
       load? (<Spinner/>) : (
           <div className='w-full py-8'>
            <h1 className='text-3xl bg-slate-400 mb-2'>Hii  {nam}!!, wanna adopt me?</h1>
            <Container>
                <div className='flex flex-wrap'>
               
                    {posts.map((post) => (
                         
                        <div key={post.$id} className='p-2 w-1/4' >
                             
                            <PostCard   {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
       )
    )
}

export default Home