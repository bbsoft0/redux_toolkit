import { useDispatch, useSelector } from "react-redux";
import { store } from "./store/store";
import { changeTheme } from "./features/themeSlice";
import Post from "./Post";

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