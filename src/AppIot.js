import { Provider } from "react-redux"
import { AppRoute } from "./routes/AppRoute"
import { store } from "./store/store"

export const AppIot = () => {
    return (
        <Provider store={store}>
            <AppRoute />
        </Provider>
    )
}