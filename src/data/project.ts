import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "velog-github-badge",
    description: "간지나는 나만의 velog 뱃지",
    image: "/projects/velog-github-badge.png",
    technologies: [
        { name: "Nest.js", color: "bg-gray-400" },
        { name: "GraphQL", color: "bg-red-500" },
      ],
  },
  {
    title: "SOON+",
    description: "순천향대 학생들을 위한 교내 종합 정보 제공 플랫폼",
    image: "/projects/soon-plus.png",
    technologies: [
        { name: "Next.js", color: "bg-gray-400" },
        { name: "React", color: "bg-gray-400" },
      ],
  },
  {
    title: "CodeGen AI",
    description: "생성형 AI 기반 알고리즘 문제 자동 제작 서비스",
    image: "/projects/codegen-ai.png",
    technologies: [
        { name: "Next.js", color: "bg-gray-400" },
        { name: "Chat GPT", color: "bg-gray-400" },
      ],
  },
  {
    title: "Thisper",
    description: "AI 기반 유튜브 댓글 분석 및 대화 플랫폼",
    image: "/projects/thisper.png",
    technologies: [
        { name: "Python", color: "bg-gray-400" },
        { name: "FastAPI", color: "bg-gray-400" },
        { name: "GCP", color: "bg-gray-400" },
      ],
  },
  {
    title: "Festival People",
    description: "2023 순천향대학교 피닉시아 축제 웹사이트",
    image: "/projects/festival-people.png",
    technologies: [
        { name: "React", color: "bg-gray-400" },
      ],
  },
  {
    title: "Focus-Guard",
    description: "주의력 분산 방지를 위한 크롬 확장 프로그램",
    image: "/projects/focus-guard.png",
    technologies: [
        { name: "Chrome Extension", color: "bg-gray-400" },
      ],
  },
  {
    title: "Seoul-Bike-Analysis",
    description: "서울시 공공자전거 이용현황 알림 웹서비스",
    image: "/projects/seoul-bike.png",
    technologies: [
        { name: "Python", color: "bg-gray-400" },
      ],
  },
  {
    title: "더치페it",
    description: "OCR 기반의 더치페이 어플리케이션",
    image: "/projects/dutch-pay-it.png",
    technologies: [
        { name: "Flutter", color: "bg-gray-400" },
      ],
  },
  {
    title: "CVTV",
    description: "객체 추적 및 사물인터넷 기술 기반의 실시간 CCTV",
    image: "/projects/cvtv.png",
    technologies: [
        { name: "Opencv", color: "bg-gray-400" },
        { name: "Python", color: "bg-gray-400" },
      ],
  },
];