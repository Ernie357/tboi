import { createContext, Dispatch, SetStateAction } from "react";
import SiteSettings from '../../types/siteSettings'

interface SiteSettingsContextType {
    siteSettings: SiteSettings,
    setSiteSettings: Dispatch<SetStateAction<SiteSettings>>
}

const SiteSettingsContext = createContext<SiteSettingsContextType | undefined>(undefined);

export default SiteSettingsContext;