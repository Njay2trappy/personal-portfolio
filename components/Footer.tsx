import { GENERAL_INFO } from '@/lib/data';
import { GitFork, Star } from 'lucide-react';

interface RepoStats {
    stargazers_count: number;
    forks_count: number;
}

const Footer = async () => {
    const repoUrl = 'https://github.com/Njay2trappy/personal-portfolio';
    let stargazers_count = 0;
    let forks_count = 0;

    try {
        const repoStats = await fetch(
            'https://api.github.com/repos/Njay2trappy/personal-portfolio',
            {
                next: {
                    revalidate: 60 * 60, // 1 hour
                },
            },
        );

        if (repoStats.ok) {
            const stats = (await repoStats.json()) as RepoStats;
            stargazers_count = stats.stargazers_count ?? 0;
            forks_count = stats.forks_count ?? 0;
        }
    } catch {
        // keep fallback values when API is unavailable
    }

    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="">
                    <a
                        href={repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="leading-none text-muted-foreground hover:underline hover:text-white"
                    >
                        Designed and built by Njay
                        <div className="flex items-center justify-center gap-5 pt-1">
                            <span className="flex items-center gap-2">
                                <Star size={18} /> {stargazers_count}
                            </span>
                            <span className="flex items-center gap-2">
                                <GitFork size={18} /> {forks_count}
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
