/* Change this file to get your personal Portfolio */

// General Information
export const greeting = {
  username: "박진성",
  title: "JAVA 언어 기반 백엔드 개발자",
  subTitle:
    "RESTful API, 대용량 데이터 처리, 시스템 안정성 향상 경험 보유, 클린 시큐어 코드와 효율적인 시스템 설계, 트러블 슈팅 다수 경험",
  resumeLink: "https://yourdomain.com/resume.pdf", // 필요시 연결
};

// Your Skills Section
export const skillsSection = {
  skills: [
    "⚡ Java, Spring Boot 3.x 기반 REST API 및 대규모 시스템 구축 경험",
    "⚡ JPA, QueryDSL 활용한 복잡한 데이터 조회 및 최적화",
    "⚡ Redis를 통한 캐싱, 분산락 처리 경험",
    "⚡ React, Next.js를 활용한 기본적인 프론트엔드 협업 및 개발 경험",
    "⚡ Docker, GitLab CI/CD, Linux 환경 서버 배포 경험",
    "⚡ PostgreSQL, MySQL 등 RDBMS 설계 및 튜닝 경험",
  ],
  softwareSkills: [
    { skillName: "Java", fontAwesomeClassname: "logos:java" },
    { skillName: "Spring Boot", fontAwesomeClassname: "devicon:spring" },
    { skillName: "JPA", fontAwesomeClassname: "simple-icons:hibernate" },
    { skillName: "QueryDSL", fontAwesomeClassname: "file-icons:database" }, // 아이콘 없으면 DB아이콘 대체
    { skillName: "Redis", fontAwesomeClassname: "logos:redis" },
    { skillName: "React", fontAwesomeClassname: "logos:react" },
    { skillName: "Next.js", fontAwesomeClassname: "logos:nextjs-icon" },
    { skillName: "PostgreSQL", fontAwesomeClassname: "logos:postgresql" },
    { skillName: "MySQL", fontAwesomeClassname: "logos:mysql" },
    { skillName: "Docker", fontAwesomeClassname: "logos:docker-icon" },
    { skillName: "Git", fontAwesomeClassname: "logos:git-icon" },
    { skillName: "Linux", fontAwesomeClassname: "logos:linux-tux" },
  ],
};

// Education (선택사항)
export const degrees = {
  degrees: [
    {
      title: "한양대학교 에리카캠퍼스",
      subtitle: "백엔드 개발자",
      logo_path: "",
      alt_name: "HYU",
      duration: "2022.06 - Present",
      descriptions: [
        "자료구조, 네트워크, Linux 시스템 등 기초 전공지식 학습",
        "다양한 언어를 사용한 웹 페이지 다수 제작",
      ]
    },
  ],
};

// Experience
export const workExperiences = {
  experiences: [
    {
      role: "백엔드 개발자",
      company: "서울의과학연구소",
      companylogo: "/img/company/seegene.png",
      date: "2022.06 – Present",
      desc: "Spring Boot, Redis, PostgreSQL 기반 시스템 개발 및 유지보수. REST API 설계 및 대규모 데이터 처리 경험 보유.",
    },
  ],
};

// Projects (선택사항)
export const projects = {
  projects: [
    {
      name: "건강검진 결과 연동 시스템",
      description:
        "외부기관과 FTP 통신 기반으로 결과 데이터를 연동하고, Redis TTL을 활용하여 최신 검사 상태를 실시간 반영.",
      github_link: "https://github.com/acejjin77", // 필요시 추가
      link: "https://yourproject.com",
    },
    {
      name: "진단검사 리포트 개선 프로젝트",
      description:
        "QueryDSL과 Spring Batch를 활용하여 대량 검사 데이터를 효율적으로 관리 및 배치 처리. 성능 40% 개선 달성.",
      github_link: "https://github.com/acejjin77",
    },
  ],
};

// Contact Info
export const contactInfo = {
  title: "Contact Me",
  subtitle: "Let's build something amazing together!",
  number: "+82-10-1234-5678",
  email_address: "your.email@example.com",
  github: "https://github.com/acejjin77",
  linkedin: "https://linkedin.com/in/your-linkedin",
};
