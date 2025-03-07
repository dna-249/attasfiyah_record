import {React,useState} from 'react';
import  ReactPlayer from 'react-player';

const Home = () => {
    const [song,setSong]= useState(true)
    const [select,setSelect]= useState()
    const [toggle,setToggle]= useState(false)

 const songs =["Ramadan2.mp3","Ramadan3.mp3"]
 
  
 if(toggle === true) {    return (
    <div>
        <div className="center"><img src="/media2.png" width={200} alt=""/></div>
        {song? 
        (<div>{songs.map((song,index)=><div key={index} onClick={()=>setSong(false)}>
        <div onClick={()=>setSelect(song)}>{song}</div></div>)}</div>)
        :(<div> 
          <div className="blur"><img  src="/mal_salis.jpg" style={{ margin: 'auto',
                                         width:"150px",height:"150px",
                                         borderRadius:"10px"}} alt="" /><br />
        <div>
         <ReactPlayer url={`/${select}`} className="player" autoPlay controls /></div></div></div>)}
    </div>
  )} else {
    return (<div className="center auto">
      <div className="white_bg" onClick={()=>setToggle(true)}>
      <div className=" border"><img style={{ margin: 'auto',marginBottom:"20px"}} src="/media2.png" width={100} alt=""/><br/>
      <img className="img" src="/mal_salis.jpg" style={{ margin: 'auto'}} alt="" /><br />
      <h4>By <br />Mal Salis Ibrahim Tilde</h4></div>  </div> </div>)
  }
}

export default Home