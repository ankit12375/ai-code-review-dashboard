# AI Code Review Dashboard

A production-grade code review platform that leverages AI to analyze pull requests, suggest improvements, detect bugs, and enforce coding standards.

## Tech Stack
- **Frontend:** React + TypeScript + TailwindCSS
- **Backend:** Node.js + Express
- **AI:** OpenAI API for code analysis
- **Real-time:** WebSocket for live collaboration

## Getting Started

```bash
npm install
cp .env.example .env  # Add your OpenAI API key
npm run dev
```

## Features
- AI-powered code analysis with contextual suggestions
- Real-time collaborative review with WebSocket
- Code quality scoring dashboard with charts
- Multi-language syntax highlighting
- Git diff viewer with inline annotations

## Architecture
```
src/
├── client/          # React frontend
│   ├── components/  # UI components
│   ├── hooks/       # Custom hooks
│   └── pages/       # Page components
├── server/          # Express backend
│   ├── routes/      # API routes
│   ├── services/    # Business logic
│   └── ai/          # AI integration
└── shared/          # Shared types
```

## Author
Ankit Sharma - Java Backend Developer | AI Enthusiast
