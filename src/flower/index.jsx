import React from 'react';
import { getInit } from './utils';
import './index.scss';
import imgPath1 from '../assets/other/1.png';
import imgPath2 from '../assets/other/2.png';
import imgPath3 from '../assets/other/3.png';
import imgPath4 from '../assets/other/4.png';
import imgPath5 from '../assets/other/5.png';
import imgPath6 from '../assets/other/6.png';
import imgPath7 from '../assets/other/7.png';
import imgPath8 from '../assets/other/8.png';
import imgPath9 from '../assets/other/9.png';
import imgPath10 from '../assets/other/10.png';

const imgPathList = [imgPath1, imgPath2, imgPath3, imgPath4, imgPath5, imgPath6, imgPath7, imgPath8, imgPath9, imgPath10];
const imgSizeList = [[434, 400], [336, 548], [400, 538], [302, 468], [603, 316], [556, 382], [384, 492], [316, 504], [172, 222], [170, 230]];
const aniName = {
  'flower-petal-1-box': 'move4',
  'flower-petal-3-box': 'move2',
  'flower-petal-2-box': 'move5',
  'flower-petal-5-box': 'move1',
  'flower-petal-6-box': 'move',
  'flower-petal-7-box': 'move3',
};
const colorList = [[178, 39, 201], [28,58,153], [158, 152, 198], [0, 94, 140], [188, 150, 213]];

class Flower extends React.Component {
  containerRef = React.createRef(null);

  clickStatus = false;

  timer = undefined;

  timer2 = undefined;

  timerd = undefined;

  timers = {};

  componentDidMount() {
    this.containerRef.current
      .addEventListener('click', (e) => {
        const { clientX, clientY } = e;
        const imgIndex = getInit();
        let ele = document.createElement('div');

        ele.classList.add('petal-abs');
        ele.style.transform = `translate(${clientX}px, ${clientY}px)`;
        ele.style.background = `url(${imgPathList[imgIndex]}) 0 0/100% no-repeat`;
        ele.style.width = `${imgSizeList[imgIndex][0] / 5790 * 100}vh`;   // 5790 为圆形区域图片尺寸
        ele.style.height = `${imgSizeList[imgIndex][1] / 5790 * 100}vh`;   // 5790 为圆形区域图片尺寸

        this.containerRef.current.appendChild(ele);

        if (!this.clickStatus) {
          setTimeout(() => {
            const ele1 = document.createElement('div');
            ele1.classList.add('flower-petal-5-box');
            ele1.innerHTML = `
              <div class="petal-top"></div>
              <div class="petal-right"></div>
              <div class="petal-bottom"></div>
              <div class="petal-left"></div>
            `;
            this.containerRef.current.firstChild.appendChild(ele1);
          }, 3000);
  
          setTimeout(() => {
            const ele1 = document.createElement('div');
            ele1.classList.add('flower-petal-6-box');
            ele1.innerHTML = `
              <div class="petal-top"></div>
              <div class="petal-right"></div>
              <div class="petal-bottom"></div>
              <div class="petal-left"></div>
            `;
            this.containerRef.current.firstChild.appendChild(ele1);
          }, 4000);
  
          setTimeout(() => {
            const ele1 = document.createElement('div');
            ele1.classList.add('flower-petal-7-box');
            ele1.innerHTML = `
              <div class="petal-top"></div>
              <div class="petal-right"></div>
              <div class="petal-bottom"></div>
              <div class="petal-left"></div>
            `;
            this.containerRef.current.firstChild.appendChild(ele1);
          }, 5000);
        }

        this.clickStatus = true;

        this.timer2 && clearTimeout(this.timer2);
        this.timer2 = setTimeout(() => {
          this.clickStatus = false;

          ['flower-petal-1-box', 'flower-petal-2-box', 'flower-petal-3-box', 'flower-petal-5-box', 'flower-petal-6-box', 'flower-petal-7-box'].forEach((classs) => {
            const ele = document.querySelector(`.${classs}`);

            if (ele) {
              for (let key = 0; key < ele.children.length; key++) {
                ele.children[key].classList.remove(aniName[classs]);
                ele.children[key].classList.add(`${aniName[classs]}-back`);
              }
            }
          });
        }, 30000);

        requestAnimationFrame(() => {
          ele.classList.add('visible');
        });

        this.timer = setTimeout(() => {
          ele.classList.add('hidden');
        }, 30000);
      });
    this.containerRef.current
      .addEventListener('transitionend', (e) => {
        if (e.target.className === 'petal-abs visible hidden') {
          this.containerRef.current.removeChild(e.target);
        }
      });
    
    this.containerRef.current
      .addEventListener('animationiteration', (e) => {
        if (this.clickStatus) {
          if (['petal-top start', 'petal-right start', 'petal-bottom start', 'petal-left start'].indexOf(e.target.className) >= 0) {
            if (['flower-petal-1-box', 'flower-petal-3-box', 'flower-petal-2-box'].indexOf(e.target.parentNode.className) >= 0) {
              if (!((e.elapsedTime / 2) & 1)) {
                e.target.classList.remove('start');
                e.target.classList.add(aniName[e.target.parentNode.className]);
              }
            } else {
              e.target.classList.remove('start');
              e.target.classList.add(aniName[e.target.parentNode.className]);
            }
          }
        }
      });

    this.containerRef.current
      .addEventListener('animationend', (e) => {
        if (this.clickStatus) {
          if (['flower-petal-5-box', 'flower-petal-6-box', 'flower-petal-7-box'].indexOf(e.target.className) >= 0) {
            for (let key = 0; key < e.target.children.length; key++) {
              e.target.children[key].classList.add(aniName[e.target.className]);
            }
          }
        } else {
          if (['flower-petal-5-box', 'flower-petal-6-box', 'flower-petal-7-box'].indexOf(e.target.parentNode.className) >= 0) {
            this.timers[e.target.parentNode.className] && clearTimeout(this.timers[e.target.parentNode.className]);
            this.timers[e.target.parentNode.className] = setTimeout(() => {
              document.querySelector(`.${e.target.parentNode.className}`).classList.add('hidden');
            }, 16);
          }

          if (['flower-petal-5-box hidden', 'flower-petal-6-box hidden', 'flower-petal-7-box hidden'].indexOf(e.target.className) >= 0) {
            this.containerRef.current.firstChild.removeChild(e.target);

            this.timerd && clearTimeout(this.timerd);
            this.timerd = setTimeout(() => {
              ['flower-petal-1-box', 'flower-petal-2-box', 'flower-petal-3-box', 'flower-petal-4-box'].forEach((ckey) => {
                const container = document.querySelector(`.${ckey}`).children;
                for (let key = 0; key < container.length; key++) {
                  container[key].classList.add('start');
                }
              });
            }, 16);
          }

          e.target.parentNode
          && e.target.classList.remove(`${aniName[e.target.parentNode.className]}-back`);
        }
      });

    this.canvasRender();
  }

