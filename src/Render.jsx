import React from 'react';
import withWindowSize from './with-window-size';

export class SmallComponent extends React.Component {
    render() {
        return <p>Small Component</p>;
    }
}

export class LargeComponent extends React.Component {
    render() {
        return <p>Large Component</p>;
    }
}

class MyComponent extends React.Component {
    render() {
        const { size } = this.props;
        if (size === 'small') return <SmallComponent />;
        else return <LargeComponent />;
    }
}

// 使用 withWindowSize 产生高阶组件，用于产生 size 属性传递给真正的业务组件
export default withWindowSize(MyComponent);
