import { getRelativeLocaleUrl } from 'astro:i18n';
import { locales, type Locale } from './config';

export function getLocalizedPath(locale: Locale, path = ''): string {
	return getRelativeLocaleUrl(locale, path.replace(/^\//, ''));
}

export function getLocaleIndependentPath(pathname: string): string {
	const segments = pathname.split('/').filter(Boolean);

	if (locales.includes(segments[0] as Locale)) {
		segments.shift();
	}

	return segments.join('/');
}
