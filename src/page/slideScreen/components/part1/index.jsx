import React,{useState} from 'react';
import CommonPart from '../commonPart/index';
import './index.scss';
import data from './json'
import selectBg from '../../../../assets/slideScreen/btn.bg.select.png'


const Part = ({onClose}) => {
    const [index,setIndex] = useState(0)
    const dataIndex = data[index]
    return (
        <CommonPart onClose={onClose}>
            <div className="part1-container">
                <div className="title-box">
                    <span>第{dataIndex.num}章</span>
                    <span>{dataIndex.name}</span>
                </div>
                <div className="btn-box">
                    {
                        data.map((item,idx)=>{
                            let style={};
                            if(idx === index){
                                style={backgroundImage:`url(${selectBg})`}
                            }
                            return (
                                <div 
                                    className="btn-item"
                                    key={idx}
                                    style={style}
                                    onClick={()=>{
                                        setIndex(idx)
                                    }}
                                    >
                                        {item.num}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="content-box">
                    {
                        dataIndex.text.map((item,idx)=>{
                            return (
                                <p key={idx}>{item}</p>
                            )
                        })
                    }
                </div>
            </div>
        </CommonPart>
    )
}

export default Part;