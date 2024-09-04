import { useDispatch } from 'react-redux'
import { decrement, increment, incrementIfOdd } from './store/reducers/counter'

export const Increment = () => {
    const dispatch = useDispatch()
    return (
        <button onClick={() => dispatch(increment())}>Increment</button>
    )
}


export const Decrement = () => {
    const dispatch = useDispatch()
    return (
        <button onClick={() => dispatch(decrement())}>Decrement</button>
    )
}

export const IncrementIfOdd = () => {
    const dispatch = useDispatch()
    return (
        <button onClick={() => dispatch(incrementIfOdd())}>Increment if odd</button>
    )
}