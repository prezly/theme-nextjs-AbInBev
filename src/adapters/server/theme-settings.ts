import { ThemeSettingsAdapter } from '@prezly/theme-kit-nextjs/server';

import { DEFAULT_THEME_SETTINGS, type ThemeSettings } from '@/theme-settings';

import { initPrezlyClient } from './prezly';

export const { useThemeSettings: themeSettings } = ThemeSettingsAdapter.connect<ThemeSettings>({
    defaults: DEFAULT_THEME_SETTINGS,
    settings: async () => {
        const settings = await initPrezlyClient().contentDelivery.themeSettings();
        // Force grid layout instead of masonry
        return {
            ...settings,
            layout: 'grid',
        };
    },
});
