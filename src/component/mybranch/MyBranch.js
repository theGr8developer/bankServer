
import {useNavigate} from "react-router-dom";
export default function MyBranch(){

    const navigate = useNavigate();
    function HandleSubmit(event){
        event.preveDefault();
        console.log("submit handling");
        navigate("/home");

    }

    return(
       <div className="container">
        <div className="row">
           
           
            <div className="col-md-6 offset-md-4 bg-white mt-3 rounded">
            <form  action="/add" method="post">
                <h1 className="text-center">Register Bank here</h1>
                {/* bank name */}
                <div className="mb-3">
                  <label for="name" className="form-label">Bank Name</label>
                  <input type="text" name="name" id="name" className="form-control" />
                </div>
                 {/* post office */}
                 <div className="mb-3">
                  <label for="post_office" className="form-label">Post Office Name</label>
                  <input type="text" name="post_office" id="post_office" className="form-control" />
                </div>
                 {/* district */}
                 <div className="mb-3">
                  <label for="district" className="form-label">District Name</label>
                  <input type="text" name="district" id="district" className="form-control" placeholder=""/>
                </div>
                 {/* state */}
                 <div className="mb-3">
                  <label for="state" className="form-label">State Name</label>
                  <input type="text" name="state" id="state" className="form-control" placeholder=""/>
                </div>
                 {/* Ifsc code */}
                 <div className="mb-3">
                  <label for="ifsc_code" className="form-label">Enter Ifsc Code</label>
                  <input type="text" name="ifsc_code" id="ifsc_code" className="form-control" placeholder=""/>
                </div>
                 {/* Pin code */}
                 <div className="mb-3">
                  <label for="pin_code" className="form-label">Enter Pin Code</label>
                  <input type="number" name="pin_code" id="pin_code" className="form-control" placeholder=""/>
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