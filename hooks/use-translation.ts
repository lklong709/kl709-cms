"use client";

import { useState } from "react";

export type Language = "en" | "vi";

export interface Translation {
  en: string;
  vi: string;
}

export const useTranslation = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en");

  const translate = (translations: Translation): string => {
    return translations[currentLanguage];
  };

  const switchLanguage = () => {
    setCurrentLanguage(currentLanguage === "en" ? "vi" : "en");
  };

  return {
    currentLanguage,
    translate,
    switchLanguage,
  };
};