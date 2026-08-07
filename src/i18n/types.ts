export interface CommonMessages {
	navigationLabel: string;
	socialLinksLabel: string;
	localeSelectorLabel: string;
}

export interface PageMetaMessages {
	title: string;
	description: string;
}

export interface LandingMessages {
	meta: PageMetaMessages;
	role: string;
	name: string;
	intro: {
		line1: string;
		line2: string;
		line3: string;
	};
	navigation: {
		portfolio: { label: string; description: string };
		blog: { label: string; description: string };
	};
	profile: {
		eyebrow: string;
		title: string;
		live: string;
		totalCodeTime: string;
		since: string;
		hoursUnit: string;
		dailyAverage: string;
		coreStack: string;
	};
	status: string;
}

export interface SectionMessages {
	meta: PageMetaMessages;
}

export interface BlogMessages extends SectionMessages {
	navigation: {
		home: string;
		portfolio: string;
	};
	status: string;
	title: string;
	note: string;
	backHome: string;
	viewPortfolio: string;
}

export interface PortfolioProject {
	id: string;
	index: string;
	title: string;
	summary: string;
	context: string;
	role: string;
	period: string;
	challenge: string;
	approach: string[];
	outcome: string;
	stack: string[];
}

export interface PortfolioRecord {
	title: string;
	issuer: string;
	period: string;
	description?: string;
}

export interface PortfolioEducation {
	school: string;
	degree: string;
	period: string;
	description: string;
	highlights: string[];
}

export interface PortfolioMessages extends SectionMessages {
	navigation: {
		home: string;
		education: string;
		experience: string;
		projects: string;
		awards: string;
		certifications: string;
	};
	hero: {
		eyebrow: string;
		intro: string;
		availability: string;
		scroll: string;
	};
	labels: {
		selectedWork: string;
		projectCount: string;
		role: string;
		period: string;
		challenge: string;
		approach: string;
		outcome: string;
		openDetails: string;
	};
	projects: PortfolioProject[];
	education: {
		eyebrow: string;
		title: string;
		items: PortfolioEducation[];
	};
	experience: {
		eyebrow: string;
		title: string;
		company: string;
		role: string;
		period: string;
		description: string;
		highlights: string[];
	};
	awards: {
		eyebrow: string;
		title: string;
		empty: string;
		items: PortfolioRecord[];
	};
	certifications: {
		eyebrow: string;
		title: string;
		empty: string;
		items: PortfolioRecord[];
	};
	capabilities: {
		eyebrow: string;
		title: string;
		groups: Array<{ title: string; items: string[] }>;
	};
	principles: {
		eyebrow: string;
		title: string;
		items: Array<{ index: string; title: string; description: string }>;
	};
	contact: {
		eyebrow: string;
		title: string;
		description: string;
		email: string;
		github: string;
		backToTop: string;
	};
}

export interface Messages {
	common: CommonMessages;
	landing: LandingMessages;
	portfolio: PortfolioMessages;
	blog: BlogMessages;
}
