import React from "react"
import { Result } from "./Result"
import { Numpad } from "./Numpad"

export function Calculator(): React.ReactElement {
    return (
        <div className="calculator">
            <Result />
            <Numpad />
        </div>
    )
}
