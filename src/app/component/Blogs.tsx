"use client";
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion } from "framer-motion";
import blog1 from '../../../public/blog1.png';
import blog2 from '../../../public/blog2.png';
import blog3 from '../../../public/blog3.png';
import blogIcon from '../../../public/blogIcon.png';

const blogs = [
  {
    title: "Growth Mindset for Success",
    description: "Discover how shifting your perspective from fixed intelligence to continuous learning can transform your academic journey and help you overcome challenges.",
    image: blog1
  },
  {
    title: "Personalized Study Strategies",
    description: "Ditch generic advice! Learn how to identify your unique learning style and develop tailored study plans that maximize your potential and boost your understanding.",
    image: blog2
  },
  {
    title: "Academic Goals, Future Aspirations",
    description: "Explore how linking your current studies to your long-term dreams can drive motivation and succeGrades are important, but purpose is powerful. Explore how linking your current studies to your long-term dreams can ignite your motivation and drive.",
    image: blog3
  }
];

const BlogCard = ({ title, description, image }: { title: string, description: string, image: StaticImageData }) => (
  <motion.div 
    className="p-4 text-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
  >
    <Image src={image} alt={title} width={391} height={293} className="mb-5.5" />
    <h3 className="text-2xl font-bold text-black">{title}</h3>
    <p className="text-black text-sm mt-1">{description}</p>
  </motion.div>
);

const Blogs = () => {
  return (
    <div className="mx-auto mb-[112px]">
      <h2 className="text-[64px] font-bold text-center text-[#533115] uppercase mb-6">Latest Blogs</h2>
      <div 
        className='bg-[#F6F6F6] pt-[38px] pb-[58px]'
        style={{ boxShadow: '0 0 4.6px 0 rgba(0, 0, 0, 0.25)' }}
      >
        <motion.div 
          className="2xl:px-[270px] px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-[70px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          {blogs.map((blog, index) => (
            <BlogCard key={index} title={blog.title} description={blog.description} image={blog.image} />
          ))}
        </motion.div>
      </div>

      <motion.button 
        className='cursor-pointer flex justify-center mx-auto mt-[-40px]'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Image src={blogIcon} alt="" />
      </motion.button>
    </div>
  )
}

export default Blogs;
