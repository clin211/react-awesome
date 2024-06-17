import React from 'react';

// 定义一个高阶组件 withWindowSize
const withWindowSize = Component => {
    // 定义一个新的组件 WrappedComponent，这个组件的主要作用是监听窗口大小的变化
    class WrappedComponent extends React.PureComponent {
        constructor(props) {
            super(props);
            // 在组件的state中保存当前窗口的大小
            this.state = {
                size: this.getSize(),
            };
        }

        // 在组件被挂载到DOM后，添加一个resize事件监听器
        componentDidMount() {
            window.addEventListener('resize', this.handleResize);
        }

        // 在组件被卸载前，移除resize事件监听器
        componentWillUnmount() {
            window.removeEventListener('resize', this.handleResize);
        }

        // 获取当前窗口的大小，如果窗口宽度大于500，则返回'large'，否则返回'small'
        getSize() {
            return window.innerWidth > 500 ? 'large' : 'small';
        }

        // 定义resize事件的处理函数，当窗口大小变化时，更新state中的size
        handleResize = () => {
            const currentSize = this.getSize();
            this.setState({ size: currentSize });
        };

        // 在render方法中，将窗口的大小作为属性传递给被包装的组件
        render() {
            return <Component size={this.state.size} />;
        }
    }
    // 返回新的组件
    return WrappedComponent;
};

export default withWindowSize;
