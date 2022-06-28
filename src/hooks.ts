import { useCallback } from "react"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "."
import {
    addNumber,
    changeSign,
    execOperation,
    toggleComma,
    removeLastNumber,
    reset,
    setCurrentOperation,
} from "./reducer"

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export function useReset() {
    const dispatch = useDispatch()
    return useCallback(() => {
        dispatch(reset())
    }, [dispatch])
}

export function useChangeSign() {
    const dispatch = useDispatch()
    return useCallback(() => {
        dispatch(changeSign())
    }, [dispatch])
}

export function useDelete() {
    const dispatch = useDispatch()
    return useCallback(() => {
        dispatch(removeLastNumber())
    }, [dispatch])
}

export function useNumber() {
    const dispatch = useDispatch()

    return useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            dispatch(addNumber(e.currentTarget.innerText))
        },
        [dispatch]
    )
}

export function useMultiply() {
    const dispatch = useDispatch()

    return useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            dispatch(execOperation())

            dispatch(setCurrentOperation("x"))
        },
        [dispatch]
    )
}
export function useDivide() {
    const dispatch = useDispatch()

    return useCallback(() => {
        dispatch(execOperation())
        dispatch(setCurrentOperation("/"))
    }, [dispatch])
}

export function useMinus() {
    const dispatch = useDispatch()

    return useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            dispatch(execOperation())
            dispatch(setCurrentOperation("–"))
        },
        [dispatch]
    )
}

export function usePlus() {
    const dispatch = useDispatch()

    return useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            dispatch(execOperation())
            dispatch(setCurrentOperation("+"))
        },
        [dispatch]
    )
}

export function useCalculate() {
    const dispatch = useDispatch()

    return useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            dispatch(execOperation())
        },
        [dispatch]
    )
}

export function useComma() {
    const dispatch = useDispatch()
    return useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            dispatch(toggleComma())
        },
        [dispatch]
    )
}
