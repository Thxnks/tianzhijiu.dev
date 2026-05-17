export type Language = 'en' | 'zh'

export const translations = {
  en: {
    languageLabel: '中文',
    nav: {
      projects: 'Projects',
      resources: 'Resources',
      skills: 'Skills',
      about: 'About',
      journey: 'Journey',
      contact: 'Contact',
    },
    hero: {
      titleFirst: 'Hey, I am',
      titleSecond: 'Hao Xinran',
      subtitle: 'I build thoughtful backend systems, AI-powered tools, and web experiences with clarity and purpose.',
      cta: 'Explore My Work',
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Selected Work',
      github: 'GitHub',
      details: 'Details',
      backendHighlights: 'Backend Highlights',
      fullTechStack: 'Full Tech Stack',
      keyFeatures: 'Key Features',
      whatIBuilt: 'What I Built',
      whatILearned: 'What I Learned',
      items: {
        aiCodeHelper: {
          description: 'A Spring Boot + Vue full-stack AI coding assistant centered on a self-built ReAct Agent Runtime for Hot100 algorithm coaching, execution tracing, and backend interview preparation.',
          highlights: [
            'Built a custom ReAct Agent Runtime with model turns, tool calls, tool results, final answers, and up to 8 autonomous turns.',
            'Implemented tool permission gating across READ, WRITE, EXTERNAL, and SENSITIVE levels with structured tool_result errors.',
            'Added three-tier context compaction, structured error recovery, hook events, and step-level SSE streaming for observable agent execution.',
            'Designed AgentTask, RuntimeSlot, and AgentStep persistence so retries, runtime traces, and executor failover can be inspected clearly.',
            'Integrated LangChain4j with DashScope/Qwen while keeping orchestration logic inside the Spring Boot backend.',
            'Built explainable local RAG for Hot100 markdown and JSON resources with scored retrieval results and problem metadata.',
            'Added long-term memory for user preferences, weaknesses, wrong answers, next actions, and notes.',
            'Used Spring Boot 3.5, Java 21, Spring Security JWT, JPA, Flyway, Redis caching, RabbitMQ, and Docker Compose for backend engineering.',
          ],
        },
        citylifeReview: {
          description: 'A Spring Boot backend service for a local life-review platform, focused on Redis business features, nearby shop search, social feeds, and reliable high-concurrency voucher ordering.',
          highlights: [
            'Implemented phone-code login with Redis token storage and interceptor-based user context handling.',
            'Built Redis-backed shop caching, cache penetration protection, shop type cache invalidation, GEO nearby search, ZSet likes/feed, Set follow relationships, and Bitmap sign-in.',
            'Used Redis Lua to atomically check voucher stock, one-user-one-order constraints, pre-deduct stock, and record purchase qualification.',
            'Built RabbitMQ asynchronous voucher order creation with persisted PROCESSING state, publisher confirm, return callback, manual ACK, and dead-letter queue handling.',
            'Added Redis rollback and scheduled compensation for stale PROCESSING orders to reduce Redis/MySQL inconsistency after MQ or consumer failures.',
            'Combined Redisson user-level locks and MySQL unique indexes to prevent duplicate voucher orders under concurrency.',
            'Provided Docker Compose deployment for the application, MySQL, Redis, and RabbitMQ.',
          ],
        },
        personalPortfolio: {
          description: 'A personal website built to showcase projects, technical skills, learning journey, and contact information.',
          keyFeatures: ['Responsive personal portfolio homepage', 'Project showcase section', 'Skills and learning journey sections', 'Light / dark theme support', 'Smooth scroll and subtle animations'],
          built: ['Built a modern portfolio website with Next.js and Tailwind CSS.', 'Designed sections for projects, skills, about, journey, and contact.', 'Added theme switching, scroll animations, and back-to-top interaction.'],
          learned: ['Learned how to structure a personal portfolio website.', 'Practiced responsive layout and component-based frontend development.', 'Improved UI polish through spacing, typography, and animation tuning.'],
        },
      },
    },
    resources: {
      eyebrow: 'Learning Resources',
      title: 'Learning Resources',
      description: 'A curated learning map for my Java backend foundation and AI Agent development path.',
      visit: 'Visit Resource',
      groups: {
        backendFundamentals: 'Backend Fundamentals',
        aiAgentLearning: 'AI Agent Learning',
      },
      items: {
        javaGuide: {
          description: 'A structured Java backend guide for interviews and system design.',
        },
        xiaolinCoding: {
          description: 'Visual notes for CS fundamentals, MySQL, Redis, networks, OS, and backend interviews.',
        },
        helloAgents: {
          description: 'A Chinese AI Agents tutorial focused on core principles, agent architecture, classic paradigms, and building AI Native Agents.',
        },
        huggingFaceAgents: {
          description: 'A hands-on agents course covering agent fundamentals, tools, smolagents, LangGraph, LlamaIndex, Agentic RAG, observability, and final projects.',
        },
      },
    },
    skills: {
      eyebrow: 'Skills',
      title: 'Technical Focus',
      positioning: 'Java Backend × AI Application',
      intro: 'A compact map of the technologies I use in backend projects and AI-powered tools.',
      groups: {
        backendCore: {
          title: 'Backend Core',
          description: 'Core technologies for Java backend development.',
        },
        engineeringPractice: {
          title: 'Engineering Practice',
          description: 'Tools and patterns practiced in real backend projects.',
        },
        aiApplication: {
          title: 'AI Application',
          description: 'AI technologies I am learning to connect with backend systems.',
        },
      },
    },
    about: {
      eyebrow: 'About',
      title: 'About Hao Xinran',
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
      resources: '资料库',
      skills: '技能',
      about: '关于我',
      journey: '经历',
      contact: '联系',
    },
    hero: {
      titleFirst: '你好，我是',
      titleSecond: '郝欣冉',
      subtitle: '我专注于后端开发，也在探索 AI 工具和 Web 应用的结合。',
      cta: '查看项目',
    },
    projects: {
      eyebrow: '项目',
      title: '精选作品',
      github: 'GitHub',
      details: '详情',
      backendHighlights: '后端亮点',
      fullTechStack: '完整技术栈',
      keyFeatures: '核心功能',
      whatIBuilt: '我做了什么',
      whatILearned: '学到了什么',
      items: {
        aiCodeHelper: {
          description: '一个基于 Spring Boot + Vue 的 AI 编程助手项目，核心是自研 ReAct Agent Runtime，用于 Hot100 算法辅导、执行链路追踪和后端面试准备。',
          highlights: [
            '自研 ReAct Agent Runtime，支持 model turn、tool_use、tool_result、final_answer 和最多 8 轮自主执行。',
            '实现 READ、WRITE、EXTERNAL、SENSITIVE 四级工具权限门控，被拒绝的工具调用会返回结构化 tool_result，避免直接中断 Agent 流程。',
            '加入三层上下文压缩、结构化异常恢复、事件钩子和步骤级 SSE 流式输出，让 Agent 执行过程可观察。',
            '设计 AgentTask、RuntimeSlot、AgentStep 数据模型，支持重试、runtime trace 和执行步骤排查。',
            '集成 LangChain4j 与 DashScope/Qwen，但将 Agent 编排逻辑保留在 Spring Boot 后端中实现。',
            '为 Hot100 markdown 和 JSON 资源构建可解释本地 RAG，返回带评分和题目元数据的检索结果。',
            '实现长期记忆，记录用户偏好、薄弱点、错题、下一步行动和笔记。',
            '使用 Spring Boot 3.5、Java 21、Spring Security JWT、JPA、Flyway、Redis 缓存、RabbitMQ 和 Docker Compose 完成后端工程化。',
          ],
        },
        citylifeReview: {
          description: '一个本地生活点评平台后端服务，重点实践 Redis 业务场景、附近商铺搜索、社交 Feed 流，以及高并发优惠券秒杀下单的可靠性设计。',
          highlights: [
            '基于 Redis token 存储实现手机验证码登录，并通过拦截器维护用户上下文。',
            '使用 Redis 缓存、缓存穿透保护、商铺类型缓存失效、GEO、ZSet、Set、Bitmap 支持商铺查询、附近商铺、点赞、关注、Feed 流和签到。',
            '使用 Redis Lua 原子化校验优惠券库存和一人一单约束，并完成库存预扣减和购买资格记录。',
            '基于 RabbitMQ 实现优惠券订单异步创建，包含 PROCESSING 状态持久化、publisher confirm、return callback、手动 ACK 和死信队列。',
            '加入 Redis 回滚和超时 PROCESSING 订单定时补偿，降低 MQ 或消费者失败后的 Redis/MySQL 不一致风险。',
            '结合 Redisson 用户级锁和 MySQL 唯一索引，防止高并发下重复下单。',
            '提供 Docker Compose 部署，统一启动应用、MySQL、Redis 和 RabbitMQ。',
          ],
        },
        personalPortfolio: {
          description: '这个网站本身，用来展示我的项目、技术方向、学习经历和联系方式。',
          keyFeatures: ['Responsive personal portfolio homepage', 'Project showcase section', 'Skills and learning journey sections', 'Light / dark theme support', 'Smooth scroll and subtle animations'],
          built: ['使用 Next.js 和 Tailwind CSS 搭建个人作品集网站。', '设计 projects、skills、about、journey 和 contact 等页面区块。', '加入 theme switching、scroll animations 和 back-to-top interaction。'],
          learned: ['学习了个人作品集网站的组织方式。', '练习了 responsive layout 和 component-based frontend development。', '通过间距、字体和动画调整提升了 UI 细节。'],
        },
      },
    },
    resources: {
      eyebrow: '学习资料库',
      title: '学习资料库',
      description: '这里整理了我在学习 Java 后端和 AI Agent 开发过程中参考的资料，用来补齐后端基础、计算机基础、智能体原理和工程实践。',
      visit: '查看资料',
      groups: {
        backendFundamentals: '后端基础',
        aiAgentLearning: 'AI Agent 学习',
      },
      items: {
        javaGuide: {
          description: '系统化的 Java 后端学习与面试指南，适合梳理基础、框架、数据库和系统设计。',
        },
        xiaolinCoding: {
          description: '图解风格的后端基础资料，适合补计算机网络、操作系统、MySQL、Redis 和面试知识。',
        },
        helloAgents: {
          description: 'Datawhale 的 AI Agents 中文教程，适合系统理解智能体核心原理、架构设计、经典范式和 AI Native Agent 构建思路。',
        },
        huggingFaceAgents: {
          description: 'Hugging Face 的 AI Agents 实践课程，覆盖智能体基础、工具调用、smolagents、LangGraph、LlamaIndex、Agentic RAG、可观测性和最终项目。',
        },
      },
    },
    skills: {
      eyebrow: '技能',
      title: '技术方向',
      positioning: 'Java 后端 × AI 应用',
      intro: '这里整理了我在后端项目和 AI 应用开发中主要使用、实践和探索的技术方向。',
      groups: {
        backendCore: {
          title: '后端核心',
          description: '我在 Java 后端学习和项目开发中主要使用的核心技术。',
        },
        engineeringPractice: {
          title: '工程实践',
          description: '我在实际项目中练习过的认证、消息队列、部署和工程化相关技术。',
        },
        aiApplication: {
          title: 'AI 应用',
          description: '我正在学习如何把 AI 能力接入后端系统。',
        },
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














