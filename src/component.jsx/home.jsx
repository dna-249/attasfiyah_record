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
        :(<div> <h1>{select}</h1>
         <ReactPlayer url={`/${select}`}  autoPlay controls /></div>)}
    </div>
  )} else {
    return (<div className="center auto white_bg" onClick={()=>setToggle(true)}><div><img src="/media2.png" width={100} alt=""/><br/><img className="img" src="/mal_salis.jpg" alt="" /><br />presented by: <br/><h3>Mall Salis Ibrahim Tilde</h3></div>  </div>)
  }
}

export default Home