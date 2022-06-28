import { operationItems } from "./consts"

export type Handler = () => (e: React.MouseEvent<HTMLButtonElement>) => void

export type Operation = typeof operationItems[number]

export type Line = Map<string, Handler | null>

export function isOperation(value: string): value is Operation {
    return operationItems.includes(value as Operation)
}
