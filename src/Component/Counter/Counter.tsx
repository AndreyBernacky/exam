import s from "./Counter.module.css"

type counterPropsType = {
    counter: number
    setCounter: (v: number) => void
    resetDisabled: boolean
    incDisabled: boolean
}

export const Counter = (props: counterPropsType) => {

    const onInc = () => {
        props.setCounter(props.counter + 1)
    }
    const onReset = () => props.setCounter(0)

    return (
        <div className={s.counterWrap}>
            <div className={!props.incDisabled ? s.countNum : s.redNum}>
                {props.counter}
            </div>
            <div className={s.countButtons}>
                <button onClick={onInc} disabled={props.incDisabled}>inc</button>
                <button onClick={onReset} disabled={props.resetDisabled}>reset</button>
            </div>
        </div>
    )
}