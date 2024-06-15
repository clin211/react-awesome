import React, { Component } from 'react';

class GetSnapshotBeforeUpdate extends Component {
    constructor(props) {
        super(props);
        // 创建一个引用来访问 DOM 元素
        this.chatContainerRef = React.createRef();
        this.state = {
            // 初始状态为空消息列表
            messages: [],
        };
    }

    // 假设消息通过某些外部操作或 props 添加到组件中
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot !== null) {
            // 使用快照值恢复滚动位置
            this.chatContainerRef.current.scrollTop =
                this.chatContainerRef.current.scrollHeight - snapshot;
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // 只有在消息有变化时才获取快照
        if (prevState.messages.length < this.state.messages.length) {
            const chatContainer = this.chatContainerRef.current;
            // 计算从底部开始的滚动位置
            return chatContainer.scrollHeight - chatContainer.scrollTop;
        }
        return null; // 如果没有新的消息，返回 null
    }

    render() {
        return (
            <div
                ref={this.chatContainerRef}
                style={{ height: '300px', overflowY: 'auto' }}>
                {this.state.messages.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
            </div>
        );
    }
}

export default GetSnapshotBeforeUpdate;
