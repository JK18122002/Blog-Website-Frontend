import BlogCard from '@/components/BlogCard'
import React, { useEffect } from 'react'
import LMS from "../assets/LMS.png"
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setBlog } from '@/redux/blogSlice'
// import BlogCardList from '@/components/BlogCardList'

export const blogJson = [
  {
    "id": 1,
    "title": "The Ultimate Guide to Digital Marketing in 2025",
    "author": "Rohit Singh",
    "date": "2025-03-27",
    "content": "Digital marketing is constantly evolving. In 2025, businesses must focus on AI-driven strategies, voice search optimization, and hyper-personalization.",
    "tags": ["digital marketing", "SEO", "social media", "PPC"],
    "category": "Digital Marketing",
    "image": LMS
  },
  {
    "id": 2,
    "title": "Building a Full-Stack LMS with MERN Stack",
    "author": "Rohit Singh",
    "date": "2025-03-27",
    "content": "Step-by-step guide to building a Learning Management System (LMS) using React, Tailwind CSS, Node.js, Express.js, and MongoDB.",
    "tags": ["MERN stack", "LMS", "React", "Node.js"],
    "category": "Web Development",
    "image": LMS
  },
  {
    "id": 3,
    "title": "Top 10 WordPress Plugins for 2025",
    "author": "Rohit Singh",
    "date": "2025-03-27",
    "content": "This article covers the top 10 must-have plugins for security, SEO, performance, and customization in WordPress.",
    "tags": ["WordPress", "plugins", "SEO", "website optimization"],
    "category": "Blogging",
    "image": LMS
  },
  {
    "id": 4,
    "title": "Photography Tips for Beginners",
    "author": "Rohit Singh",
    "date": "2025-03-28",
    "content": "Learn the basics of photography, including composition, lighting, and camera settings.",
    "tags": ["Photography", "Camera", "Tips"],
    "category": "Photography",
    "image": LMS
  },
  {
    "id": 5,
    "title": "Delicious and Healthy Recipes for 2025",
    "author": "Rohit Singh",
    "date": "2025-03-29",
    "content": "Discover easy and healthy cooking recipes for everyday meals and special occasions.",
    "tags": ["Cooking", "Recipes", "Healthy Food"],
    "category": "Cooking",
    "image": LMS
  },
  {
    "id": 6,
    "title": "Artificial Intelligence in Everyday Life",
    "author": "Rohit Singh",
    "date": "2025-04-01",
    "content": "AI is transforming how we work, live, and communicate. Explore real-world applications in healthcare, finance, education, and home automation.",
    "tags": ["AI", "Machine Learning", "Automation"],
    "category": "Artificial Intelligence",
    "image": LMS
  },
  {
    "id": 7,
    "title": "Must-Have Tech Gadgets for 2025",
    "author": "Rohit Singh",
    "date": "2025-04-02",
    "content": "From smart home devices to wearable technology, these gadgets make life easier, smarter, and more connected.",
    "tags": ["Gadgets", "Technology", "Innovation"],
    "category": "Technology & Gadgets",
    "image": LMS
  },
  {
    "id": 8,
    "title": "Top Cybersecurity Practices for 2025",
    "author": "Rohit Singh",
    "date": "2025-04-03",
    "content": "Protect digital assets with multi-factor authentication, secure coding practices, and proactive threat monitoring.",
    "tags": ["Cybersecurity", "Data Protection", "Hacking Prevention"],
    "category": "Cybersecurity",
    "image": LMS
  },
  {
    "id": 9,
    "title": "Finance & Investing Trends in 2025",
    "author": "Rohit Singh",
    "date": "2025-04-04",
    "content": "Learn the latest strategies for personal finance, investing, and wealth management.",
    "tags": ["Finance", "Investing", "Wealth"],
    "category": "Finance & Investing",
    "image": LMS
  },
  {
    "id": 10,
    "title": "Starting Your Own Business in 2025",
    "author": "Rohit Singh",
    "date": "2025-04-05",
    "content": "A comprehensive guide for aspiring entrepreneurs on launching startups, finding funding, and scaling successfully.",
    "tags": ["Startup", "Business", "Entrepreneurship"],
    "category": "Business & Startups",
    "image": LMS
  },
  {
    "id": 11,
    "title": "Healthy Living: Tips for Fitness and Wellness",
    "author": "Rohit Singh",
    "date": "2025-04-06",
    "content": "Maintain a balanced lifestyle with exercise routines, nutrition tips, and mental health strategies to stay fit and active.",
    "tags": ["Fitness", "Health", "Wellness"],
    "category": "Health & Fitness",
    "image": LMS
  },
  {
    "id": 12,
    "title": "Exploring the World: Top Travel Destinations",
    "author": "Rohit Singh",
    "date": "2025-04-07",
    "content": "Discover hidden gems and popular travel spots along with tips for budget-friendly trips and unique experiences.",
    "tags": ["Travel", "Adventure", "Tourism"],
    "category": "Travel & Adventure",
    "image": LMS
  },
  {
    "id": 13,
    "title": "Lifestyle Trends to Follow in 2025",
    "author": "Rohit Singh",
    "date": "2025-04-08",
    "content": "Explore the latest lifestyle trends in fashion, home design, and personal growth that are shaping 2025.",
    "tags": ["Lifestyle", "Trends", "Fashion"],
    "category": "Lifestyle",
    "image": LMS
  },
  {
    "id": 14,
    "title": "Top Gaming and Esports News",
    "author": "Rohit Singh",
    "date": "2025-04-09",
    "content": "Stay updated on the biggest gaming releases, esports tournaments, and emerging trends in the gaming world.",
    "tags": ["Gaming", "Esports", "Games"],
    "category": "Gaming & Esports",
    "image": LMS
  },
  {
    "id": 15,
    "title": "Science & Space Discoveries of 2025",
    "author": "Rohit Singh",
    "date": "2025-04-10",
    "content": "Learn about the latest breakthroughs in science, space exploration, and technological advancements.",
    "tags": ["Science", "Space", "Research"],
    "category": "Science & Space",
    "image": LMS
  },
  {
    "id": 16,
    "title": "Educational Tools and E-Learning Trends",
    "author": "Rohit Singh",
    "date": "2025-04-11",
    "content": "Discover the latest in online education, e-learning platforms, and tools for teachers and students in 2025.",
    "tags": ["Education", "E-Learning", "Technology"],
    "category": "Education & Learning",
    "image": LMS
  },
  {
    "id": 17,
    "title": "Green Technology and Sustainable Innovations",
    "author": "Rohit Singh",
    "date": "2025-04-12",
    "content": "Learn about eco-friendly technologies, renewable energy solutions, and sustainable practices shaping the future.",
    "tags": ["Green Tech", "Sustainability", "Innovation"],
    "category": "Green Tech & Sustainability",
    "image": LMS
  }
];



const Blog = () => {

    const dispatch = useDispatch()
    const { blog } = useSelector(store => store.blog)

    useEffect(() => {
        const getAllPublsihedBlogs = async () => {
            try {
                const res = await axios.get(`https://blog-website-backend-eejk.onrender.com/api/v1/blog/get-published-blogs`, { withCredentials: true })
                if (res.data.success) {
                    dispatch(setBlog(res.data.blogs))
                }
            } catch (error) {
                console.log(error);

            }
        }
        getAllPublsihedBlogs()
    },[])

    return (
        <div className='pt-16'>
            <div className='max-w-6xl mx-auto text-center flex flex-col space-y-4 items-center'>
                <h1 className='text-4xl font-bold text-center pt-10 '>Our Blogs</h1>
                <hr className=' w-24 text-center border-2 border-red-500 rounded-full' />

            </div>
            <div className='max-w-6xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-3 py-10 px-4 md:px-0'>
                {
                    blog?.map((blog, index) => {
                        return <BlogCard blog={blog} key={index} />
                    })
                }
            </div>
        </div>
    )
}

export default Blog
