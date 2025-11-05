export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  stargazers_count: number;
  fork: boolean; // ✅ Add this line
  forks_count: number;
  language: string | null;
}

export async function fetchFrontendRepos(username: "ferdie213"): Promise<GitHubRepo[]> {
  const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`, {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
    next: { revalidate: 3600 }, // cache 1 hour
  });

  if (!res.ok) throw new Error("Failed to fetch repos");

  const repos: GitHubRepo[] = await res.json();

  // Filter frontend projects (you can customize topics)
  return repos.filter(repo => {
    const frontendTopics = ["react", "nextjs", "vue", "svelte", "tailwind", "frontend", "typescript"];
    const hasFrontendTopic = repo.topics.some(t => frontendTopics.includes(t.toLowerCase()));
    const isFrontendLang = ["TypeScript", "JavaScript", "React Native", "React", "Vue", "HTML", "CSS"].includes(repo.language || "");
    return (hasFrontendTopic || isFrontendLang) && !repo.fork && repo.description;
  });
}