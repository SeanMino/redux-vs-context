This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# `context`

Context 通过组件树提供了一个传递数据的方法，从而避免了在每一个层级手动的传递 props 属性。

在一个典型的 React 应用中，数据是通过 props 属性由上向下（由父及子）的进行传递的，但这对于某些类型的属性而言是极其繁琐的（例如：地区偏好，UI主题），这是应用程序中许多组件都所需要的。 Context 提供了一种在组件之间共享此类值的方式，而不必通过组件树的每个层级显式地传递 props 。

### API
#### 1.React.createContext
#### 2.Provider
#### 3.Consumer

## `使用 React Context API 实现应用`

### `删除redux，使用context`

1.你必须从你的应用中移除 Redux 组件。为此，请打开终端，删除 redux 和 react-redux 库：npm rm redux react-redux

2.删除应用中对这些库的引用代码。打开 App.js 删除以下几行：

import {connect} from 'react-redux';

import actions from './actions';

3.在相同的文件中，用下方的代码替换最后一行（以 export default 开头的那一行）：

export default App;

4.要将之前的应用从 Redux 驱动的应用转换为使用 Context API，你需要一个 context 来存储应用的数据(该 context 将替换 Redux Store)。此外，你还需要一个 Context.Provider 组件，该组件包含 state、props 和正常的 React 组件生命周期。
为此，你需要在 src 目录中创建一个 providers.js 文件：

5.上面代码中定义的 Provider 类负责将其他组件封装在 ThemeContext.Provider 中。通过这样做，你可以让这些组件访问应用中的 state 和更改 state 的 searchTermChanged 方法。
若要在组件树中使用这些值，你需要创建一个 ThemeContext.Consumer 组件。这个组件将需要一个 render 渲染方法，该方法将接收上述 props 值作为参数。
因此，接下来，你需要在 src 目录中创建一个名为 consumer.js 的文件

6.为了完成迁移，你将打开 index.js 文件，并在 render() 函数中，用 Consumer 组件包装 App 组件。此外，你需要将 Consumer 包装在 Provider 组件中




