import type { LandingMessages } from '../../types';

export const landing = {
	meta: {
		title: "정선우(Seonwoo Jeong) - ptg.kr'",
		description:
			'안녕하세요! 저는 백엔드 개발자 정선우입니다. 현재는 경영학/컴퓨터공학을 전공하며, 다양한 프로젝트에 참여하고 있습니다.',
	},
	role: 'Backend & DevOps Engineer',
	name: 'Seonwoo Jeong',
	intro: {
		line1: '안녕하세요! 저는 백엔드 개발자 정선우입니다.',
		line2: '현재는 경영학/컴퓨터공학을 전공하며,',
		line3: '다양한 프로젝트에 참여하고 있습니다.',
	},
	navigation: {
		portfolio: { label: 'Portfolio', description: '작업물 & 프로젝트' },
		blog: { label: 'Blog', description: '기술 소식 & 경험 공유' },
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
