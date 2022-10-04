
import './Event.css';
import { Link } from "react-router-dom";

function CreateEvent() {
  return (
    <div className="create-container">
       
       <div className="form-area">
          <h2 className="event-title">Create Event</h2>
           <p className="itle-description"> Please fill this form to create an event </p>
         
         <div className="input-container">
           <input type="text" placeholder="Event Name" />
         </div>
         <div className="input-container">
           <input type="text" placeholder="Host Name" />
         </div>
         <div className="input-container">
           <input type="text" placeholder="Start Time" />
         </div>
         <div className="input-container">
           <input type="text" placeholder="End Time" />
         </div>
         <div className="input-container">
           <input type="text" placeholder="Location" />
         </div>
         <div className="input-container">
           <input type="file" placeholder="Event Photo" />
         </div>


          <Link to="/event">
            <button className="next-button">Next</button>
          </Link>
          
        </div>
      
       
    </div>
  );
}

export default CreateEvent;