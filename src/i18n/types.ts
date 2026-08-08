export interface CommonMessages {
	localeSelectorLabel: string;
}

export interface PageMetaMessages {
	title: string;
	description: string;
}

export interface LandingMessages {
	meta: PageMetaMessages;
	intro: {
		line1: string;
		line2: string;
		line3: string;
	};
	navigation: {
		portfolio: { description: string };
		blog: { description: string };
	};
}

export interface SectionMessages {
	meta: PageMetaMessages;
}

export interface BlogMessages extends SectionMessages {
	navigation: {
		home: string;
		portfolio: string;
	};
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
		intro: string;
		availability: string;
		scroll: string;
	};
	labels: {
		selectedWork: string;
		role: string;
		period: string;
		challenge: string;
		approach: string;
		outcome: string;
		openDetails: string;
	};
	projects: PortfolioProject[];
	education: {
		title: string;
		items: PortfolioEducation[];
	};
	experience: {
		title: string;
		company: string;
		role: string;
		period: string;
		description: string;
		highlights: string[];
	};
	awards: {
		title: string;
		empty: string;
		items: PortfolioRecord[];
	};
	certifications: {
		title: string;
		empty: string;
		items: PortfolioRecord[];
	};
	capabilities: {
		title: string;
		description: string;
	};
	contact: {
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
