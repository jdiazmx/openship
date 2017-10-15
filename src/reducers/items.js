const initialState = {
  items: [
    {
      title: 'yellow bike',
      src: 'https://i.pinimg.com/736x/40/ba/c8/40bac89fdf296d77e22abe228739d87f--art-students-candy-land.jpg',
      description: 'Travel wit style and comfort',
    },
    {
      title: 'unicorn bike',
      src: 'https://i.pinimg.com/736x/54/af/51/54af512f77758d98397e3497d391c107--unicorn-bike-unicorn-mask.jpg',
      description: 'Travel wit more style and comfort',
    },
    {
      title: 'banana',
      src: 'https://i5.walmartimages.ca/images/Enlarge/580/6_r/875806_R.jpg',
      description: 'helps you become less hungry',
    },
    {
      title: 'yellow bike2',
      src: 'https://i.pinimg.com/736x/40/ba/c8/40bac89fdf296d77e22abe228739d87f--art-students-candy-land.jpg',
      description: 'Travel wit style and comfort',
    },
    {
      title: 'unicorn bike2',
      src: 'https://i.pinimg.com/736x/54/af/51/54af512f77758d98397e3497d391c107--unicorn-bike-unicorn-mask.jpg',
      description: 'Travel wit more style and comfort',
    },
    {
      title: 'banana2',
      src: 'https://i5.walmartimages.ca/images/Enlarge/580/6_r/875806_R.jpg',
      description: 'helps you become less hungry',
    },
    {
      title: 'yellow bike3',
      src: 'https://i.pinimg.com/736x/40/ba/c8/40bac89fdf296d77e22abe228739d87f--art-students-candy-land.jpg',
      description: 'Travel wit style and comfort',
    },
    {
      title: 'unicorn bike3',
      src: 'https://i.pinimg.com/736x/54/af/51/54af512f77758d98397e3497d391c107--unicorn-bike-unicorn-mask.jpg',
      description: 'Travel wit more style and comfort',
    },
    {
      title: 'banana3',
      src: 'https://i5.walmartimages.ca/images/Enlarge/580/6_r/875806_R.jpg',
      description: 'helps you become less hungry',
    }
  ]
}

function items(state = initialState, action) {
  switch(action.type) {
    case 'SET_ITEM_INFO':
      const items = [ ...state.items ];
      items[action.itemIndex] = { ...items[action.itemIndex], ...action.itemInfo };
      return { items };
    default:
      return state;
  }
}

export default items;
