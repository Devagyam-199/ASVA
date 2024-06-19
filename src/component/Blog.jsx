import { useState } from 'react';

const Blog=()=> {
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      author: 'Phoenix Baker',
      date: '19 Jan 2022',
      title: 'Optimize Page for ATS',
      description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here\'s how to get...',
    },
    {
      author: 'Olivia Rhye',
      date: '20 Jan 2022',
      title: 'How do you test and optimize your presentations?',
      description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    },
    {
      author: 'Lana Steiner',
      date: '18 Jan 2022',
      title: 'Optimize Page for ATS',
      description: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing.',
    },
  ];

  const filteredPosts = searchTerm
    ? blogPosts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : blogPosts;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog Topics</h1>
      <div className="flex items-center mb-4">
        <input
          type="text"
          className="border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <svg
          className="h-5 w-5 ml-2 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border rounded-md p-4 shadow-md">
          <h2 className="text-lg font-bold mb-2">All Blog Posts</h2>
          <ul>
            <li>LLM* (Large language Models)</li>
            <li>Open-source</li>
            <li>Tutorials</li>
            <li>Company</li>
            <li>Thought Leadership</li>
            <li>Customers</li>
          </ul>
        </div>
        {filteredPosts.map((post, index) => (
          <div key={index} className="border rounded-md p-4 shadow-md">
            <div className="text-sm text-gray-500 mb-2">
              {post.author} · {post.date}
            </div>
            <h2 className="text-lg font-bold mb-2">{post.title}</h2>
            <p>{post.description}</p>
            <a
              href="#"
              className="text-blue-500 hover:underline"
            >
              Read More 
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;