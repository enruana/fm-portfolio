import { BlogPost } from "../data/blog-posts";
import { PlatformIcon } from "./PlatformIcon";

interface BlogPostCardProps {
  post: BlogPost;
}

const getTagColor = (tag: string) => {
  const colors = {
    react: {
      bg: 'bg-blue-100 dark:bg-blue-900/30',
      text: 'text-blue-700 dark:text-blue-300',
      border: 'border border-blue-200 dark:border-blue-800'
    },
    typescript: {
      bg: 'bg-blue-100 dark:bg-blue-900/30',
      text: 'text-blue-700 dark:text-blue-300',
      border: 'border border-blue-200 dark:border-blue-800'
    },
    javascript: {
      bg: 'bg-yellow-100 dark:bg-yellow-900/30',
      text: 'text-yellow-700 dark:text-yellow-300',
      border: 'border border-yellow-200 dark:border-yellow-800'
    },
    nextjs: {
      bg: 'bg-black dark:bg-white/10',
      text: 'text-black dark:text-white',
      border: 'border border-gray-200 dark:border-gray-800'
    },
    css: {
      bg: 'bg-pink-100 dark:bg-pink-900/30',
      text: 'text-pink-700 dark:text-pink-300',
      border: 'border border-pink-200 dark:border-pink-800'
    },
    html: {
      bg: 'bg-orange-100 dark:bg-orange-900/30',
      text: 'text-orange-700 dark:text-orange-300',
      border: 'border border-orange-200 dark:border-orange-800'
    },
    api: {
      bg: 'bg-green-100 dark:bg-green-900/30',
      text: 'text-green-700 dark:text-green-300',
      border: 'border border-green-200 dark:border-green-800'
    },
    database: {
      bg: 'bg-purple-100 dark:bg-purple-900/30',
      text: 'text-purple-700 dark:text-purple-300',
      border: 'border border-purple-200 dark:border-purple-800'
    },
    // Default color for any other tags
    default: {
      bg: 'bg-gray-100 dark:bg-gray-800',
      text: 'text-gray-700 dark:text-gray-300',
      border: 'border border-gray-200 dark:border-gray-700'
    }
  };

  // Convert tag to lowercase for matching
  const normalizedTag = tag.toLowerCase();
  
  // Return color scheme for matching tag, or default if no match
  return colors[normalizedTag as keyof typeof colors] || colors.default;
};

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="group relative border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-card hover:scale-[1.02]">
      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-6 space-y-4"
      >
        <div className="flex items-center gap-3 text-sm">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted/30">
            <PlatformIcon platform={post.platform} />
            <span className="text-muted-foreground font-medium">{post.date}</span>
          </div>
          <span className="ml-auto text-lg">
            {post.language === "es" ? "🇪🇸" : "🇺🇸"}
          </span>
        </div>

        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {post.title}
        </h3>

        {post.series && (
          <div className="inline-flex items-center px-4 py-2 rounded-lg 
            bg-purple-100 dark:bg-purple-900/30
            text-purple-800 dark:text-purple-200 
            border border-purple-200 dark:border-purple-800/50
            shadow-sm">
            <span className="mr-2 text-lg">📚</span>
            <span className="font-medium">
              Series: <span className="text-pink-700 dark:text-pink-300">{post.series}</span>
            </span>
          </div>
        )}

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => {
              // Get color based on tag name
              const tagColor = getTagColor(tag);
              
              return (
                <span
                  key={tag}
                  className={`px-3 py-1 text-xs font-medium rounded-full 
                    ${tagColor.bg} ${tagColor.text} ${tagColor.border}
                    hover:opacity-80 transition-all duration-200`}
                >
                  #{tag}
                </span>
              );
            })}
          </div>
        )}
      </a>
    </article>
  );
} 