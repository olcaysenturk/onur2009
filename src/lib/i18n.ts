import type { Language } from "@/types/i18n";
import { bg } from "@/locales/bg";
import { en } from "@/locales/en";
import { tr } from "@/locales/tr";
import type { Translation } from "@/locales/types";

export type { Translation } from "@/locales/types";

export const translations: Record<Language, Translation> = { en, tr, bg };

export function getTranslation(language: Language) {
  return translations[language];
}
