import Link from 'next/link';

export default function PostCard({ slug, frontmatter }) {
  return (
    <Link href={`/posts/${slug}`}>
      <div className="border p-4 rounded-xl mb-4 hover:bg-gray-100 dark:hover:bg-gray-800">
        <h2 className="text-2xl font-semibold">{frontmatter.title}</h2>
        <p className="text-sm text-gray-500">{frontmatter.date}</p>
      </div>
    </Link>
  );
} 