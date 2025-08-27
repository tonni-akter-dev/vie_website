import React from 'react'
import Image, { StaticImageData } from 'next/image';
// import blog1 from '../../../public'


const blogs = [
  {
    title: "Mindset Changing...",
    description: "Discover how shifting your perspective from fixed intelligence to continuous learning can transform your academic journey and help you overcome challenges.",
    image: "https://via.placeholder.com/150?text=Mindset"
  },
  {
    title: "Personalized Study Strategies",
    description: "Ditch generic advice! Learn how to identify your unique learning style and develop tailored study plans that maximize understanding and success.",
    image: "https://via.placeholder.com/150?text=Study"
  },
  {
    title: "Academic Goals, Future Aspirations",
    description: "Explore how linking your current studies to your long-term dreams can drive motivation and success.",
    image: "https://via.placeholder.com/150?text=Goals"
  }
];

const BlogCard = ({ title, description, image }: { title: string, description: string, image: StaticImageData }) => (
  <div className="bg-white rounded-lg shadow-md p-4 text-center">
    <Image src={image} alt={title} width={391} height={293} className="w-full h-32 object-cover rounded-md mb-4" />
    <h3 className="t
    ext-xl font-bold text-gray-800">{title}</h3>
    <p className="text-gray-600 mt-2">{description}</p>
    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      {title.includes("Mindset") ? "Learn More" : title.includes("Strategies") ? "Get Started" : "Explore"}
    </button>
  </div>
);
const Blogs = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Latest Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <BlogCard key={index} title={blog.title} description={blog.description} image={blog.image} />
        ))}
      </div>
    </div>
  )
}

export default Blogs