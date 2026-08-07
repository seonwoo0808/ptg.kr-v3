# ptg.kr

개인 웹사이트를 위한 Astro 프로젝트입니다. 랜딩, 포트폴리오, 블로그를 다국어로 제공하고 Cloudflare Pages에 정적 사이트로 배포합니다.

프로젝트의 제품·기술 방향은 [프로젝트 방향 문서](docs/project-direction.md)를 참고하세요.

## 개발 방향

- 랜딩 / 포트폴리오 / 블로그의 3개 영역
- 초기부터 고려하는 다국어 지원
- Cloudflare Pages 정적 배포

---

## Astro Starter Kit: Basics

```sh
bun create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun build`           | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |

## Cloudflare Pages 배포

Cloudflare Pages에서 저장소를 연결한 뒤 다음 값을 사용합니다.

| 항목 | 값 |
| :--- | :--- |
| Framework preset | `Astro` |
| Build command | `bun run build` |
| Build output directory | `dist` |
| Root directory | `/` |

프로덕션 브랜치는 `main`으로 설정합니다. 이 프로젝트는 Astro의 기본 정적 출력 모드를 사용하므로 Cloudflare adapter나 Pages Functions가 필요하지 않습니다.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
