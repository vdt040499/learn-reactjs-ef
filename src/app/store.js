import userReducer from '../features/Auth/userSlice';
import counterReducer from '../features/Counter/counterSlice';
const { configureStore } = require('@reduxjs/toolkit');

const rootReducer = {
  counter: counterReducer,
  user: userReducer
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
