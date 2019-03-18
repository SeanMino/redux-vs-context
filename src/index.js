// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
// import {createStore} from 'redux';
// import reducers from './reducers';
// import App from './App';

// 使用 reducers 信息创建 store。
// 这是因为 reducers 是 Redux Store 的控制中心。
// const store = createStore(reducers);

// ReactDOM.render(
//   <Provider store={store}>
//     <App/>
//   </Provider>,
//   document.getElementById('root')
// );



import React from 'react';
import ReactDOM from 'react-dom';
import Provider from './providers';
import Consumer from './consumer';
import App from './App';

ReactDOM.render(
  <Provider>
    <Consumer>
      <App />
    </Consumer>
  </Provider>,
  document.getElementById('root')
);

