import { createStore } from 'redux';
import rootReducer from './rootReducer';

// const dummyReducer = () => {
//     return 100;
// }
// const store = createStore(dummyReducer);

const store = createStore(rootReducer);


export default store;