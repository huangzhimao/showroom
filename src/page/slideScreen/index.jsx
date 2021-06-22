import React, { Component} from 'react';
import './index.scss';
import bgImage from '../../assets/slideScreen/slice-screen.jpg';
import Part1 from './components/part1/index.jsx';


const partMap={
    part1:Part1
}
class SlideScreen extends Component {
    state = {
        left:905,
        index:0,
        show:false,
        lock:false
    }

   move=(direction)=>{
    const {left,index,lock} = this.state;
    let moveDis = 1780
    
    if(lock)return;
    if(direction==='left'){
        if(index!==0){
            this.setState({
                left: left+moveDis,
                index:index-1,
                lock:true
            })
        }
    }else{
        if(index<5){
            this.setState({
                left: left-moveDis,
                index:index+1,
                lock:true
            }) 
        }
    }
    setTimeout(()=>{
        this.setState({
            show:true,
        })  
    },2000)

   }
    render() {
        const {left,index,show} = this.state;
        const PartComponent = partMap[`part1`]
        
        return (
           <div className="slide-screen-page">
               <div 
                className="bg-img-box"
                style={{
                    transform: `translateX(${left}px)`,
                }}
               >
                   <img src={bgImage}/>
               </div>
                <div className="left-control" onClick={()=>{this.move('left')}}></div>
                <div className="right-control" onClick={()=>{this.move('right')}}></div>
               {
                   show && <PartComponent onClose={()=>{this.setState({show: false,lock:false})}}/>
               } 
           </div>
        )
    }
}
export default SlideScreen 