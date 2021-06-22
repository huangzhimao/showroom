import React,{useState} from 'react';
import './index.scss';

const CommonPart = (props)=>{
    const {children,onClose} = props;
    const [flag,setFlag] = useState(true)

    return (
        <div className={`common-part-container animated ${flag?'fadeInRightBig':'fadeOutRightBig'}`}>
            <div
             className="close-btn"
             onClick={()=>{
                setFlag(false)
                setTimeout(()=>{
                    onClose()
                },500)
             }}
            >

            </div>
            {children}
        </div>
    );
}

export default CommonPart;