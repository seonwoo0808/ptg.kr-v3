import type { PortfolioMessages } from '../../types';

export const portfolio = {
	meta: {
		title: '포트폴리오 - ptg.kr',
		description: '백엔드와 인프라를 설계하고 운영하는 엔지니어 정선우의 포트폴리오입니다.',
	},
	navigation: { home: '홈', education: '학력', experience: '경력', projects: '프로젝트', awards: '수상', certifications: '자격증' },
	hero: {
		eyebrow: 'Backend & DevOps Engineer · Portfolio 2026',
		intro: '경영과 컴퓨터공학을 공부하며 여러 IT 프로젝트를 경험하고 있는 백엔드 엔지니어',
		availability: '현재 새로운 커리어 기회를 탐색하고 있습니다',
		scroll: '이력 살펴보기',
	},
	labels: {
		selectedWork: '프로젝트', projectCount: '03 projects', role: '역할', period: '기간',
		challenge: '문제', approach: '접근 방식', outcome: '핵심 결과', openDetails: '더 알아보기',
	},
	projects: [
		{
			id: 'proxmox-platform', index: '01', title: 'Proxmox VM Management Platform',
			summary: '가상머신과 클러스터 운영을 자동화하는 백엔드 시스템',
			context: 'Infrastructure automation · Production system', role: 'Backend Lead', period: '2024—2026',
			challenge: '중복 요청과 불완전한 상태 동기화가 실제 VM 장애나 데이터 손실로 이어질 수 있는 환경이었습니다.',
			approach: ['전체 백엔드 아키텍처와 도메인 모델 설계', 'Proxmox API 기반 VM 생성·수정·삭제 흐름 구현', '요청 검증, 상태 관리, 오류 복구를 중심으로 일관성 확보'],
			outcome: '반복적인 VM 운영 업무를 하나의 일관된 관리 흐름으로 통합하고 Docker 기반 배포 환경을 구축했습니다.',
			stack: ['Go', 'Fiber', 'PostgreSQL', 'Redis', 'Docker', 'Proxmox'],
		},
		{
			id: 'qenv', index: '02', title: 'Qenv',
			summary: '팀의 환경 변수와 시크릿을 안전하게 관리하는 멀티테넌트 플랫폼',
			context: 'Security · Authorization · SaaS', role: 'Product Engineer', period: '2025',
			challenge: '프로젝트별 설정 공유 과정에서 민감 정보가 노출되고, 구성원 변경 후에도 접근 권한이 남는 문제를 해결해야 했습니다.',
			approach: ['Workspace → Environment Set → Secret 계층형 모델 설계', '기본 권한과 사용자 예외를 결합한 리소스 단위 ACL 구성', 'OAuth 인증과 타입 안전한 데이터베이스 스키마 설계'],
			outcome: '멀티테넌트 데이터 격리와 세분화된 권한 상속을 하나의 명확한 도메인 모델로 정리했습니다.',
			stack: ['TypeScript', 'React', 'Bun', 'PostgreSQL', 'Redis', 'Drizzle', 'OAuth'],
		},
		{
			id: 'rfb-proxy', index: '03', title: 'Web RFB Client & Proxy',
			summary: '브라우저와 원격 시스템을 연결하는 실시간 접속 레이어',
			context: 'Realtime · Networking · Access control', role: 'System Designer', period: '2025',
			challenge: '지속적인 양방향 연결을 유지하면서도 인증되지 않은 접속을 차단하고 서버 확장성을 확보해야 했습니다.',
			approach: ['RFB 웹 클라이언트와 WebSocket 중계 구조 설계', '짧은 수명의 토큰을 활용한 접속 권한 검증', '수평 확장을 고려한 Stateless 서버 구성'],
			outcome: '실시간 스트림과 인증의 책임을 분리해 안전하게 확장 가능한 원격 접속 구조를 구현했습니다.',
			stack: ['TypeScript', 'WebSocket', 'RFB', 'Redis', 'Docker'],
		},
	],
	education: {
		eyebrow: 'Education', title: '학력',
		items: [
			{
				school: '인하대학교', degree: '경영학 주전공 · 컴퓨터공학 복수전공', period: '재학 중',
				description: '비즈니스 요구사항을 이해하고 이를 안정적인 기술 구조로 구현하는 방법을 공부하고 있습니다.',
				highlights: ['비즈니스 프로세스와 사용자 요구사항 분석', '컴퓨터공학 기반의 시스템 설계 및 구현', '제품과 운영 환경을 함께 고려하는 문제 해결'],
			},
			{
				school: '한국디지털미디어고등학교', degree: '웹프로그래밍과 · AI 트랙', period: '2022 — 2024',
				description: '웹프로그래밍과 AI 트랙을 이수하고 졸업했습니다.',
				highlights: ['웹프로그래밍과 전공', 'AI 트랙 이수', '2024년 졸업'],
			},
		],
	},
	experience: {
		eyebrow: 'Experience', title: '경력', company: 'FlexIT Co.',
		role: 'Backend Developer · Tech Lead', period: '2024.11 — 2026.01',
		description: 'Proxmox 기반 가상머신 및 클러스터 관리 자동화 솔루션의 백엔드 개발과 기술 설계를 담당했습니다.',
		highlights: ['백엔드 시스템과 PostgreSQL 스키마 설계', 'Proxmox 클러스터 자원 관리 기능 개발', 'Docker 배포 환경 및 Redis 상태 처리 구조 구축', '프로젝트 기술 의사결정과 개발 방향 관리'],
	},
	awards: {
		eyebrow: 'Awards', title: '수상 이력', empty: '수상 이력은 추후 업데이트할 예정입니다.',
		items: [
			{
				title: '2025 INHA SW NET-ZERO with Azure',
				issuer: '우수상 · 인하대학교·서강대학교 공동주최', period: '2025.06.27',
				description: 'Microsoft Azure를 활용해 탄소중립에 기여하는 작품을 개발하는 대회에서 우수상을 수상했습니다.',
			},
			{
				title: '2023 데이터 크리에이터 캠프',
				issuer: '대상 · 과학기술정보통신부 장관상', period: '2023.12.02',
				description: '과학기술정보통신부와 NIA가 주최한 데이터 분석 및 활용 대회에서 대상을 수상했습니다.',
			},
			{
				title: '2023 공개SW개발자대회',
				issuer: '특별상 · 공개SW개발자대회 조직위원장상', period: '2023.12.01',
				description: '과학기술정보통신부가 주최한 대회에서 오픈소스 소프트웨어 개발 및 기여를 인정받아 특별상을 수상했습니다.',
			},
			{
				title: '2023 세종특별자치시 공공데이터 창업경진대회',
				issuer: '우수상 · 세종특별자치시장상', period: '2023.08.01',
				description: '공공데이터를 활용한 창업 아이디어의 실현 가능성과 구현력을 인정받아 우수상을 수상했습니다.',
			},
			{
				title: '2022 공개SW개발자대회',
				issuer: '특별상 · 공개SW개발자대회 조직위원장상', period: '2022.11.29',
				description: '과학기술정보통신부가 주최한 대회에서 오픈소스 소프트웨어 개발 및 기여를 인정받아 특별상을 수상했습니다.',
			},
			{
				title: '2022 Smarteen App+ Challenge',
				issuer: '대상 · 중소벤처기업부 장관상', period: '2022.10.29',
				description: '중소벤처기업부와 SK Planet이 주최한 대회에서 앱, 인공지능, 하드웨어 분야의 아이디어와 구현력을 인정받아 대상을 수상했습니다.',
			},
		],
	},
	certifications: {
		eyebrow: 'Certifications', title: '자격증', empty: '자격증 정보는 추후 업데이트할 예정입니다.',
		items: [
			{
				title: '네트워크관리사 2급', issuer: '한국정보통신자격협회', period: '2023.10.10',
				description: '네트워크 설계, 구축, 운영 및 보안에 관한 지식을 평가하는 공인민간자격입니다.',
			},
			{
				title: '리눅스마스터 2급', issuer: '한국정보통신진흥협회', period: '2022.12.30',
				description: '리눅스 시스템의 설치, 운영, 보안 및 트러블슈팅 능력을 평가하는 공인민간자격입니다.',
			},
		],
	},
	capabilities: {
		eyebrow: 'Capabilities', title: '제품과 운영을 함께 보는 기술 스택',
		groups: [
			{ title: 'Backend', items: ['Go', 'TypeScript', 'Python', 'Fiber', 'Elysia', 'REST API', 'WebSocket'] },
			{ title: 'Data', items: ['PostgreSQL', 'Redis', 'SQLite', 'Drizzle ORM', 'SQLC', 'LanceDB'] },
			{ title: 'Infrastructure', items: ['OCI', 'Docker', 'Proxmox', 'Kubernetes', 'Cloudflare', 'Caddy', 'Tailscale'] },
			{ title: 'Security', items: ['OAuth 2.1', 'OpenID Connect', 'JWT', 'JWKS', 'Passkey', 'AES-GCM'] },
		],
	},
	principles: {
		eyebrow: 'How I work', title: '오래 유지되는 시스템을 만드는 기준',
		items: [
			{ index: '01', title: '운영을 먼저 생각합니다', description: '장애, 배포, 데이터 일관성과 확장성을 개발 단계부터 함께 고려합니다.' },
			{ index: '02', title: '전체 제품을 이해합니다', description: 'API를 넘어 사용자 화면, 관리자 업무, 데이터와 인프라의 연결을 봅니다.' },
			{ index: '03', title: '반복을 자동화합니다', description: '사람이 반복하던 운영 흐름을 예측 가능한 시스템과 코드로 바꿉니다.' },
		],
	},
	contact: {
		eyebrow: 'Start a conversation', title: '함께 헤쳐나갈\n문제가 있나요?',
		description: '백엔드 설계, 인프라 자동화, 새로운 제품에 관한 이야기를 기다립니다.',
		email: '이메일 보내기', github: 'GitHub 보기', backToTop: '맨 위로',
	},
} satisfies PortfolioMessages;
