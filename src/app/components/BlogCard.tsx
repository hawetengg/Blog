import Image from "next/image";

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  author?: {
    name: string;
    image: string;
    role: string;
  };
  skills: string[];
  createdAt: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  title,
  description,
  author,
  skills,
  createdAt,
}) => {
  const formattedDate = new Date(createdAt).toLocaleDateString(); // Format date as needed

  return (
    <div className="card border p-4 rounded-lg shadow-lg bg-gray-50">
      <div className="flex">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="rounded-lg"
        />
        <div className="ml-4">
          {author && (
            <div className="flex items-center space-x-2">
              <Image
                src={author.image}
                alt={author.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-semibold">{author.name}</p>
                <p className="text-xs text-gray-500">{formattedDate}</p>
                <p className="text-xs text-gray-500">{author.role}</p>
              </div>
            </div>
          )}
          <h3 className="text-xl font-bold mt-2">{title}</h3>
          <p className="mt-2 text-gray-700">{description}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {skills.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
