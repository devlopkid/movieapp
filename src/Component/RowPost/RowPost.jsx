import React, { useEffect, useState } from 'react'
import './RowPost.css'
import {API_KEY, imageurl } from '../Constants/Constance'
import axios from '../../axios'
import YouTube from 'react-youtube'
// import Popup from '../Popup/Popup'
function RowPost(props) {
    const[movies,setMovies]=useState([])
    const[video,setvideo]=useState('')
    useEffect(()=>{
        axios.get(props.urls).then((response)=>{
            console.log("originals",response.data.results)
            setMovies(response.data.results)
        })      
    },[])

    const YoutubeHandler=(id)=>{
      console.log("id",id)
      axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log("response",response.data.results)
        if(response.data.results.length!==0)
        {
          setvideo(response.data.results[0])
        }
        else
        {
         alert("not available")
        }
        console.log("link",video.key)
      })
    }
    
  let originals= movies.map((item)=>{
      return(
        //   <h2>{movie ? item.name : ""}</h2>
        <div className='movie'>
        {/* <img src={imageurl+item.poster_path} alt="" /> */}
      
        <img  src={imageurl+item.poster_path} alt="" key={item.src}/>
      
        <div className="poster-overlay">
        <h4 className='overlay-title'>{item.title}</h4>
        <h6>Popularity : {item.popularity}</h6>
        <h6>Average vote : {item.vote_average}</h6>
        <h6>Vote count : {item.vote_count}</h6>
        <h6>Release Date : {item.release_date}</h6>
          <button onClick={()=>YoutubeHandler(item.id)} className='overlay-btn'>Play</button>
        </div>
      

        </div>
      )
   
   })
  //  console.log("original",originals)
   const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      rel:0,showinfo: 0,
   
    },
   
  };
 
  return (
      
    <div className='row-post'>
         
        {/* <div className="row"> */}
        <h2>{props.title}</h2>
        {/* <div className={props.isSmall ? 'smallposter':'poster col-10 col-sm-10 col-md-11 col-xl-12'}> */}
       
        <div className='poster'>
      

             {originals}

            
        </div>
        {/* <div className="poster-overlay">
          
        </div>
       */}
    {/* </div> */}
  
    { video && <YouTube videoId={video.key} opts={opts} className="youtube" /> }
      
   
   
    </div>
  )
}

export default RowPost
