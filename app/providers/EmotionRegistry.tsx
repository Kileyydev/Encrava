"use client";

import * as React from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

export default function EmotionRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const cache = React.useMemo(() => {
    return createCache({ key: "css", prepend: true });
  }, []);

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}