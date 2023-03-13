import axios from "axios";


const instance = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
});

function GetData(){
    var data = {};
    console.log("getdata");
   instance.get("/posts").then((response)=>{
    console.log("response");
       console.log(response.data[0].title);
      data = response.data[0].title;
        
    }).catch((error)=>{
        console.log(error);
    });
   console.log("data..");
    return data;
}

export default function API(){
   

    function CreatePost(arr){
        var status;
        instance.post("/post",arr).then((response)=>{
            console.log(response);
            status = response.status;
        }).catch((error)=>console.log(error));

        return status;
    }

    function UpdatePost(arr){
        var status;
        instance.put("/post",arr).then((response)=>{status = response.status;}).catch((error)=>{console.log(error)});
        return status;
    }

    function DeleteData(personalId){
        var status;
        instance.delete("post",personalId).then((response)=>{status = response.status}).catch((error)=>console.log(error));
    }


}

export {GetData};
