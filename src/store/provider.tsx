"use client";

import { Provider } from "react-redux";
import { useMemo } from "react";
import { makeStore } from "./store";

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const store = useMemo(() => makeStore(), []);

  return <Provider store={store}>{children}</Provider>;
}
