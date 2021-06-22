import React,{useState} from 'react';
import CommonPart from '../commonPart/index';
import './index.scss';
import img1 from '../../../../assets/slideScreen/part3-1.png';
import img2 from '../../../../assets/slideScreen/part3-2.png';
import img3 from '../../../../assets/slideScreen/part3-3.png';


const Part = ({onClose}) => {
    return (
        <CommonPart onClose={onClose}>
            <div className="part3-container">
               <div className="scroll-box">
                   <img src={img1}/>
                   <img src={img2}/>
                   <img src={img3}/>
               </div>
            </div>
        </CommonPart>
    )
}

export default Part;