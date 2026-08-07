import type { LandingMessages } from '../../types';

export const landing = {
	meta: {
		title: 'Seonwoo Jeong - ptg.kr',
		description:
			'I am Seonwoo Jeong, a backend developer studying business administration and computer science while working on a variety of projects.',
	},
	role: 'Backend & DevOps Engineer',
	name: 'Seonwoo Jeong',
	intro: {
		line1: 'Hello! I am Seonwoo Jeong, a backend developer.',
		line2: 'I study business administration and computer science',
		line3: 'while working on a variety of projects.',
	},
	navigation: {
		portfolio: { label: 'Portfolio', description: 'Work & projects' },
		blog: { label: 'Blog', description: 'Tech news & lessons learned' },
	},
	profile: {
		eyebrow: 'Developer telemetry',
		title: 'Build Log',
		live: 'Live',
		totalCodeTime: 'Total code time',
		since: 'Since Dec. 2022',
		hoursUnit: 'hrs',
		dailyAverage: 'Daily average',
		coreStack: 'Core stack',
	},
	status: 'ready',
} satisfies LandingMessages;
