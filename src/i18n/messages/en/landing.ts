import type { LandingMessages } from '../../types';

export const landing = {
	meta: {
		title: 'Seonwoo Jeong - ptg.kr',
		description:
			'I am Seonwoo Jeong, a backend developer studying business administration and computer science while working on a variety of projects.',
	},
	intro: {
		line1: 'Hello! I am Seonwoo Jeong, a backend developer.',
		line2: 'I study business administration and computer science',
		line3: 'while working on a variety of projects.',
	},
	navigation: {
		portfolio: { description: 'Work & projects' },
		blog: { description: 'Tech news & lessons learned' },
	},
} satisfies LandingMessages;
