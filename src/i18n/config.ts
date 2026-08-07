export const locales = ['ko', 'en'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'ko';

export const localeLabels: Record<Locale, string> = {
	ko: '한국어',
	en: 'English',
};

export const openGraphLocales: Record<Locale, string> = {
	ko: 'ko_KR',
	en: 'en_US',
};

export function isLocale(value: string | undefined): value is Locale {
	return locales.includes(value as Locale);
}
