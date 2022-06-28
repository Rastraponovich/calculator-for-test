import React from "react"
import {
    useReset,
    useChangeSign,
    useDelete,
    useDivide,
    useNumber,
    useMultiply,
    useComma,
    useMinus,
    usePlus,
    useCalculate,
} from "./hooks"
import { Line } from "./types"
import { Button } from "./Button"

const buttons: ReadonlyArray<Line> = [
    new Map([
        ["C", useReset],
        ["±", useChangeSign],
        ["←", useDelete],
        ["/", useDivide],
    ]),
    new Map([
        ["7", useNumber],
        ["8", useNumber],
        ["9", useNumber],
        ["x", useMultiply],
    ]),
    new Map([
        ["4", useNumber],
        ["5", useNumber],
        ["6", useNumber],
        ["–", useMinus],
    ]),
    new Map([
        ["1", useNumber],
        ["2", useNumber],
        ["3", useNumber],
        ["+", usePlus],
    ]),
    new Map([
        [" ", null],
        ["0", useNumber],
        [",", useComma],
        ["=", useCalculate],
    ]),
]

const anonumousHandler = () => () => {}

export function Numpad() {
    return (
        <div className="numpad">
            {buttons.map((line, index) => (
                <div className="numpad__line" key={index}>
                    {Array.from(line.entries()).map(([text, handler]) => (
                        <Button key={text} text={text} useHandler={handler || anonumousHandler} />
                    ))}
                </div>
            ))}
        </div>
    )
}
