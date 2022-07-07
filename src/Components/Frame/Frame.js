import './Frame.css'
import Tile from '../Tiles/Tile';
import React from 'react';

const Frame=()=>{

    // let apps=["Discount","GST","TDS","Percent","Fake"]
    let apps=[{name:"Discount",size:2,data:{amount:0,percent:18,output:0}},
            {name:"GST",size:2,data:{amount:0,percent:18,output:0}},
            {name:"TDS",size:3,data:{amount:0,percent:18,output:0}},
            {name:"Percent",size:2,data:{amount:0,percent:18,output:0}},
            {name:"Fake",size:2,data:{amount:0,percent:18,output:0}}
            ]

    return(
        <div className="frame">
            <div className="header">
                <h1>Sales Calculator</h1>
            </div>
            <div className="view">
                {
                    apps.map((app,i)=>{
                        return <Tile key={i} app={app}/>
                    })
                }
            </div>
            
                
        </div>
    )
}

export default Frame;