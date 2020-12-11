import React,{useEffect,useState, useContext} from 'react'
import {UserContext} from '../../App'

const Profile = ()=>{
    const [mypics,setPics] = useState([])
    const {state,dispatch}= useContext(UserContext)
    useEffect(()=>{
        fetch('/myposts',{
            headers:{
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            setPics(result.mypost)
        })
    })
    return(
        <div id="profilediv" style={{maxWidth:"1000px", margin:"0px auto "}}>
            <div style={{display:"flex", 
                    justifyContent:"space-around",
                    margin:"20px 0px",
                    borderBottom:"1px solid grey"
            }}>
                <div>
                    <img style={{width:"160px", height:"160px", borderRadius:"80px", marginBottom:"10px"}} 
                    src="https://picon.ngfiles.com/766000/flash_766006_largest_crop.png?f1600888448"
                    />
                </div>
                <div>
                    <h4>{state?state.name:"loading"} </h4>
                    <div style={{display:"flex", justifyContent:"space-between", width:"110%" }}>
                        <h6> 0 Posts</h6>
                        <h6>0 Followers</h6>
                        <h6>0 following </h6>
                    </div>
                </div>
            </div>
            <div className="profileposts">
                {
                    mypics.map(item=>{
                        return (
                            <img key={item._id} className="item" src={item.photo} alt={item.title} /> 
                        )
                    })
                }

            </div>
        </div>
       
    )
}

export default Profile