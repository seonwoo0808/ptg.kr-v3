import type { Locale } from '../config';
import type { Messages } from '../types';
import { blog as enBlog } from './en/blog';
import { common as enCommon } from './en/common';
import { landing as enLanding } from './en/landing';
import { portfolio as enPortfolio } from './en/portfolio';
import { blog as koBlog } from './ko/blog';
import { common as koCommon } from './ko/common';
import { landing as koLanding } from './ko/landing';
import { portfolio as koPortfolio } from './ko/portfolio';

const messages: Record<Locale, Messages> = {
	ko: {
		common: koCommon,
		landing: koLanding,
		portfolio: koPortfolio,
		blog: koBlog,
	},
	en: {
		common: enCommon,
		landing: enLanding,
		portfolio: enPortfolio,
		blog: enBlog,
	},
};

export function getMessages(locale: Locale): Messages {
	return messages[locale];
}
