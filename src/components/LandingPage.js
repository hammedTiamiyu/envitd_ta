import React from "react"
import { Link } from "react-router-dom";
// import '../styles/styles.css';

function LandinPage(){
// console.log(Link)
	return(
	   <div className="landing_page">
	   	  <div className="freebox"></div>
	   	  <div className="heading">
	   	  	 <p className="event_title_imagine">Imagine if</p>
	   	  	 <div className="snapchat_cont">
	   	  	 	<p className="snapchat_text">Snapchat</p>
	   	  	 </div>
	   	  	 <p className="event_title_imagine">had events</p>
	   	  </div>
	   	  <div className="event_info_cont">
	   	     <p className="info">Easily host and share events with your friends across any social media.</p>
	   	  </div>
	      <div className="image_container"></div>
	      
	      <Link to='/create-event'>
	      	 <div className="create_event_cont">
	      	    <div className="create_event_btn">
	      	 	   <p className="create_event_text">Create my events</p>
	      	    </div>
	         </div>
	      </Link>
	   
	   </div>
	)
}

export default LandinPage
