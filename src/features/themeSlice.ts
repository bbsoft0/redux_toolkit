import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Themes {
  dark: {
    foreground: string;
    background: string;
  };
  light: {
    foreground: string;
    background: string;
  };
  activeTheme: string;
}

interface ThemesState {
  value: Themes;
}

const initialState: ThemesState = {
  value: {
    dark: {
      foreground: "#fff",
      background: "#333"
    },
    light: {
      foreground: "#333",
      background: "#f9f5f5"
    },
    activeTheme: "dark"
  }
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<string>) => {
      state.value.activeTheme = action.payload;
    }
  }
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
