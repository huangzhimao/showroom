export const config = [
  //起始点操作配置
  {
    left: {
      action: '',
      moveToPos: 0,
      delay: 0
    },
    right: {
      action: 'move_to_next',//指令
      moveToPos: 1000,//移动到哪个位置
      delay: 5000//移动时间是多少
    }
  },

  //2017
  {
    left: {
      action: 'move_to_pre',
      moveToPos: 0,
      delay: 5000
    },
    right: {
      action: 'move_to_next',
      moveToPos: 2300,
      delay: 16000,
    }
  },
  //2018
  {
    left: {
      action: 'move_to_pre',
      moveToPos: 2300,
      delay: 16000
    },
    right: {
      action: 'move_to_next',
      moveToPos: 4300,
      delay: 16000,
    }
  },
  //2019
  {
    left: {
      action: 'move_to_pre',
      moveToPos: 4300,
      delay: 16000
    },
    right: {
      action: 'move_to_next',
      moveToPos: 6300,
      delay: 16000,
    }
  },
  //2020
  {
    left: {
      action: 'move_to_pre',
      moveToPos: 6300,
      delay: 16000
    },
    right: {
      action: 'move_to_next',
      moveToPos: 8300,
      delay: 16000,
    }
  },
  //2021
  {
    left: {
      action: 'move_to_initial',
      moveToPos: 0,
      delay: 36000
    },
    right: {
      action: 'move_to_next',
      moveToPos: 10300,
      delay: 16000,
    }
  },
]



//总长度 
export const totalWidth = 12000;
//起始左边距离
export const startMargin = 1230;
//每次移动距离
export const moveDistance = 2000;
//每个发展历程之间的间距
export const lineItemMargin = 400;
//每次移动的时间
export let moveTime = 200
//上下偏移
export const verOffset = 15
//节点高度
export const itemHeight = 70

