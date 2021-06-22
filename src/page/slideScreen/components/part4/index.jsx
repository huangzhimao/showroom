import React,{useState} from 'react';
import CommonPart from '../commonPart/index';
import './index.scss';


const Part = ({onClose}) => {
    return (
        <CommonPart onClose={onClose}>
            <div className="part4-container">
               
            </div>
        </CommonPart>
    )
}

export default Part;