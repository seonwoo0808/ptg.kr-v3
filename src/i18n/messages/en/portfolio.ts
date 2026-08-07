import type { PortfolioMessages } from '../../types';

export const portfolio = {
	meta: {
		title: 'Portfolio - ptg.kr',
		description: "The portfolio of Seonwoo Jeong, a backend and DevOps engineer designing reliable systems.",
	},
	navigation: { home: 'Home', education: 'Education', experience: 'Experience', projects: 'Projects', awards: 'Awards', certifications: 'Certifications' },
	hero: {
		eyebrow: 'Backend & DevOps Engineer · Portfolio 2026',
		intro: 'Studying business and computer science, I am a backend engineer with experience in various IT projects.',
		availability: 'Open to work & collaboration',
		scroll: 'Explore my background',
	},
	labels: {
		selectedWork: 'Projects', projectCount: '03 projects', role: 'Role', period: 'Period',
		challenge: 'Challenge', approach: 'Approach', outcome: 'Outcome', openDetails: 'Learn more',
	},
	projects: [
		{
			id: 'proxmox-platform', index: '01', title: 'Proxmox VM Management Platform',
			summary: 'A backend system automating virtual machine and cluster operations',
			context: 'Infrastructure automation · Production system', role: 'Backend Lead', period: '2024—2026',
			challenge: 'Duplicate requests and incomplete state sync could cause real VM outages or data loss.',
			approach: ['Designed the backend architecture and domain model', 'Built VM lifecycle workflows on the Proxmox API', 'Centered validation, state handling, and recovery around consistency'],
			outcome: 'Unified repetitive VM operations into one consistent workflow and established a Docker-based delivery environment.',
			stack: ['Go', 'Fiber', 'PostgreSQL', 'Redis', 'Docker', 'Proxmox'],
		},
		{
			id: 'qenv', index: '02', title: 'Qenv',
			summary: 'A multi-tenant platform for securely managing team secrets and environment variables',
			context: 'Security · Authorization · SaaS', role: 'Product Engineer', period: '2025',
			challenge: 'Teams needed to stop leaking sensitive settings and retaining access after membership changed.',
			approach: ['Modeled Workspace → Environment Set → Secret hierarchy', 'Combined default roles and user exceptions in a resource ACL', 'Designed OAuth flows and a type-safe database schema'],
			outcome: 'Expressed tenant isolation and granular permission inheritance as one coherent domain model.',
			stack: ['TypeScript', 'React', 'Bun', 'PostgreSQL', 'Redis', 'Drizzle', 'OAuth'],
		},
		{
			id: 'rfb-proxy', index: '03', title: 'Web RFB Client & Proxy',
			summary: 'A real-time access layer connecting browsers to remote systems',
			context: 'Realtime · Networking · Access control', role: 'System Designer', period: '2025',
			challenge: 'Persistent bidirectional connections had to stay responsive, reject unauthorized clients, and scale horizontally.',
			approach: ['Designed an RFB web client and WebSocket relay', 'Validated access through short-lived connection tokens', 'Kept the server stateless for horizontal scaling'],
			outcome: 'Separated streaming and authorization concerns into a secure, scalable remote-access architecture.',
			stack: ['TypeScript', 'WebSocket', 'RFB', 'Redis', 'Docker'],
		},
	],
	education: {
		eyebrow: 'Education', title: 'Education',
		items: [
			{
				school: 'Inha University', degree: 'Double Major in Business Administration and Computer Engineering', period: 'In progress',
				description: 'I study how to understand business requirements and translate them into reliable technical systems.',
				highlights: ['Business processes and user requirement analysis', 'Computer science foundations for system design', 'Problem-solving across product and operations'],
			},
			{
				school: 'Korea Digital Media High School', degree: 'Web Programming · AI Track', period: '2022 — 2024',
				description: 'Graduated from the Web Programming department after completing the AI track.',
				highlights: ['Majored in Web Programming', 'Completed the AI track', 'Graduated in 2024'],
			},
		],
	},
	experience: {
		eyebrow: 'Experience', title: 'Experience', company: 'FlexIT Co.',
		role: 'Backend Developer · Tech Lead', period: '2024.11 — 2026.01',
		description: 'Led backend development and technical design for a Proxmox-based VM and cluster management automation product.',
		highlights: ['Designed the backend system and PostgreSQL schema', 'Built Proxmox cluster resource management features', 'Established Docker delivery and Redis state workflows', 'Guided technical decisions and development direction'],
	},
	awards: {
		eyebrow: 'Awards', title: 'Awards', empty: 'Awards will be added here as they are documented.',
		items: [
			{
				title: '2025 INHA SW NET-ZERO with Azure',
				issuer: 'Excellence Award · Co-hosted by Inha University and Sogang University', period: '2025.06.27',
				description: 'Received an excellence award in a competition to build solutions that contribute to carbon neutrality using Microsoft Azure.',
			},
			{
				title: '2023 Data Creator Camp',
				issuer: 'Grand Prize · Minister of Science and ICT Award', period: '2023.12.02',
				description: 'Won the grand prize in a data analysis and application competition hosted by the Ministry of Science and ICT and NIA.',
			},
			{
				title: '2023 Open Source Software Developer Competition',
				issuer: 'Special Award · Organizing Committee Chairperson Award', period: '2023.12.01',
				description: 'Received a special award for open-source software development and contribution in a competition hosted by the Ministry of Science and ICT.',
			},
			{
				title: '2023 Sejong City Public Data Startup Competition',
				issuer: 'Excellence Award · Mayor of Sejong Award', period: '2023.08.01',
				description: 'Received an excellence award for the feasibility and implementation of a startup idea using public data.',
			},
			{
				title: '2022 Open Source Software Developer Competition',
				issuer: 'Special Award · Organizing Committee Chairperson Award', period: '2022.11.29',
				description: 'Received a special award for open-source software development and contribution in a competition hosted by the Ministry of Science and ICT.',
			},
			{
				title: '2022 Smarteen App+ Challenge',
				issuer: 'Grand Prize · Minister of SMEs and Startups Award', period: '2022.10.29',
				description: 'Won the grand prize for creativity and implementation across app, AI, and hardware categories in a competition hosted by the Ministry of SMEs and Startups and SK Planet.',
			},
		],
	},
	certifications: {
		eyebrow: 'Certifications', title: 'Certifications', empty: 'Certifications will be added here as they are documented.',
		items: [
			{
				title: 'Network Administrator Level 2', issuer: 'Korea Information and Communications Qualification Association', period: '2023.10.10',
				description: 'A nationally accredited private certification covering network design, deployment, operations, and security.',
			},
			{
				title: 'Linux Master Level 2', issuer: 'Korea Association for ICT Promotion', period: '2022.12.30',
				description: 'A nationally accredited private certification covering Linux installation, operations, security, and troubleshooting.',
			},
		],
	},
	capabilities: {
		eyebrow: 'Capabilities', title: 'A stack spanning product and operations',
		groups: [
			{ title: 'Backend', items: ['Go', 'TypeScript', 'Python', 'Fiber', 'Elysia', 'REST API', 'WebSocket'] },
			{ title: 'Data', items: ['PostgreSQL', 'Redis', 'SQLite', 'Drizzle ORM', 'SQLC', 'LanceDB'] },
			{ title: 'Infrastructure', items: ['OCI', 'Docker', 'Proxmox', 'Kubernetes', 'Cloudflare', 'Caddy', 'Tailscale'] },
			{ title: 'Security', items: ['OAuth 2.1', 'OpenID Connect', 'JWT', 'JWKS', 'Passkey', 'AES-GCM'] },
		],
	},
	principles: {
		eyebrow: 'How I work', title: 'Principles for systems built to last',
		items: [
			{ index: '01', title: 'Design for operations', description: 'I consider failure, delivery, data consistency, and scale from the beginning.' },
			{ index: '02', title: 'Understand the whole product', description: 'I look beyond APIs to the links between users, operations, data, and infrastructure.' },
			{ index: '03', title: 'Automate repetition', description: 'I turn repeated manual operations into predictable systems and code.' },
		],
	},
	contact: {
		eyebrow: 'Start a conversation', title: 'Have a problem worth solving together?',
		description: 'I am always interested in backend systems, infrastructure automation, and thoughtful products.',
		email: 'Send an email', github: 'View GitHub', backToTop: 'Back to top',
	},
} satisfies PortfolioMessages;
