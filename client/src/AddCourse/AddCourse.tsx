import React from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import { EditCourseComponentProps, Course } from "./../Tools/data.model"
import { getJSONData, sendJSONData} from "./../Tools/Toolkit";
import { Link } from 'react-router-dom'; 


const AddCourse = ({courses,onResponse,onError,RETREIVE_SCRIPT,setLoading}:EditCourseComponentProps) => {

    let navigate = useNavigate(); 

    const routeChange = () =>{ 
        let path = "/"; 
        navigate(path);
    }

    //const ADD_SCRIPT_COURSES:string = "http://localhost/addCourse";
    const ADD_SCRIPT_COURSES:string = "/addCourse";


    const [courseName, setCourseName] = React.useState("");
    const [courseCode, setCourseCode] = React.useState("");

    const [errorMessage, setError] = React.useState("");

    const handleCourseName = (e:any) => {
        setCourseName(e.target.value);
    };

    const handleCourseCode = (e:any) => {
        setCourseCode(e.target.value);
    };

    function onSubmitResponse(responseText:any) {
        setError("");
        routeChange();
        getJSONData(RETREIVE_SCRIPT, onResponse, onError);
        setLoading(false);
    }
        
    function onSubmitError() {
        setError("The course code already exist!");
        console.log("Error - an issue occurrred with AJAX data transmission");
    }

    const onAdd = (e:any) => {
        setLoading(true);
        let sendJSON:Object = 
        {
            "code": courseCode,
            "name": courseName
        };
        
        let sendString:string = JSON.stringify(sendJSON);        
        sendJSONData(ADD_SCRIPT_COURSES, sendString, onSubmitResponse, onSubmitError, "POST");

    }; 
  

    // ---------------------------------- render to the DOM
    return(
        <div>
            <div><label className="form__label" >Course Code:</label></div>
            <div><input className="border-solid bg-gray-100" type="text" onChange={handleCourseCode} value={courseCode}/></div>
            <div>{errorMessage}</div>
            <div><label className="form__label" >Course Name:</label></div>
            <div><input className="border-solid bg-gray-100" type="text" onChange={handleCourseName} value={courseName}/></div>
            <div className="flex flex-row mt-3">
                <button className={courseName == "" ? "bg-gray-100 border-0 mr-1 p-1 w-20" : "bg-red-500 text-[#FFF] border-0 mr-1 p-1 hover:opacity-50 w-20"} onClick={onAdd} disabled={courseName == "" ? true : false}>Ok</button>
                <div>
                    <Link to={"/"}><button className="bg-green-500 text-[#FFF] border-0 mr-1 p-1 hover:opacity-50 w-20">Cancel</button></Link>
                </div>
            </div>

        </div>
    );
}

export default AddCourse;