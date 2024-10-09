'use client';

import { DOWNLOAD, useAnalytics } from '@prezly/analytics-nextjs';
import type { Locale } from '@prezly/theme-kit-nextjs';
import { translations } from '@prezly/theme-kit-nextjs';

import { FormattedMessage } from '@/adapters/client';
import { ButtonLink } from '@/components/Button';
import { IconDownload } from '@/icons';

import styles from './DownloadLink.module.scss';

interface Props {
    localeCode: Locale.Code;
    href: string;
}

export function DownloadLink({ localeCode, href }: Props) {
    const { track } = useAnalytics();

    function handleClick() {
        track(DOWNLOAD.MEDIA_GALLERY);
    }

    return (
        <ButtonLink
            variation="primary"
            forceRefresh
            href={href}
            className={styles.link}
            onClick={handleClick}
        >
            <FormattedMessage locale={localeCode} for={translations.actions.download} />
            <IconDownload width={16} height={16} className={styles.icon} />
        </ButtonLink>
    );
}
