import React from "react";
import Booksdata from "./Booksdata";
import Card from "./Card";

const List =()=>{
    return(
        <>
        <div className="my-5">
            <h2 className="text-center"
            style={ {
                color:'#3498db',
            }}
            >Books</h2>
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
                Booksdata.map((val, ind)=>{
                    return <Card key={ind}
                     imgsrc={val.imgsrc}
                     title={val.title}
                     Link={val.Link}
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