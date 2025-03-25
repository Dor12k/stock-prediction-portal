


import React, {useEffect} from 'react'
import axiosInstance from '../../axiosInstance'


const Dashboard = () => {

    const accessToken = localStorage.getItem('access_token')

    useEffect(()=>{
        const fetchProtectedData = async () =>{
            try{
                const response = await axiosInstance.get('/protected-view/', {
                    Authorization: `Bearer ${accessToken}`
                }
            );
                console.log('Success: ', response.data);
            }catch(error){
                console.error('Error fetching data:', error)
            }
        }
        fetchProtectedData();
    }, [accessToken]) // added accessToken


  return (

    <div className='text-light container'>

        Dashboard
      
    </div>
  )
}

export default Dashboard
