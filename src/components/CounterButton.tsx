import useCounter from '../store/useCounter'

interface Props {
    type: 'increment' | 'decrement'
}
export default function CounterButton(props: Props) {
    const increment = useCounter(state => state.increment)

    const decrement = useCounter(state => state.decrement)
    const handleClick = () => {
        if (props.type === 'increment') {
            increment()
        } else {
            decrement()
        }
    }
    return (
        <button onClick={handleClick}>{props.type === 'increment' ? 'increment' : 'decrement'}</button>
    )
}
