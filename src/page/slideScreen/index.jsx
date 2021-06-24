import React, { Component } from 'react';
// import axios from 'axios';
import './index.scss';
import bgImage from '../../assets/slideScreen/slide/0.jpg';
import { img1, img2, img3, img4, img5, partMap } from './componentConfig';
import { config, totalWidth, startMargin, lineItemMargin, verOffset, itemHeight } from './util/config'

function proxyRequest(index, direction) {
    const _config = config[index][direction]
    if (!_config.action) return
    fetch(`http://127.0.0.1:3001/send?action=${_config.action}`).then((result) => { }, (err) => { })
    // axios({
    //     method: 'get',
    //     url: `http://127.0.0.1:3001/send?action=${_config.action}`,
    // }).then((resp) => {
    //     console.log(resp);
    // }, (err) => {
    //     console.log(err);
    // });

    return _config
}

class SlideScreen extends Component {
    state = {
        left: 0,
        index: 0,
        show: false,
        lock: false,
        realMoveTime: 1000
    }

    move = (direction) => {
        const { index, lock } = this.state;

        if (lock) return;
        //往左
        if (direction === 'left') {
            if (index === 5) {
                const { delay, moveToPos } = proxyRequest(index, direction);
                this.setState({
                    left: moveToPos,
                    index: 0,
                    lock: true,
                    show: false,
                    realMoveTime: delay,
                })

            } else {

                if (index !== 0) {
                    const { delay, moveToPos } = proxyRequest(index, direction);
                    setTimeout(() => {
                        this.setState({
                            left: -moveToPos,
                            index: index - 1,
                            lock: true,
                            realMoveTime: delay,
                        })
                    })
                }
            }

        } else {
            if (index < 5) {
                const { delay, moveToPos } = proxyRequest(index, direction);
                this.setState({
                    left: - moveToPos,
                    index: index + 1,
                    lock: true,
                    realMoveTime: delay
                })
            }
        }
        setTimeout(() => {
            const { realMoveTime: _realMoveTime } = this.state;
            setTimeout(() => {
                if (!(direction === 'left' && index === 1) && index < 5) {
                    this.setState({
                        show: true,
                    })
                }
                this.setState({
                    lock: false,
                })
            }, _realMoveTime + 200)
        })


    }
    render() {
        const { left, index, show, realMoveTime } = this.state;
        const PartComponent = partMap[`part${index}`]
        const marginStyle = { marginRight: `${lineItemMargin}px` }
        return (
            <div className="slide-screen-page">
                <div
                    className="bg-img-box"
                    style={{
                        transform: `translateX(${left}px)`,
                        width: `${totalWidth}px`,
                        transition: `all ${realMoveTime / 1000}s linear`
                    }}
                >
                    <img className="bg" src={bgImage} />
                    <div
                        className="time-line"
                        style={{
                            top: `${verOffset}%`,
                            height: `${itemHeight}%`
                        }}
                    >
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