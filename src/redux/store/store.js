import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore  } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../reducers/loginReducer";
import { registerReducer } from "../reducers/registerReducer";
import { productosReducer } from "../reducers/productosReducer";
import { shoppingCartReducer } from "../reducers/shoppingCartReducer";

// Local Storage
import { guardarLocalStorage, obtenerLocalStorage } from "../../utils/LocalStorage";

import { modalReducer } from "../reducers/modalReducer";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const storageState = obtenerLocalStorage();

const reducersEnviar = combineReducers({
    login: loginReducer,
    register: registerReducer,
    products: productosReducer,
    cart: shoppingCartReducer,
    modal: modalReducer,
   
})

export const store = createStore(
    reducersEnviar,
    storageState,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

store.subscribe(() => {
    guardarLocalStorage(
        {
           modal: store.getState().modal
        }
   )
})
