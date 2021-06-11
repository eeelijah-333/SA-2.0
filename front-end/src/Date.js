import React from 'react'

var datetime = ()=>
{
    var showdate=new Date();
    
    var dt=showdate.toDateString();
    return(
        <div>
            <screenTop>
                <input type= "text" value ={dt} readOnly="true"/>

            </screenTop>
        
        </div>
    );
}
export default datetime;