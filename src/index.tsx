import { configureStore } from "@reduxjs/toolkit"
import { StrictMode } from "react"
//@ts-ignore
import * as ReactDOMClient from "react-dom/client"
import { Provider } from "react-redux"
import reducer from "./reducer"

import App from "./App"

const rootElement = document.getElementById("root")
const root = ReactDOMClient.createRoot(rootElement)

const store = configureStore({
    reducer,
})

root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
