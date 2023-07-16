import { configureStore } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
const store: ToolkitStore = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare(),
  devTools: true,
});
export default store;
