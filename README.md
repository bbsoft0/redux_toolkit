# redux_toolkit
Light/Dark Theme example using redux toolkit

With Redux Toolkit, writing Redux is easier and speeds up development. In common Redux, we need to define the state, reducer, and action separately. However, in Redux Toolkit, we define it together inside createSlice. It's cleaner and more straightforward. It saves a lot of time because we have to write less boilerplate code with Redux Toolkit than with common redux.

Redux Toolkit starts with two key APIs that simplify the common things we do in Redux.

configureStore: to setup Redux store with a single function call
createSlice: lets us write reducers that use an Immer library, enabling us to write immutable updates.
```
npm create vite@latest redux_toolkit
npm install react-redux
npm install @reduxjs/toolkit react-redux
```

in src/features/themeSlice.ts
```
export const themeSlice = createSlice({
 name: "theme",
 initialState: intialState,
 reducers: {
   changeTheme: (state, action: PayloadAction<string>) => {
	 state.value.activeTheme = action.payload;
   }
 }
});
```

in  src/store/store.ts , add the slice reducer to store
```
import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../features/themeSlice";
export const store = configureStore({
  reducer: {
	theme: themeSlice,
  },
});
```

index.tsx , To allow all the components to access the store in our application, we must pass the store as a prop into the Provider imported from ReactJS Redux.
```
root.render(
 <StrictMode>
   <Provider store={store}>
	 <App />
   </Provider>
 </StrictMode>
);

page.tsx We can read the state and update it using the UseSelector and UseDispatch provided by ReactJS-Redux Hook
```
const Page = () => {
 const theme = useSelector(
   (state: ReturnType<typeof store.getState>) => state.theme.value
 );
 
 const dispatch = useDispatch();
 
 const isDark = theme.activeTheme === "dark";
 
 const handleChangeTheme = () => {
   if (isDark) {
	 dispatch(changeTheme("light"));
   } else {
	 dispatch(changeTheme("dark"));
   }
 };
 
 const style = {
   background: isDark ? theme.dark.background : theme.light.background,
   color: isDark ? theme.dark.foreground : theme.light.foreground
 };
 
 return (
   <div className="container" style={style}>
	 <div className="d-flex justify-content-between">
	   <button className="btn btn-primary" onClick={handleChangeTheme}>
		 {isDark ? "Light Theme" : "Dark Theme"}
	   </button>
	   <p className="mt-3">Current theme is {theme.activeTheme} </p>
	 </div>
	 <Post />
 </div>
 );
};
export default Page;
```
