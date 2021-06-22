import React from 'react';
import './index.scss';

const CommonPart = (props)=>{
    const {children,onClose} = props;
    return (
        <div className="common-part-container animated fadeInRightBig">
            <div
             className="close-btn"
             onClick={()=>{
                onClose()
             }}
            >

            </div>
            {children}
        </div>
    );
}

export default CommonPart;