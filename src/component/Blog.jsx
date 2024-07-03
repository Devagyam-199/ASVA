import { useState } from 'react';
import blog1 from './Images/blog1.jpeg'
import blog2 from './Images/blog2.jpeg'
import blog3 from './Images/blog3.jpeg'
import blog4 from './Images/blog4.jpeg'
import blog5 from './Images/blog5.jpeg'
import blog6 from './Images/blog6.jpeg'
import blog7 from './Images/blog7.jpeg'
import blog8 from './Images/blog8.jpeg'
import blog9 from './Images/blog9.jpeg'

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
      author: 'Vats Shah',
      date: 'July 3, 2024',
      title: `How ASVA AI'S CV Parsing helps hiring decisions`,
      description: 'Empowering Data-Driven Recruitment: The ASVA AI CV Parsing Advantage.',
      imgurl: blog1,
      href: "https://www.linkedin.com/pulse/empowering-data-driven-recruitment-asva-ai-cv-parsing-advantage-zxq0c/?trackingId=jvoCm0LFRauxXxA4rRFFjg%3D%3D"
    },
    {
      author: 'Vats Shah',
      date: 'July 3, 2024',
      title: 'Enhancing Candidate CV Parsing with ASVA AI',
      description: 'Elevating the Candidate Experience: The Hidden Power of Efficient CV Parsing.',
      imgurl: blog2,
      href: "https://www.linkedin.com/pulse/enhancing-candidate-experience-efficient-cv-parsing-asva-ai-pbfdc/?trackingId=Bvz05b6ZTtqcHWgKccIQVQ%3D%3D"
    },
    {
      author: 'Vats Shah',
      date: 'July 3, 2024',
      title: 'The cost effectiveness of ASVA AI’s CV Parsing',
      description: 'The Cost_Effectiveness of Implementing CV Parsing.',
      imgurl: blog3,
      href: "https://www.linkedin.com/pulse/cost-effectiveness-implementing-cv-parsing-your-recruitment-process-wrhkf/?trackingId=QivwHKNLRUOCuYL5%2FpbBEA%3D%3D "
    },

  ];

  const mainPosts = [
    {
      author: 'Vats Shah',
      date: 'July 2, 2024',
      title: 'ATS Integrating to CV Parsing  ',
      description: 'Your Applicant Tracking System(ATS) is the backbone of your operations.',
      imgurl: blog4,
      href: "https://www.linkedin.com/pulse/integrating-cv-parsing-your-existing-ats-applicant-tracking-system-3wnof/?trackingId=5oqrStgHTQmNkIgrheWiUw%3D%3D "
    },
    {
      author: 'Vats Shah',
      date: 'July 1, 2024',
      title: 'The role of machine learning in CV Parsing',
      description: 'Improving diversity and inclusion through unbiased CV Parsing.',
      imgurl: blog5,
      href: "https://www.linkedin.com/pulse/revolutionizing-recruitment-how-machine-learning-transforming-l1xdf/?trackingId=yVzzA8J0SCOnVXbXx%2FvFMw%3D%3D "
    },
    {
      author: 'Vats Shah',
      date: 'July 1, 2024',
      title: 'Improving diversity through CV Parsing',
      description: 'Improving diversity and inclusion through unbiased CV Parsing.',
      imgurl: blog6,
      href: "https://www.linkedin.com/pulse/improving-diversity-inclusion-through-unbiased-cv-parsing-asva-ai-pgv9f/?trackingId=JsOL3C8LQGqm66FigkDRlQ%3D%3D "
    },
    {
      author: 'Vats Shah',
      date: 'June 30, 2024',
      title: 'Top benefits of using CV Parsing',
      description: 'The top benefits of implementing this technology in your HR department.',
      imgurl: blog7,
      href: "https://www.linkedin.com/pulse/top-benefits-using-cv-parsing-software-hr-departments-asva-ai-kvf6f/?trackingId=Jy32iU8QS9GeuXTfWxyztg%3D%3D "
    },
    {
      author: 'Vats Shah',
      date: 'June 29, 2024',
      title: 'How AI is revolutionising recruitment processes',
      description: 'Let\'s explore the key ways AI is revolutionizing recruitment.',
      imgurl: blog8,
      href: "https://www.linkedin.com/pulse/how-ai-revolutionizing-recruitment-process-asva-ai-o6xaf/?trackingId=phUv1wsCSl6iM3TsvP6fiA%3D%3D "
    },
    {
      author: 'Vats Shah',
      date: 'June 29, 2024',
      title: 'The evolution of CV Parsing',
      description: `The heart of this evolution lies in CV Parsing technology.`,
      imgurl: blog9,
      href: "https://www.linkedin.com/feed/update/urn:li:share:7212673897626820609/?actorCompanyId=101984708"
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
    <div id='blog'>
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
                    <a href={post.href}>
                      <div className=' mb-4'>
                        <img src={post.imgurl} alt="image" />
                      </div>
                      <div className="text-sm text-violet-700 font-semibold mb-2">
                        {post.author} · {post.date}
                      </div>
                      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                      <p className=' text-sm text-gray-400'>{post.description}</p>
                    </a>
                  </div>
                ))}
              </div>
            </a>
          </div>
        </div>
        <div className='flex md:flex-row flex-col items-center md:items-start w-full'>
          <div className=' bg-white flex flex-col gap-y-3 p-8 md:w-5/6'>
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
                onChange={(event) => setEmail(event.target.value)} F
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
                    <a href={post.href}>
                      <div className='mb-4'>
                        <img src={post.imgurl} alt="" />
                      </div>
                      <div className="text-sm text-violet-700 font-semibold mb-2">
                        {post.author} · {post.date}
                      </div>
                      <h2 className="text-lg font-bold mb-2">{post.title}</h2>
                      <p>{post.description}</p>
                    </a>
                  </div>
                ))}
              </div>
            </a>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Blog;