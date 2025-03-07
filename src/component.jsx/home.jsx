import {React,useState} from 'react';
import  ReactPlayer from 'react-player';

const Home = () => {
    const [song,setSong]= useState(true)
    const [select,setSelect]= useState()
    const [toggle,setToggle]= useState(false)

 const songs =["Ramadan2.mp3","Ramadan3.mp3","Ramadan4.mp3","Ramadan5.mp3","Ramadan6.mp3","Ramadan7.mp3","Ramadan8.mp3","Ramadan9.mp3","Ramadan10.mp3"]
 
  
 if(toggle === true) {    return (
    <div>
        <div className="center absolute"><img src="/media2.png" width={200} alt=""/>
        </div>
        {song? 
        (<div className="blur3 l" > <h4>PlayList</h4>
        <div className="scroll">
          {songs.map((song,index)=><div  key={index} onClick={()=>setSong(false)}>
        <div className="blur2" onClick={()=>setSelect(song)}>{song}</div></div>)}</div><div style={{marginTop:'10px'}} className="blur" onClick={()=>setToggle(false)}>BACK TO HOME</div></div>)
        :(<div className="green"> 
          <div className="blur center"><img  src="/mal_salis.jpg" style={{ margin: 'auto',
                                         width:"150px",height:"150px",
                                         borderRadius:"10px"}} alt="" /><br />
        <div>
         <ReactPlayer url={`/${select}`} className="player" autoPlay controls /></div>
         <div className="grid">
         <div style={{marginTop:'10px'}} className="blur" onClick={()=>setSong(true)}>BACK</div>
         <div style={{marginTop:'10px'}} className="blur" onClick={()=>setToggle(false)}> HOME</div>
         </div></div></div>)}
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