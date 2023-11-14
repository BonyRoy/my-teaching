import React from "react";
import HandWrittendata from "./HandWrittendata";
import Card1 from "./Card1";

const List =()=>{
    return(
        <>
        <div className="my-5">
            <h2 className="text-center"
            style={ {
                color:'#3498db',
            }}
            >IT/ComputerScience Engineering Hand Written Notes</h2>
        </div>
        <div className="container-fluid mb-5"
            //    style={ {
            //     backgroundColor: '#a7bfe0',
            // }}
        >
        <div className="my-5">
        </div>
        <div className="container-fluid mb-5">
        <div className="row">
        <div className="col-10 mx-auto">
            <div className="row gy-4">
            {
                HandWrittendata.map((val, ind)=>{
                    return <Card1 key={ind}
                     imgsrc={val.imgsrc}
                     title={val.title}
                     Link1={val.Link1}
                     Link2={val.Link2}
                     Link3={val.Link3}
                     Link4={val.Link4}
                     Link5={val.Link5}
                     Link6={val.Link6}

                    />
                })
            }
        </div>
        </div>
        </div>  
        </div>
        </div>
        </>
        );
};

export default List;