import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'ikechukwungoesina@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Njay, I am reaching out to you because...',

    oldPortfolio: 'https://unixmachine.netlify.app',
    upworkProfile: 'https://x.com/njay2trappy',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Njay2trappy' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/ikechukwu-ngoesina-281645349/' },
    { name: 'x', url: 'https://x.com/njay2trappy' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'React.js',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'HTML',
            icon: '/logo/html5.svg',
        },
        {
            name: 'CSS',
            icon: '/logo/css3.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
        {
            name: 'NestJS',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Rust',
            icon: '/logo/rust.svg',
        },
        {
            name: 'Node GraphQL',
            icon: '/logo/graphql.svg',
        },
        {
            name: 'Python',
            icon: '/logo/python.svg',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
        {
            name: 'Render',
            icon: '/logo/render.png',
        },
        {
            name: 'Burp Suite',
            icon: '/logo/burpsuite.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'VSCGames',
        slug: 'vscgames',
        year: 2025,
        description:
            'VSCGames is a digital commerce platform for game top-ups, voucher distribution, and payment services. Built with Node.js, GraphQL, and MongoDB, the system automates supplier fulfillment, supports merchant API integrations with secure key-based access, and enables real-time transactions through Telegram commerce flows.',
        role: `
      Backend Engineer <br/>
      Core contributions:
      <ul>
        <li>Designed and implemented GraphQL backend services for digital product workflows</li>
        <li>Integrated supplier APIs to automate voucher and top-up fulfillment</li>
        <li>Built merchant integration pipelines with secure authentication and access controls</li>
        <li>Enabled Telegram-based commerce with real-time purchase and delivery processing</li>
      </ul>
      `,
        techStack: [
            'Node.js',
            'GraphQL',
            'MongoDB',
            'Express.js',
            'REST APIs',
            'Telegram Bot API',
            'Axios',
        ],
        thumbnail:
            'https://gray-rare-salamander-705.mypinata.cloud/ipfs/bafybeic77tz5breuqvuqnsro3davooohuzqoiyvme4dxlhm4haj67musyq',
        longThumbnail:
            'https://gray-rare-salamander-705.mypinata.cloud/ipfs/bafybeic77tz5breuqvuqnsro3davooohuzqoiyvme4dxlhm4haj67musyq',
        images: [
            'https://gray-rare-salamander-705.mypinata.cloud/ipfs/bafybeic77tz5breuqvuqnsro3davooohuzqoiyvme4dxlhm4haj67musyq','https://gray-rare-salamander-705.mypinata.cloud/ipfs/bafybeia7j53aknf4xf7bcrc2e5mcvn3ndfouuafyhtnyaygrwaofwysk5i','https://gray-rare-salamander-705.mypinata.cloud/ipfs/bafybeia4i2vqqjg45n7uh6rcaur5rvyjjlndmfotecrz7nrrbzcqgdx4k4'
        ],
        liveUrl: 'https://vscgames.com',
    },
    {
        title: 'Argon',
        slug: 'argon-payment-gateway',
        year: 2024,
        description:
            'Argon is a production-grade multi-chain payment gateway supporting AirDAO, Solana, BSC (BEP20), and TON. Built with Node.js, GraphQL, and MongoDB, it provides secure transaction orchestration, wallet integrations, and on-chain verification across heterogeneous blockchain networks.',
        role: `
      Blockchain and Backend Engineer <br/>
      Core contributions:
      <ul>
        <li>Architected backend services for reliable multi-chain payment execution</li>
        <li>Integrated blockchain SDKs for wallet operations, transfers, and verification</li>
        <li>Implemented scalable data models for transaction history and balance tracking</li>
      </ul>
      `,
        techStack: [
            'Node.js',
            'GraphQL',
            'MongoDB',
            'Blockchain',
            'USDC',
            'BSC / BEP20',
            'TON',
            'Git',
        ],
        thumbnail: 'https://i.ibb.co/qMfVtvxJ/Screenshot-2026-06-21-at-22-37-48.png',
        longThumbnail: 'https://i.ibb.co/qMfVtvxJ/Screenshot-2026-06-21-at-22-37-48.png',
        images: ['https://i.ibb.co/qMfVtvxJ/Screenshot-2026-06-21-at-22-37-48.png','https://i.ibb.co/n8Vk3TrM/Screenshot-2026-06-21-at-22-38-24.png','https://i.ibb.co/DDyyWjFW/Screenshot-2026-06-21-at-22-38-37.png','https://i.ibb.co/0RtJDWW7/Screenshot-2026-06-21-at-22-39-10.png','https://i.ibb.co/Y4VnpVp2/Screenshot-2026-06-21-at-22-39-23.png'],
        liveUrl: 'https://pay.gameket.io',
        sourceCode: 'https://github.com/Njay2trappy/Argon',
    },
    {
        title: 'DecentWork',
        slug: 'decentwork',
        year: 2025,
        description:
            'DecentWork is a decentralized freelancing marketplace built on Arweave. Its Node.js and GraphQL backend manages job postings, proposals, and contracts, while MongoDB supports low-latency retrieval and Arweave ensures immutable storage for critical agreement data.',
        role: `
      Backend Engineer <br/>
      Core contributions:
      <ul>
        <li>Developed the marketplace backend using GraphQL APIs and modular services</li>
        <li>Integrated Arweave for immutable contract and record persistence</li>
        <li>Implemented escrow and trustless transaction workflows for marketplace safety</li>
      </ul>
      `,
        techStack: ['Node.js', 'GraphQL', 'Arweave', 'MongoDB', 'JWT', 'Git'],
        thumbnail: 'https://i.ibb.co/hvRg7hW/Screenshot-2026-06-21-at-23-06-09.png',
        longThumbnail: 'https://i.ibb.co/fYnqKvhm/Screenshot-2026-06-21-at-23-06-17.png',
        images: ['https://i.ibb.co/fYnqKvhm/Screenshot-2026-06-21-at-23-06-17.png','https://i.ibb.co/hvRg7hW/Screenshot-2026-06-21-at-23-06-09.png','https://i.ibb.co/Qvs3ZZJ1/Screenshot-2026-06-21-at-23-05-53.png'],
        liveUrl: 'https://decentwork-ytit.vercel.app/',
    },
    {
        title: 'Zhuzh Finance',
        slug: 'zhuzh-finance',
        year: 2026,
        description:
            'Zhuzh Finance is a fintech-oriented product focused on building secure and scalable backend infrastructure for transaction workflows, service orchestration, and financial data reliability.',
        role: `
      Backend Engineer and Co-Founder <br/>
      Core contributions:
      <ul>
        <li>Designed backend architecture for secure transaction and account workflows</li>
        <li>Implemented API services focused on reliability, observability, and maintainability</li>
        <li>Led product and technical decisions across engineering and delivery execution</li>
      </ul>
      `,
        techStack: ['Node.js', 'GraphQL', 'MongoDB', 'REST APIs', 'Docker'],
        thumbnail: 'https://i.ibb.co/tMspsg5v/Thumbnails.png',
        longThumbnail: 'https://i.ibb.co/tMB489Pj/Home-Above-720.png',
        images: ['https://i.ibb.co/tMspsg5v/Thumbnails.png','https://i.ibb.co/tMB489Pj/Home-Above-720.png','https://i.ibb.co/tMB489Pj/Home-Above-720.png'],
    },
    {
        title: 'Hubbleads',
        slug: 'hubbleads',
        year: 2024,
        description:
            'Hubbleads is an ad-tech product initiative centered on automation, campaign performance workflows, and scalable service infrastructure for digital growth operations.',
        role: `
      Software Engineer and Founder <br/>
      Core contributions:
      <ul>
        <li>Built and maintained backend services for campaign and data processing workflows</li>
        <li>Established technical direction, product scoping, and execution strategy</li>
        <li>Integrated automation pipelines to improve operational efficiency and reporting</li>
      </ul>
      `,
        techStack: ['Node.js', 'Python', 'MongoDB', 'REST APIs', 'AWS'],
        thumbnail: 'https://i.ibb.co/60XfB5Fh/Frame-270988353.png',
        longThumbnail: 'https://i.ibb.co/HpBwx70f/Frame-270988472.png',
        images: ['https://i.ibb.co/60XfB5Fh/Frame-270988353.png','https://i.ibb.co/HpBwx70f/Frame-270988472.png','https://i.ibb.co/gLTNzn1R/Frame-270988354.png','https://i.ibb.co/rKfGm5X1/Property-1-Frame-270988353.png'],
    },
    {
        title: 'Gameket',
        slug: 'gameket',
        year: 2024,
        description:
            'Gameket is a digital products and payments platform focused on game top-ups, vouchers, and transaction processing with emphasis on reliability, scale, and user trust.',
        role: `
      Full-Stack Engineer <br/>
      Core contributions:
      <ul>
        <li>Developed backend APIs and service logic for orders, payments, and fulfillment</li>
        <li>Contributed to frontend features for product discovery and purchase workflows</li>
        <li>Improved platform stability and performance across core transaction paths</li>
      </ul>
      `,
        techStack: ['Node.js', 'Next.js', 'GraphQL', 'MongoDB', 'Docker'],
        thumbnail: 'https://i.ibb.co/cX88X869/Screenshot-2026-06-21-at-23-32-22.png',
        longThumbnail: 'https://i.ibb.co/C5bQqMK8/Screenshot-2026-06-21-at-23-35-03.png',
        images: ['https://i.ibb.co/cX88X869/Screenshot-2026-06-21-at-23-32-22.png','https://i.ibb.co/tTvHRyP3/Screenshot-2026-06-21-at-23-34-46.png','https://i.ibb.co/yFtdsVCt/Screenshot-2026-06-21-at-23-34-26.png','https://i.ibb.co/kg5NQj65/Screenshot-2026-06-21-at-23-33-08.png','https://i.ibb.co/zhmJ8kQZ/Screenshot-2026-06-21-at-23-32-50.png'],
        liveUrl: 'https://gameket.io',
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Backend Engineer and Co-Founder',
        company: 'Zhuzh FInance',
        duration: 'Sep 2025 - Present',
    },
    {
        title: 'Software Engineer and Founder',
        company: 'Hubbleads',
        duration: 'May 2024 - Present',
    },
    {
        title: 'Software Engineer, Creative director and Co-Founder',
        company: 'Mondour',
        duration: 'Jun 2026 - Present',
    },
    {
        title: 'Software Engineer (Full-Stack)',
        company: 'VSCgames',
        duration: 'May 2025 - Jun 2026',
    },
    {
        title: 'Full-Stack Engineer',
        company: 'Gameket',
        duration: 'Apr 2024 - Present',
    },
    {
        title: 'Founder & Engineer',
        company: 'Argon Payments',
        duration: 'Nov 2024 - Present',
    },
];
