import React from 'react';
import { ListComponentProps, Technology, Course } from "./../Tools/data.model"
import { Link } from 'react-router-dom';

const List = ({technologies, courses}:ListComponentProps) => {

    // ---------------------------------- render to the DOM
    return(
        <div className="flex flex-wrap">
            <div className="flex flex-col flex-nowrap pr-5">

                <div className="flex flex-row">
                    <div>
                        <div className="pb-3">Technologies</div>
                        <Link to={`/addTechnology`}><i className="fas fa-plus content__button pr-2 text-xl hover:text-accent"></i></Link>

                        {technologies.map((data:Technology, n:number)=>

                            <div key={n} className="ml-8 pl-2.5 py-0.5 border-l-4 border-solid border-accent flex flex-row flex-nowrap">
                                {/* <a href="http://www.seanmorrow.ca" className="text-accent font-bold hover:underline">{data.name}</a> */}
                                <Link to={`/editTechnology/${data._id}`}><i className="fas fa-pencil content__button pr-2 text-xl hover:text-accent"></i></Link>
                                <Link to={`/deleteTechnology/${data._id}`}><i className="fas fa-trash content__button pr-2 text-xl hover:text-accent"></i></Link>
                                <div className="text-accent font-bold">{data.name}</div>
                            </div>
                        )}
                    </div>

                    <div>
                        <div className="pb-3">Courses</div>

                        <Link to={`/addCourse`}><i className="fas fa-plus content__button pr-2 text-xl hover:text-accent"></i></Link>

                        {courses.map((data:Course, n:number)=>
                            <div key={n} className="ml-8 pl-2.5 py-0.5 border-l-4 border-solid border-accent flex flex-row flex-nowrap">
                                <Link to={`/editCourse/${data._id}`}><i className="fas fa-pencil content__button pr-2 text-xl hover:text-accent"></i></Link>
                                <Link to={`/deleteCourse/${data._id}`}><i className="fas fa-trash content__button pr-2 text-xl hover:text-accent"></i></Link>
                                <div className="text-accent font-bold">{data.code} {data.name}</div>
                            </div>
                        )}
                    </div>
                </div>


            </div>
        </div>
    );
}

export default List;