import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { medicineReducer } from '../reducer/reducer';
import { composeWithDevTools } from 'redux-devtools-extension'

const loggerMiddleware = createLogger();

const store = createStore(medicineReducer,
    composeWithDevTools(
        applyMiddleware(thunk, loggerMiddleware)
    )
);

store.subscribe(() => {
    console.log(store.getState());
    console.log(store.dispatch);
});
export default store;