  canvasRender = () => {
    const canvasEle = document.getElementById('canvas');
    const ctx = canvasEle.getContext('2d');
    const pointNum = 200;
    const pointList = [];
    
    function Points() {
      const rgb = colorList[Math.round(Math.random() * 4)];
      this.x = Math.round(Math.random() * window.innerWidth);
      this.y = Math.round(Math.random() * window.innerHeight);
      this.a = Math.round(Math.random() * 1000) / 1000;
      this.rgb = `${rgb[0]},${rgb[1]},${rgb[2]}`;
      this.r = Math.round(Math.random() * 3 + 2);
      this.type = 'add';
    }

    for (let a = 0; a < pointNum; a++) {
      pointList[a] = new Points();
    }

    function update(point) {
      if (point.type === 'add') {
        point.a = Math.round((point.a + 0.005) * 1000) / 1000;
      } else {
        point.a = Math.round((point.a - 0.005) * 1000) / 1000;
      }
      

      if (point.a > 1) {
        point.type = 'mut';
      }
      
      if (point.a < 0) {
        point.type = 'add';
      }
    }

    function render() {
      pointList.forEach((point, ii) => {
        update(point);
        ctx.beginPath();
        ctx.fillStyle = `rgba(${point.rgb},${point.a})`;
        ctx.arc(point.x, point.y, point.r, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
      });
    }

    function renderCall() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      render();

      requestAnimationFrame(() => {
        renderCall();
      });
    }

    renderCall();
  };

  render() {
    return (
      <div ref={this.containerRef} className="flower-container">
        <canvas width={window.innerWidth} height={window.innerHeight} id="canvas" />
        <div/>
        <div className="flower-box">
          <div className="flower-petal-1-box">
            <div className="petal-top start" />
            <div className="petal-right start" />
            <div className="petal-bottom start" />
            <div className="petal-left start" />
          </div>
          <div className="flower-petal-2-box">
            <div className="petal-top start" />
            <div className="petal-right start" />
            <div className="petal-bottom start" />
            <div className="petal-left start" />
          </div>
          <div className="flower-petal-3-box">
            <div className="petal-top start" />
            <div className="petal-right start" />
            <div className="petal-bottom start" />
            <div className="petal-left start" />
          </div>
          <div className="flower-petal-4-box" />
          <div className="flower-center" />
        </div>
      </div>
    )
  }
}

export default Flower