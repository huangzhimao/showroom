import React, { Component } from 'react';
import axios from 'axios';
import './index.scss';
import bgImage from '../../assets/slideScreen/slide/0.jpg';
import Part1 from './components/part1/index.jsx';
import Part2 from './components/part2/index.jsx';
import Part3 from './components/part3/index';
import Part4 from './components/part4/index';
import Part5 from './components/part5/index.jsx';

import img1 from '../../assets/slideScreen/slide/1.png';
import img2 from '../../assets/slideScreen/slide/2.png';
import img3 from '../../assets/slideScreen/slide/3.png';
import img4 from '../../assets/slideScreen/slide/4.png';
import img5 from '../../assets/slideScreen/slide/5.png';

const partMap = {
    part1: Part1,
    part2: Part2,
    part3: Part3,
    part4: Part4,
    part5: Part5
}


//总长度
const totalWidth = 12000;
//起始左边距离
const startMargin = 1230;
//每次移动距离
const moveDistance = 2000;
//每个发展历程之间的间距
const lineItemMargin = 400;
//每次移动的时间
const moveTime = 2000


function proxyRequest(actionName) {
    axios({
        method: 'post',
        url: "http://192.168.1.177:8001",
        data: {
            action: actionName
        }
    }).then((resp) => {
        console.log(resp);
    }, (err) => {
        console.log(err);
    });
}

class SlideScreen extends Component {
    state = {
        left: 0,
        index: 0,
        show: false,
        lock: false
    }

    move = (direction) => {
        const { left, index, lock } = this.state;
        let moveDis = moveDistance;

        if (lock) return;
        if (direction === 'left') {
            if (index !== 0) {
                this.setState({
                    left: left + moveDis,
                    index: index - 1,
                    lock: true
                })
                proxyRequest('move_to_pre')
            }
            if (index === 1) {
                this.setState({
                    lock: false,
                    show: false
                })
            }
        } else {
            if (index < 5) {
                this.setState({
                    left: left - moveDis,
                    index: index + 1,
                    lock: true
                })
                proxyRequest('move_to_next')
            }
        }
        setTimeout(() => {
            if (!(direction === 'left' && index === 1)) {
                this.setState({
                    show: true,
                })
            }
        }, moveTime + 500)

    }
    render() {
        const { left, index, show } = this.state;
        const PartComponent = partMap[`part${index}`]
        const marginStyle = { marginRight: `${lineItemMargin}px` }

        return (
            <div className="slide-screen-page">
                <div
                    className="bg-img-box"
                    style={{
                        transform: `translateX(${left}px)`,
                        width: `${totalWidth}px`,
                        transition: `all ${moveTime / 1000}s linear`
                    }}
                >
                    <img className="bg" src={bgImage} />
                    <div className="time-line">
                        <div className="throule-line"></div>
                        <img className="line-1" style={{ ...marginStyle, marginLeft: startMargin }} src={img1} />
                        <img className="line-2" style={marginStyle} src={img2} />
                        <img className="line-3" style={marginStyle} src={img3} />
                        <img className="line-4" style={marginStyle} src={img4} />
                        <img className="line-5" style={marginStyle} src={img5} />

                    </div>

                </div>
                <div className="left-control" onClick={() => { this.move('left') }}></div>
                <div className="right-control" onClick={() => { this.move('right') }}></div>
                {
                    (show && index > 0) && <PartComponent onClose={() => { this.setState({ show: false, lock: false }) }} />
                }
            </div>
        )
    }
}
export default SlideScreen