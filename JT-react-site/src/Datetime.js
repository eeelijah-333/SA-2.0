import React from 'react'

var datetime = () =>{
    var showdate=new Date();
    var dt=showdate.toDateString();
    return(
        <div>
            <center>
                {dt}
            </center>

        </div>
    );
}
export default datetime ;