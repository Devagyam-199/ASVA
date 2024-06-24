import { useState } from 'react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!firstName || !lastName || !email) {
      setError('Please fill in all fields');
    } else {
      setError(null);
      alert('Subscription successful!');
      setFirstName('');
      setLastName('');
      setEmail('');
    }
  };
  

  const blogPosts = [

    {
      author: 'Olivia Rhye',
      date: '20 Jan 2022',
      title: 'How do you test and optimize your presentations?',
      description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    },
    {
      author: 'Phoenix Baker',
      date: '19 Jan 2022',
      title: 'Optimize Page for ATS',
      description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here\'s how to get...',
    },
    {
      author: 'Lana Steiner',
      date: '18 Jan 2022',
      title: 'Optimize Page for ATS',
      description: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing.',
    },

  ];

  const mainPosts = [
    {
      author: 'Alec Whitten',
      date: '17 Jan 2022',
      title: 'features of different ATS platforms',
      description: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
    },
    {
      author: 'Demi WIlkinson',
      date: '16 Jan 2022',
      title: 'optimize page for ATS',
      description: 'Mental models are simple expressions of complex processes or relationships.',
    },
    {
      author: 'Candice Wu',
      date: '15 Jan 2022',
      title: 'Optimize Page for ATS',
      description: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
    },
    {
      author: 'Natali Craig',
      date: '14 Jan 2022',
      title: 'Optimize Page for ATS',
      description: 'Collaboration can make our teams stronger, and our individual designs better.',
    },
    {
      author: 'Drew Cano',
      date: '13 Jan 2022',
      title: 'Optimize Page for ATS',
      description: 'JavaScript frameworks make development easy with extensive features and functionalities.',
    },
    {
      author: 'Orlando Diggs',
      date: '12 Jan 2022',
      title: 'Optimize Page for ATS',
      description: `Starting a community doesn't need to be complicated, but how do you get started?`,
    }
  ]

  const filteredPosts = searchTerm
    ? blogPosts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : blogPosts;

  const mainfilteredPosts = searchTerm
    ? mainPosts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : mainPosts;

  return (
    <>
      <div className="container mx-auto p-4">
        <div className='flex md:flex-row flex-col items-center md:items-start w-full'>
          <div className='p-8 bg-white flex flex-col gap-y-3 md:w-1/3'>
            <h1 className="text-3xl md:flex hidden font-bold mb-8">Blog Topics</h1>
            <div className="flex rounded-md py-1 px-1 border gap-x-3 w-full items-center mb-8">
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
              <input
                type="text"
                className="border-none outline-none px-3 py-2"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

            </div>
            <div className="md:flex md:flex-col hidden rounded-md text-start ">
              <h2 className="text-lg font-semibold mb-5">All Blog Posts</h2>
              <ul className='flex flex-col gap-y-5 text-gray-500'>
                <li>LLM* (Large language Models)</li>
                <li>Open-source</li>
                <li>Tutorials</li>
                <li>Company</li>
                <li>Thought Leadership</li>
                <li>Customers</li>
              </ul>
            </div>
          </div>
          <div className='flex h-full items-start p-8 flex-col'>
            <h1 className="text-3xl font-bold px-4 mb-4">Recent Blog Posts</h1>
            <a href="#">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredPosts.map((post, index) => (
                  <div key={index} className="rounded-md p-4 ">
                    <div className='bg-gray-100 h-52 mb-4'>

                    </div>
                    <div className="text-sm text-violet-700 font-semibold mb-2">
                      {post.author} · {post.date}
                    </div>
                    <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                    <p className=' text-sm text-gray-400'>{post.description}</p>
                  </div>
                ))}
              </div>
            </a>
          </div>
        </div>
        <div className='flex md:flex-row flex-col items-center md:items-start w-full'>
          <div className=' bg-white flex flex-col gap-y-3 p-8 md:w-1/2'>
            <h1 className="text-3xl font-bold text-start mb-8">Subscribe to our Newsletter</h1>
            <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
              <div className="flex flex-col gap-4">
                <div className="w-full">
                  <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">FIRST NAME*</label>
                  <input
                    type="text"
                    id="firstName"
                    className="appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">LAST NAME*</label>
                  <input
                    type="text"
                    id="lastName"
                    className="appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </div>
              </div>
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email*</label>
              <input
                type="email"
                id="email"
                className=" appearance-none border w-full py-3 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              {error && <div className="text-red-500">{error}</div>}
              <button
                type="submit"
                className="bg-violet-700 hover:bg-gradient-to-br from-violet-900 via-violet-600 to-violet-200 transition-all duration-150 text-white w-1/2 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </form>
          </div>
          <div className='flex h-full items-start p-8 flex-col'>
            <h1 className="text-3xl font-bold px-4 mb-4">All Blog Posts</h1>
            <a href="#">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {mainfilteredPosts.map((post, index) => (
                  <div key={index} className="rounded-md p-4 ">
                    <div className='bg-gray-100 h-52 mb-4'>

                    </div>
                    <div className="text-sm text-violet-700 font-semibold mb-2">
                      {post.author} · {post.date}
                    </div>
                    <h2 className="text-lg font-bold mb-2">{post.title}</h2>
                    <p>{post.description}</p>
                  </div>
                ))}
              </div>
            </a>
          </div>
        </div>
      </div>


    </>
  );
}

export default Blog;