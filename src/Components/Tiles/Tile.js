import React, {useState} from 'react';
import './Tile.css';
import ReactModal from 'react-modal';


const Tile=({app})=>{

    let [modalOpen, setModalOpen]=useState(false);
   
    let openModal=()=>{setModalOpen(true)}
    let closeModal=()=>{setModalOpen(false)}

    return(
        <div>
        <div className="tile" onClick={openModal}>
            {app.name}
            <img className="image" src={`./images/${app.name}.png`} alt={app}/>
            
        </div>
        <ReactModal isOpen={modalOpen} onRequestClose={closeModal} className="modal">
            <div className='modalHeader'>
                <h1>{app.name} Calculator</h1>
                {/* <button onClick={closeModal}>Close</button> */}
            </div>
            <div className='modalBody'>
                <div className='modalInput'>
                    <div className='i'><h3>Amount</h3><input type="number" name="input1" className='long'/></div>
                    <div className='i'><h3>Percent</h3><input type="number" name="input2" className='short'/></div>
                    {app.size===3?<div className='i'><h3>TDS</h3><input type="number" name="input3" className='short'/></div>:<div></div>}
                </div>
                <div className='modalCalculate'>
                    <button id="calculate">Calculate</button>
                </div>
                <div className='modalOutput'>
                    <div className='o'><h3>Amount</h3><label id="output1" className='big'></label></div>
                    <div className='o'><h3>Tax</h3><label id="output2" className='small'></label></div>
                    {app.size===3?<div className='o'><h3>TDS</h3><label id="output3" className='small'></label></div>:<div></div>}
                    <div className='o'><h3>Final</h3><label id="output4" className='big'></label></div>
                </div>
            </div>
            
        </ReactModal>
        </div>

    )
}

export default Tile;