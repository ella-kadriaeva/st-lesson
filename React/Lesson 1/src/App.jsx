import React, { createElement } from 'react'
import Post from './components/Post/Post';

const App = () => {

  let title = createElement(
    'h1', 
    { className: 'title' }, 
    createElement('span', { className: 'span' }, 'Welcome React!')
  );

  function createElementV2(tagName, attr, children){
    let element = document.createElement(tagName);

    for (const item in attr) {
      element[item] = attr[item];
    }

    element.insertAdjacentHTML("beforeend", children)

    return element;
  }

  let titleV2 = createElementV2('h1', { className: 'title' }, 'Welcome React!')

  return (
    <>
      {/* {title} */}
      <h1 className='title'>Welcome React!</h1>

      <Post />
      <Post />
      <Post />
    </>
  )
}

export default App