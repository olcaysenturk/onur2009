"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { STORAGE_LANGUAGE_KEY } from "@/lib/constants";
import { getTranslation } from "@/lib/i18n";
import { setLanguage } from "@/store/language-slice";
import type { AppDispatch, RootState } from "@/store/store";
import type { Language } from "@/types/i18n";

export function useLanguage() {
  const dispatch = useDispatch<AppDispatch>();
  const language = useSelector((state: RootState) => state.language.current);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_LANGUAGE_KEY) as Language | null;
    if (stored === "en" || stored === "tr" || stored === "bg") {
      dispatch(setLanguage(stored));
    }
  }, [dispatch]);

  function changeLanguage(nextLanguage: Language) {
    window.localStorage.setItem(STORAGE_LANGUAGE_KEY, nextLanguage);
    dispatch(setLanguage(nextLanguage));
  }

  return {
    language,
    t: getTranslation(language),
    changeLanguage,
  };
}
