import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from "axios"
function Github() {
    // const data = useLoaderData()
    const [data, setData] = useState([])
    const githubApi = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/Mohit13333');
        setData(response.data); 
      } catch (error) {
        console.error('Error fetching data:', error); 
      }
    };
  
    useEffect(() => {
      githubApi();
    }, []);
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Mohit13333')
    return response.json()
}