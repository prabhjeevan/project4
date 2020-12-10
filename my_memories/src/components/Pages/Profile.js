import React from 'react'

const Profile = ()=>{
    return(
        <div style={{maxWidth:"650px", margin:"0px auto "}}>
            <div style={{display:"flex", 
                    justifyContent:"space-around",
                    margin:"20px 0px",
                    borderBottom:"1px solid grey"
            }}>
                <div>
                    <img style={{width:"160px", height:"160px", borderRadius:"80px", marginBottom:"10px"}} 
                    src="https://i.imgur.com/0sEub40.jpg"
                    />
                </div>
                <div>
                    <h4>Prabh Kalra</h4>
                    <div style={{display:"flex", justifyContent:"space-between", width:"110%" }}>
                        <h6> 0 Posts</h6>
                        <h6>0 Followers</h6>
                        <h6>0 following </h6>
                    </div>
                </div>
            </div>
            <div className="profileposts">
                <img className="item" src="https://i.imgur.com/0sEub40.jpg" /> 
                <img className="item" src="https://i.imgur.com/0sEub40.jpg" /> 
                <img className="item" src="https://i.imgur.com/0sEub40.jpg" /> 
                <img className="item" src="https://i.imgur.com/0sEub40.jpg" /> 
                <img className="item" src="https://i.imgur.com/0sEub40.jpg" /> 
                <img className="item" src="https://i.imgur.com/0sEub40.jpg" /> 

            </div>
        </div>
       
    )
}

export default Profile