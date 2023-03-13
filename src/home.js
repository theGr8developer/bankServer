import API,{GetData} from "./component/apihanler/api.js";

export default function Home(){

    var {data} = GetData();
    console.log("this is data");
    console.log(data);
    console.log("this is data1.....");

    return(
        <div>
        <div>home</div>
        <div>{data}</div>
        </div>
    );
}