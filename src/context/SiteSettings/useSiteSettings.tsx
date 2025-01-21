import { useContext } from "react";
import SiteSettingsContext from "./SiteSettingsContext";

export default function useSiteSettings() {
    const context = useContext(SiteSettingsContext);
    if(!context) {
        throw new Error("Site Settings must be used within a SiteSettings provider");
    }
    return context;
}