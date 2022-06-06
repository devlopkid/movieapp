import React, { useEffect, useState } from 'react'
import "./Banner.css"
import "../../slider.css"
import axios from '../../axios'
import { API_KEY,imageurl } from '../Constants/Constance'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
function Banner() {
  const[movie,setMovie]=useState([])
  useEffect(()=>{
    axios.get(`/trending/all/week?api_key=${API_KEY}`).then((response)=>{
      console.log(response.data.results)
      setMovie(response.data.results)
    })
  },[])

 let bannerImage= movie.map((item)=>{
   
    return(
      <>
      {/* <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      > */}
         <SwiperSlide>
         <div className='bann'>
      <img src={movie ? imageurl+item.poster_path :""} alt="" /> 
     
      {/* <div className="banner-content col-12"> */}
    <div className='banner-title'>
    <h1 className='movie-title'>{movie ? item.original_name:""}</h1>
    <h1 className='movie-title'>{movie ? item.original_title:""}</h1>

    </div>
   
    <p className='movie-description'>{movie ? item.overview:""}</p>
  </div>
         </SwiperSlide>
      {/* </Swiper> */}
      {/* <div className='bann'> */}
      {/* <img src={movie ? imageurl+item.poster_path :""} alt="" />  */}
     
      {/* <div className="banner-content col-12"> */}
    {/* <div className='banner-title'> */}
    {/* <h1 className='movie-title'>{movie ? item.original_name:""}</h1> */}
    {/* <h1 className='movie-title'>{movie ? item.original_title:""}</h1> */}

    {/* </div> */}
   
    {/* <p className='movie-description'>{movie ? item.overview:""}</p> */}
  {/* </div> */}
  </>
   
    )
   
  })



  return (   
    // <div className="row">
    <div className='banner'>
     
      <Swiper
        spaceBetween={0}
        loop= {false}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1000,
        }}
        scrollbar={{
          el: '.swiper-scrollbar',
          draggable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
    {bannerImage}
    </Swiper>
     <div className="banner-bottom">
   
    </div>
    </div>
      // </div>
     
 
  )
  
}

export default Banner
