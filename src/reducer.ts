import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { isOperation, Operation } from "./types"

export type CalculatorState = {
    currentValue: number
    displayedValue?: number
    currntOperation: Operation | undefined
    endCalculation: boolean
    enabledComma: boolean
}

const calc = (state: CalculatorState) => {
    if (state.currntOperation === "+") return state.currentValue + state.displayedValue!

    if (state.currntOperation === "x") return state.currentValue * state.displayedValue!

    if (state.currntOperation === "/") return state.currentValue / state.displayedValue!

    if (state.currntOperation === "–") return state.currentValue - state.displayedValue!
    if (state.currntOperation === "=") return state.currentValue
}
const initialState: CalculatorState = {
    endCalculation: false,
    currentValue: 0,
    currntOperation: undefined,
    enabledComma: false,
}

const calculatorSlice = createSlice({
    name: "calculator",
    initialState,
    reducers: {
        addNumber(state, action: PayloadAction<string>) {
            if (state.endCalculation) {
                state.displayedValue = state.enabledComma
                    ? parseFloat(`${action.payload}`) / 10
                    : parseFloat(`${action.payload}`)
                state.endCalculation = false
            } else {
                state.displayedValue = state.enabledComma
                    ? parseFloat(`${state.displayedValue || 0}${action.payload}`) / 10
                    : parseFloat(`${state.displayedValue || 0}${action.payload}`)
            }
            state.enabledComma = false
        },
        reset(state) {
            state.currentValue = 0
            state.displayedValue = undefined
            state.currntOperation = undefined
            state.endCalculation = false
        },
        changeSign(state) {
            state.displayedValue = (state.displayedValue || 0) * -1
        },
        removeLastNumber(state) {
            state.displayedValue = Number(state.displayedValue?.toString().slice(0, -1))
        },
        calculate(state) {
            state.displayedValue = calc(state)
            state.currentValue = 0
            state.endCalculation = true
            state.currntOperation = undefined
        },

        setCurrentOperation(state, action) {
            state.currntOperation = action.payload
            state.endCalculation = true
            state.currentValue = state.displayedValue!
        },

        execOperation(state) {
            if (state.currntOperation && !state.endCalculation) {
                state.currentValue = calc(state)!
                state.displayedValue = state.currentValue
                state.currntOperation = undefined
                state.endCalculation = true
            }
        },
        toggleComma(state) {
            state.enabledComma = !state.enabledComma
        },
    },
})

export const {
    addNumber,
    reset,
    changeSign,
    calculate,
    removeLastNumber,
    toggleComma,
    execOperation,
    setCurrentOperation,
} = calculatorSlice.actions

export default calculatorSlice.reducer
