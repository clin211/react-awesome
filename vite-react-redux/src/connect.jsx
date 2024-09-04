import { connect } from 'react-redux';
import { increment, decrement } from './actions';

function ConnectComponent ({ count, increment, decrement }) {
    return (
        <div>
            <button onClick={increment}> + </button>
            <p>{count}</p>
            <button onClick={decrement}> - </button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        count: state.count,
    }
}

const mapDispatchToProps = {
    increment,
    decrement,
}

// 使用 connect 函数连接组件和 Redux store
export default connect(mapStateToProps, mapDispatchToProps)(ConnectComponent)
