"use client";
import { useState } from "react";
import SiteSettings from "@/types/siteSettings";
import SiteSettingsContext from "./SiteSettingsContext";
import defaultSiteSettings from "@/defaultObjects/defaultSiteSettings";

export default function SiteSettingsProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [siteSettings, setSiteSettings] = useState<SiteSettings>(defaultSiteSettings);
  
  return (
    <>
      <SiteSettingsContext.Provider value={{ siteSettings, setSiteSettings }}>
        {children}
      </SiteSettingsContext.Provider>
    </>
  );
}