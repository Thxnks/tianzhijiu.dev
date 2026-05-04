export type Language = 'en' | 'zh'

export const translations = {
  en: {
    languageLabel: '中文',
    nav: {
      projects: 'Projects',
      skills: 'Skills',
      about: 'About',
      journey: 'Journey',
      contact: 'Contact',
    },
    hero: {
      titleFirst: 'Hey, I am',
      titleSecond: 'TianZhiJiu',
      subtitle: 'I build thoughtful backend systems, AI-powered tools, and web experiences with clarity and purpose.',
      cta: 'Explore My Work',
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Selected Work',
      github: 'GitHub',
      details: 'Details',
      keyFeatures: 'Key Features',
      whatIBuilt: 'What I Built',
      whatILearned: 'What I Learned',
      items: {
        aiCodeHelper: {
          description: 'An AI-powered coding coach for algorithm practice, backend interview preparation, and project learning.',
          keyFeatures: ['SSE streaming chat responses', 'Multi-session memory', 'Role-based AI tutoring', 'Hot100 problem context support', 'Basic RAG and tool calling'],
          built: ['Built the backend AI chat flow with Spring Boot and LangChain4j.', 'Integrated DashScope/Qwen for AI responses.', 'Connected algorithm problem context with the chat experience.'],
          learned: ['Learned how to integrate LLM APIs into backend services.', 'Practiced SSE streaming, session memory, and AI tool invocation.', 'Understood how AI applications can be structured as backend projects.'],
        },
        citylifeReview: {
          description: 'A local life review platform focused on backend APIs, caching, message queues, and practical business logic.',
          keyFeatures: ['User review and local life content management', 'Redis-based caching', 'RabbitMQ message queue integration', 'MySQL data persistence', 'Backend API design'],
          built: ['Built core backend APIs with Spring Boot.', 'Used MySQL for business data storage.', 'Practiced Redis caching and RabbitMQ asynchronous processing.'],
          learned: ['Learned how caching improves backend performance.', 'Practiced message queue usage in real business scenarios.', 'Improved understanding of backend project structure and API design.'],
        },
        personalPortfolio: {
          description: 'A personal website built to showcase projects, technical skills, learning journey, and contact information.',
          keyFeatures: ['Responsive personal portfolio homepage', 'Project showcase section', 'Skills and learning journey sections', 'Light / dark theme support', 'Smooth scroll and subtle animations'],
          built: ['Built a modern portfolio website with Next.js and Tailwind CSS.', 'Designed sections for projects, skills, about, journey, and contact.', 'Added theme switching, scroll animations, and back-to-top interaction.'],
          learned: ['Learned how to structure a personal portfolio website.', 'Practiced responsive layout and component-based frontend development.', 'Improved UI polish through spacing, typography, and animation tuning.'],
        },
      },
    },
    skills: {
      eyebrow: 'Skills',
      title: 'Technical Focus',
      categories: {
        backend: 'Backend',
        database: 'Database & Middleware',
        tools: 'Tools',
        frontend: 'Frontend',
        ai: 'AI',
      },
    },
    about: {
      eyebrow: 'About',
      title: 'About TianZhiJiu',
      paragraphs: [
        'I am an Artificial Intelligence student focused on Agent backend development and AI-powered web applications.',
        'I am currently learning Spring Boot, MySQL, Redis, RabbitMQ, and Docker, while exploring how LLMs can work with coding assistants, learning platforms, and backend services.',
      ],
    },
    journey: {
      eyebrow: 'Learning Journey',
      title: 'From Java Web to AI Tools',
      items: [
        { time: '2024', title: 'Java Web Fundamentals', description: 'Learned Java Web fundamentals and built basic management-system features.' },
        { time: '2025', title: 'Backend Project Practice', description: 'Practiced Spring Boot, MySQL, Redis, RabbitMQ, and Docker through backend projects.' },
        { time: '2026', title: 'AI + Backend Exploration', description: 'Explored AI-powered developer tools and LLM integration with backend services.' },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's Connect",
      description: 'I am open to backend internship opportunities, project collaboration, and technical discussions.',
      email: 'Email Me',
      github: 'GitHub',
      resume: 'Download Resume',
    },
  },
  zh: {
    languageLabel: 'EN',
    nav: {
      projects: '项目',
      skills: '技能',
      about: '关于我',
      journey: '经历',
      contact: '联系',
    },
    hero: {
      titleFirst: '你好，我是',
      titleSecond: '田智久',
      subtitle: '我专注于后端开发，也在探索 AI 工具和 Web 应用的结合。',
      cta: '查看项目',
    },
    projects: {
      eyebrow: '项目',
      title: '精选作品',
      github: 'GitHub',
      details: '详情',
      keyFeatures: '核心功能',
      whatIBuilt: '我做了什么',
      whatILearned: '学到了什么',
      items: {
        aiCodeHelper: {
          description: '一个面向算法练习、后端面试和项目学习的 AI 编程辅导工具。',
          keyFeatures: ['SSE streaming chat responses', 'Multi-session memory', 'Role-based AI tutoring', 'Hot100 problem context support', 'Basic RAG and tool calling'],
          built: ['使用 Spring Boot 和 LangChain4j 搭建后端 AI 对话流程。', '接入 DashScope/Qwen 生成 AI 回复。', '将算法题上下文接入聊天体验。'],
          learned: ['了解了 LLM API 接入后端服务的基本方式。', '实践了 SSE streaming、session memory 和 AI tool invocation。', '理解了 AI 应用如何按后端项目的方式组织。'],
        },
        citylifeReview: {
          description: '一个本地生活点评平台，重点练习后端 API、缓存、消息队列和业务逻辑设计。',
          keyFeatures: ['User review and local life content management', 'Redis-based caching', 'RabbitMQ message queue integration', 'MySQL data persistence', 'Backend API design'],
          built: ['使用 Spring Boot 构建核心后端 API。', '使用 MySQL 存储业务数据。', '实践 Redis caching 和 RabbitMQ asynchronous processing。'],
          learned: ['理解了 caching 对后端性能的提升作用。', '在接近真实业务的场景中练习 message queue。', '加深了对后端项目结构和 API design 的理解。'],
        },
        personalPortfolio: {
          description: '这个网站本身，用来展示我的项目、技术方向、学习经历和联系方式。',
          keyFeatures: ['Responsive personal portfolio homepage', 'Project showcase section', 'Skills and learning journey sections', 'Light / dark theme support', 'Smooth scroll and subtle animations'],
          built: ['使用 Next.js 和 Tailwind CSS 搭建个人作品集网站。', '设计 projects、skills、about、journey 和 contact 等页面区块。', '加入 theme switching、scroll animations 和 back-to-top interaction。'],
          learned: ['学习了个人作品集网站的组织方式。', '练习了 responsive layout 和 component-based frontend development。', '通过间距、字体和动画调整提升了 UI 细节。'],
        },
      },
    },
    skills: {
      eyebrow: '技能',
      title: '技术方向',
      categories: {
        backend: '后端',
        database: '数据库与中间件',
        tools: '开发工具',
        frontend: '前端',
        ai: 'AI 方向',
      },
    },
    about: {
      eyebrow: '关于',
      title: '关于我',
      paragraphs: [
        '我是一名人工智能专业学生，目前主要学习 Java 后端开发和 AI 相关 Web 应用。我喜欢用 Spring Boot、MySQL、Redis、RabbitMQ 和 Docker 搭建实用型项目。',
        '最近我在关注 LLM 与后端服务的结合，比如 AI 编程助手、学习平台和开发工具这类方向。',
      ],
    },
    journey: {
      eyebrow: '经历',
      title: '从 Java Web 到 AI 工具',
      items: [
        { time: '2024', title: 'Java Web 基础', description: '学习 Java Web 基础，并完成基础管理系统功能开发。' },
        { time: '2025', title: '后端项目实践', description: '通过项目练习 Spring Boot、MySQL、Redis、RabbitMQ 和 Docker。' },
        { time: '2026', title: 'AI + 后端探索', description: '探索 AI 开发工具，以及 LLM 与后端服务的集成方式。' },
      ],
    },
    contact: {
      eyebrow: '联系',
      title: '联系我',
      description: '我正在寻找后端开发实习机会，也欢迎项目交流和技术讨论。',
      email: '发邮件',
      github: 'GitHub',
      resume: '下载简历',
    },
  },
} as const
