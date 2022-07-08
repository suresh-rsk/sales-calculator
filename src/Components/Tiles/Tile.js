import React, {useState} from 'react';
import './Tile.css';
import ReactModal from 'react-modal';


const Tile=({app})=>{

    let [modalOpen, setModalOpen]=useState(false);
    let initialValues={input1:0,input2:18,input3:2,output1:0,output2:0,output3:0,output4:0};
    let openModal=()=>{setModalOpen(true)}
    let closeModal=()=>{setModalOpen(false);setValues(initialValues);temp=[0,0,0,0]}
    let [values,setValues]=useState(initialValues)
    let temp=[0,0,0,0]

    let changeHandler=(e)=>{
        e.preventDefault();  
        setValues({...values,[e.target.name]:parseInt(e.target.value)})
        // switch(app.name){
        //     case "Discount":
        //         temp=Discount(values.input1,values.input2);
        //         break;
        //     case "GST":
        //         temp=GST(values.input1,values.input2);
        //         break;
        //     case "TDS":
        //         temp=TDS(values.input1, values.input2, values.input3);
        //         break;
        //     default:
        //         temp=[0,0,0,0];
        // }
        // setValues({...values,output1:temp[0],output2:temp[1],
        //         output3:temp[2], output4:temp[3]})
    }
    
    function Discount(P,I){
        return [P,(P*I/100),0, P-(P*I/100)];
    }
    function GST(P,I){
        return [P, (P*I/100),0, P+(P*I/100)];
    }
    function TDS(P,I,T){
        let x=(P/(100+I)*100);
        return [x, P-x, x*T/100, P-(x*T/100)];
    }
    function Percent(P,I){
        return [P,P-((100*P)/(100+I)), 0,(100*P)/(100+I)]
    }
    function Fake(P,I){
        return [P,(P*100/(100-I))-P,0, (P*100/(100-I))]
    }

    function calculate(){
        switch(app.name){
            case "Discount":
                temp=Discount(values.input1,values.input2);
                break;
            case "GST":
                temp=GST(values.input1,values.input2);
                break;
            case "TDS":
                temp=TDS(values.input1, values.input2, values.input3);
                break;
            case "Percent":
                temp=Percent(values.input1,values.input2);
                break;
            case "Fake":
                temp=Fake(values.input1,values.input2)
                break;
            default:
                temp=[0,0,0,0];
        }
                setValues({...values,output1:Math.round(temp[0]),output2:Math.round(temp[1]),
                output3:Math.round(temp[2]), output4:Math.round(temp[3])})
    }

    return(
        <div>
        <div className="tile" onClick={openModal}>
            <p>{app.name}</p>
            <img className="image" src={`./images/${app.name}.jpg`} alt={app}/>
            
        </div>
        <ReactModal isOpen={modalOpen} onRequestClose={closeModal} className="modal">
            <div className='modalHeader'>
                <h1>{app.name} Calculator</h1>
                {/* <button onClick={closeModal}>Close</button> */}
            </div>
            <div className='modalBody'>
                <div className='modalInput'>
                    <div className='i'>
                        <h3>Amount</h3>
                        <input type="number" name="input1" className='long' value={values.input1} onChange={changeHandler}/>
                    </div>
                    <div className='i'>
                        <h3>Percent</h3>
                        <input type="number" name="input2" className='short' value={values.input2} onChange={changeHandler}/>
                    </div>
                    {app.size===3?<div className='i'><h3>TDS</h3><input type="number" name="input3" className='short' value={values.input3} onChange={changeHandler}/></div>:<div></div>}
                </div>
                <div className='modalCalculate'>
                    <button id="calculate" onClick={calculate}>Calculate</button>
                </div>
                <div className='modalOutput'>
                    <div className='o'><h3>Amount</h3><label id="output1" className='big' >{values.output1.toLocaleString('en-IN')}</label></div>
                    <div className='o'><h3>Tax</h3><label id="output2" className='small' >{values.output2.toLocaleString('en-IN')}</label></div>
                    {app.size===3?<div className='o'><h3>TDS</h3><label id="output3" className='small' >{values.output3.toLocaleString('en-IN')}</label></div>:<div></div>}
                    <div className='o'><h3>Final</h3><label id="output4" className='big' >{values.output4.toLocaleString('en-IN')}</label></div>
                </div>
            </div>
            
        </ReactModal>
        </div>

    )
}

export default Tile;