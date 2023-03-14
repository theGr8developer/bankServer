
import {useState} from "react";
import axios from "axios";
import {addBank} from "../apihandler/api.js";
import { useNavigate } from "react-router-dom";

export default function MyBranch(){

  const navigate = useNavigate();
  const [bank,setBank] = useState({});
  function handleSubmit(e){
    e.preventDefault()
      console.log(bank);
      console.log(typeof(bank.pin_code));
      addBank("/add",bank);
      navigate("/home");
  }

    return(
       <div className="container">
        <div className="row">
           
           
            <div className="col-md-6 offset-md-4 bg-white mt-3 rounded">
            <form  onSubmit={handleSubmit} spellCheck="false">
                <h1 className="text-center">Register Bank here</h1>
                {/* bank name */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Bank Name</label>
                  <input type="text"  name="name" id="name" className="form-control" onChange={(e)=>{setBank({...bank,name:e.target.value})}}/>
                </div>
                 {/* post office */}
                 <div className="mb-3">
                  <label  htmlFor="post_office" className="form-label">Post Office Name</label>
                  <input type="text" name="post_office" id="post_office" className="form-control" onChange={(e)=>{setBank({...bank,post_office:e.target.value})}} />
                </div>
                 {/* district */}
                 <div className="mb-3">
                  <label  htmlFor="district" className="form-label">District Name</label>
                  <input type="text" name="district" id="district" className="form-control"onChange={(e)=>{setBank({...bank,district:e.target.value})}}/>
                </div>
                 {/* state */}
                 <div className="mb-3">
                  <label  htmlFor="state" className="form-label">State Name</label>
                  <input type="text" name="state" id="state" className="form-control" onChange={(e)=>{setBank({...bank,state:e.target.value})}}/>
                </div>
                 {/* Ifsc code */}
                 <div className="mb-3">
                  <label  htmlFor="ifsc_code" className="form-label">Enter Ifsc Code</label>
                  <input type="text" name="ifsc_code" id="ifsc_code" className="form-control" onChange={(e)=>{setBank({...bank,ifsc_code:e.target.value})}}/>
                </div>
                 {/* Pin code */}
                 <div className="mb-3">
                  <label  htmlFor="pin_code" className="form-label">Enter Pin Code</label>
                  <input type="number" name="pin_code" id="pin_code" className="form-control" onChange={(e)=>{setBank({...bank,pin_code:parseInt(e.target.value)})}}/>
                </div>

                 {/* bank name */}
                 <div className="mb-3 text-center">
                  <button type="submit" className="btn btn-success btn-lg " >submit</button>
                  <button type="reset" className="btn btn-success btn-lg ms-4 px-4 ">reset</button>
                </div>

                </form>
           
            </div> 
        
        
        </div>
       </div>
    );
}