import React, { useState } from "react";
import Heading from "./Heading";
import blog1 from "./../assets/blog/blog1.png";
import blog2 from "./../assets/blog/blog2.png";
import Blogcard from "./Blogcard";

// Define the Blog interface to type the blogs
interface Blog {
  id: number;
  image: string;
  title: string;
  content: string;
}

const Blog: React.FC = () => {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
const [Isblog, setAllblog]=useState(false)
  // Sample blogs data
  const blogs: Blog[] = [
    {
      id: 1,
      image: blog1,
      title: "Top Digital Marketing Trends for 2024",
      content:
        "As we move into 2024, the digital marketing landscape continues to evolve at a rapid pace. Businesses must stay ahead of the curve to maintain their competitive edge. Businesses need to adopt cutting-edge technologies, improve personalization, and embrace social media marketing to remain relevant. In this blog post, we'll discuss the top digital marketing trends.",
    },
    {
      id: 2,
      image: blog2,
      title: "Email Marketing in the Age of GDPR",
      content:
        "Email marketing remains a powerful tool for businesses to connect with their customers. However, with regulations such as GDPR in place, it’s crucial to follow best practices. In this post, we explore how businesses can adapt their email marketing strategies in compliance with GDPR and still achieve high engagement rates.",
    },
    {
      id: 3,
      image: blog1,
      title: "Top Digital Marketing Trends for 2024",
      content:
        "As we move into 2024, the digital marketing landscape continues to evolve at a rapid pace. Businesses must stay ahead of the curve to maintain their competitive edge. Businesses need to adopt cutting-edge technologies, improve personalization, and embrace social media marketing to remain relevant. In this blog post, we'll discuss the top digital marketing trends.",
    },
    {
      id: 4,
      image: blog2,
      title: "Email Marketing in the Age of GDPR",
      content:
        "Email marketing remains a powerful tool for businesses to connect with their customers. However, with regulations such as GDPR in place, it’s crucial to follow best practices. In this post, we explore how businesses can adapt their email marketing strategies in compliance with GDPR and still achieve high engagement rates.",
    },
    {
      id: 3,
      image: blog1,
      title: "Top Digital Marketing Trends for 2024",
      content:
        "As we move into 2024, the digital marketing landscape continues to evolve at a rapid pace. Businesses must stay ahead of the curve to maintain their competitive edge. Businesses need to adopt cutting-edge technologies, improve personalization, and embrace social media marketing to remain relevant. In this blog post, we'll discuss the top digital marketing trends.",
    },
  ];
  const filterBlogs = !Isblog ? blogs.slice(0,4):blogs

  return (
    <div className="max-w-[1240px] px-4 mx-auto lg:mt-[120px] mt-[60px] ">
      <Heading
        title="Our Blogs"
        subtitle="Explore our blogs for expert insights, industry trends, and practical tips to enhance your digital marketing strategies and stay ahead in the competitive landscape."
      />
      <div className="flex justify-center flex-col items-center">
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 mt-20">
          {filterBlogs?.map((blog) => (
            <Blogcard
              key={blog.id}
              blog={blog}
              onClick={() => setSelectedBlog(blog)}
            />
          ))}
        </div>
        <div className="flex justify-center items-center mt-20">
          {blogs.length > 4 && (
            <button
              onClick={() => setAllblog(!Isblog)}
              className={`py-3 px-6 w-[150px] md:w-[230px] mt-[38px] md:mt-[48px]  bg-[#000030] rounded-[40px] flex justify-center items-center opensans font-[600] md:text-[20px] md:leading-[27.24px] text-white shadow text-[12px] gap-2 ${Isblog && "hidden"}`}
            >
              More Blog
            </button>
          )}
        </div>

        {/* Blog Modal for displaying selected blog */}
        {selectedBlog && (
          <BlogModal
            blog={selectedBlog}
            onClose={() => setSelectedBlog(null)}
          />
        )}
      </div>
    </div>
  );
};

// Blog Modal component
const BlogModal: React.FC<{ blog: Blog; onClose: () => void }> = ({
  blog,
  onClose,
}) => (
  <div className="fixed inset-0  bg-[#000030] bg-opacity-75 flex items-center justify-center backdrop-blur-xl  z-50 transition-opacity">
    <div className="bg-[#000030] rounded-[20px] shadow-lg lg:max-w-3xl lg:h-[700px] md:max-w-[700px] overflow-y-scroll w-[90%] md:h-auto h-[400px] md:p-10 p-3 transform transition-transform">
      <img
        className="w-full md:h-[320px] md:w-[537px] ] rounded-lg object-cover"
        src={blog.image}
        alt=""
      />
      <h2 className="md:text-[30px] md:leading-[33px] text-[24px] leading-[28.8px]  semibold mb-[4px] mt-[32px] text-white">
        {blog.title}
      </h2>
      <p className="text-[16px] leading-[20.8px] regular md:text-[18px] md:leading-[30px] mt-3 lg:mt-4 text-white">
        {blog.content}
      </p>
      <div className="text-right mt-[38px] md:mt-[68px] ">
        <button
          className="btn btn-primary px-4 py-2 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition"
          onClick={onClose}
          aria-label="Close modal"
        >
          Close
        </button>
      </div>
    </div>
  </div>
);

export default Blog;
