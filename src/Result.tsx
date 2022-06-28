import { useSelector } from "react-redux"
import { CalculatorState } from "./reducer"

export function Result() {
    const { displayedValue, currentValue, currntOperation } = useSelector((state: CalculatorState) => state)
    return (
        <div className="calculator-result">
            <span>{currntOperation} </span>
            <span>{displayedValue || currentValue}</span>
        </div>
    )
}
