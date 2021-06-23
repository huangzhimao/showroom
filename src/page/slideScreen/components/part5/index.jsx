import React, { useState } from 'react';
import CommonPart from '../commonPart/index';
import './index.scss';

import data from './data'
const Part = ({ onClose }) => {
    return (
        <CommonPart onClose={onClose}>
            <div className="part5-container">
                <div className="text-box">
                    {
                        data.map((item, index) => {
                            return (
                                <p key={index}>{item}</p>
                            )
                        })
                    }
                </div>
            </div>
        </CommonPart>
    )
}

export default Part;