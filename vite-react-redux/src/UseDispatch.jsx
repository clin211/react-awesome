import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from "./store/reducers/counter"

function UseDispatch () {
    const { count } = useSelector((state) => state.counter)
    // 使用useDispatch()函数
    const dispatch = useDispatch()
    return (
        <div>
            {/* 加 */}
            <button onClick={() => dispatch(increment())}> + </button>
            {count}
            {/* 减 */}
            <button onClick={() => dispatch(decrement())}> - </button>
        </div>
    )
}

export default UseDispatch
