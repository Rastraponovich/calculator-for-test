import { Handler, isOperation } from "./types"
import { modifierItems } from "./consts"

type Props = {
    text: string
    useHandler: Handler
}

export function Button({ text, useHandler }: Props): React.ReactElement {
    const handler = useHandler()
    return (
        <button
            key={text}
            className={[
                "numpad__item",
                modifierItems.indexOf(text) !== -1 ? "numpad__item--modifier" : undefined,
                isOperation(text) ? "numpad__item--operation" : undefined,
            ]
                .filter((i) => !!i)
                .join(" ")}
            onClick={handler}
        >
            {text}
        </button>
    )
}
