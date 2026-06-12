import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Language } from "@/types/i18n";

type LanguageState = {
  current: Language;
};

const initialState: LanguageState = {
  current: "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<Language>) {
      state.current = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export const languageReducer = languageSlice.reducer;
