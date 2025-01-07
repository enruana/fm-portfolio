import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { BlogPostCard } from "../components/BlogPostCard";
import { PlatformIcon } from "../components/PlatformIcon";
import { posts, getPostTags, getPostSeries, type BlogPost } from "../data/blog-posts";

// Enhance posts with additional metadata
const enhancedPosts: BlogPost[] = posts.map((post) => ({
  ...post,
  tags: getPostTags(post.title),
  series: getPostSeries(post.title),
}));

export function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState<
    BlogPost["platform"] | "All"
  >("All");
  const [selectedLanguage, setSelectedLanguage] = useState<"all" | "en" | "es">(
    "all"
  );
  const [selectedSeries, setSelectedSeries] = useState<string | "all">("all");

  const series = useMemo(() => {
    const allSeries = enhancedPosts
      .map((post) => post.series)
      .filter((series): series is string => !!series);
    return Array.from(new Set(allSeries));
  }, []);

  const filteredPosts = useMemo(() => {
    return enhancedPosts.filter((post) => {
      const matchesSearch = post.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesPlatform =
        selectedPlatform === "All" || post.platform === selectedPlatform;
      const matchesLanguage =
        selectedLanguage === "all" || post.language === selectedLanguage;
      const matchesSeries =
        selectedSeries === "all" || post.series === selectedSeries;
      return (
        matchesSearch && matchesPlatform && matchesLanguage && matchesSeries
      );
    });
  }, [searchTerm, selectedPlatform, selectedLanguage, selectedSeries]);

  const groupedPosts = useMemo(() => {
    return filteredPosts.reduce((acc, post) => {
      if (!acc[post.platform]) {
        acc[post.platform] = [];
      }
      acc[post.platform].push(post);
      return acc;
    }, {} as Record<string, BlogPost[]>);
  }, [filteredPosts]);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 space-y-6">
        <h1 className="text-4xl font-bold">Blog Posts</h1>

        {/* Search and Filters */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
            value={selectedPlatform}
            onChange={(e) =>
              setSelectedPlatform(
                e.target.value as BlogPost["platform"] | "All"
              )
            }
          >
            <option value="All">All Platforms</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Medium">Medium</option>
            <option value="Gorilla">Gorilla</option>
          </select>

          <select
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
            value={selectedLanguage}
            onChange={(e) =>
              setSelectedLanguage(e.target.value as "all" | "en" | "es")
            }
          >
            <option value="all">All Languages</option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
          </select>

          <select
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
            value={selectedSeries}
            onChange={(e) => setSelectedSeries(e.target.value)}
          >
            <option value="all">All Series</option>
            {series.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground">
          Showing {filteredPosts.length} articles
          {searchTerm && ` matching "${searchTerm}"`}
        </p>
      </div>

      {/* Articles Grid */}
      {Object.entries(groupedPosts).map(([platform, platformPosts]) => (
        <div key={platform} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <PlatformIcon platform={platform as BlogPost["platform"]} />
            {platform}
            <span className="text-sm text-muted-foreground">
              ({platformPosts.length} articles)
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
