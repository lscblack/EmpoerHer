import React, { useState } from 'react';
import { FaSearch, FaFilter, FaStar } from 'react-icons/fa';

// Mock data for courses
const coursesData = [
  { 
    id: 1, 
    title: 'Introduction to Leadership', 
    category: 'Leadership', 
    level: 'Beginner', 
    price: 99, 
    rating: 4.5, 
    image: 'https://via.placeholder.com/300?text=Leadership'
  },
  { 
    id: 2, 
    title: 'Advanced Web Development', 
    category: 'Technology', 
    level: 'Advanced', 
    price: 149, 
    rating: 4.8, 
    image: 'https://via.placeholder.com/300?text=Web+Development'
  },
  { 
    id: 3, 
    title: 'Personal Branding Mastery', 
    category: 'Career Development', 
    level: 'Intermediate', 
    price: 129, 
    rating: 4.6, 
    image: 'https://via.placeholder.com/300?text=Branding'
  },
  { 
    id: 4, 
    title: 'Data Science Fundamentals', 
    category: 'Technology', 
    level: 'Beginner', 
    price: 199, 
    rating: 4.9, 
    image: 'https://via.placeholder.com/300?text=Data+Science'
  },
  { 
    id: 5, 
    title: 'Marketing Strategies for 2024', 
    category: 'Business', 
    level: 'Intermediate', 
    price: 119, 
    rating: 4.3, 
    image: 'https://via.placeholder.com/300?text=Marketing'
  },
  { 
    id: 6, 
    title: 'Introduction to Python', 
    category: 'Technology', 
    level: 'Beginner', 
    price: 89, 
    rating: 4.7, 
    image: 'https://via.placeholder.com/300?text=Python'
  },
  { 
    id: 7, 
    title: 'Digital Marketing Basics', 
    category: 'Marketing', 
    level: 'Beginner', 
    price: 79, 
    rating: 4.2, 
    image: 'https://via.placeholder.com/300?text=Digital+Marketing'
  },
  { 
    id: 8, 
    title: 'JavaScript Mastery', 
    category: 'Technology', 
    level: 'Advanced', 
    price: 139, 
    rating: 4.9, 
    image: 'https://via.placeholder.com/300?text=JavaScript'
  },
  { 
    id: 9, 
    title: 'Content Creation 101', 
    category: 'Media', 
    level: 'Beginner', 
    price: 109, 
    rating: 4.4, 
    image: 'https://via.placeholder.com/300?text=Content+Creation'
  },
  { 
    id: 10, 
    title: 'Cybersecurity Essentials', 
    category: 'Technology', 
    level: 'Intermediate', 
    price: 159, 
    rating: 4.5, 
    image: 'https://via.placeholder.com/300?text=Cybersecurity'
  },
  { 
    id: 11, 
    title: 'Graphic Design Basics', 
    category: 'Design', 
    level: 'Beginner', 
    price: 99, 
    rating: 4.7, 
    image: 'https://via.placeholder.com/300?text=Graphic+Design'
  },
  { 
    id: 12, 
    title: 'Photography Masterclass', 
    category: 'Media', 
    level: 'Advanced', 
    price: 149, 
    rating: 4.8, 
    image: 'https://via.placeholder.com/300?text=Photography'
  },
  { 
    id: 13, 
    title: 'Cloud Computing Essentials', 
    category: 'Technology', 
    level: 'Intermediate', 
    price: 179, 
    rating: 4.6, 
    image: 'https://via.placeholder.com/300?text=Cloud+Computing'
  },
  { 
    id: 14, 
    title: 'Project Management 101', 
    category: 'Business', 
    level: 'Beginner', 
    price: 119, 
    rating: 4.3, 
    image: 'https://via.placeholder.com/300?text=Project+Management'
  },
  { 
    id: 15, 
    title: 'Machine Learning Basics', 
    category: 'Technology', 
    level: 'Advanced', 
    price: 199, 
    rating: 4.9, 
    image: 'https://via.placeholder.com/300?text=Machine+Learning'
  },
  { 
    id: 16, 
    title: 'SEO Mastery', 
    category: 'Marketing', 
    level: 'Intermediate', 
    price: 129, 
    rating: 4.5, 
    image: 'https://via.placeholder.com/300?text=SEO'
  },
  { 
    id: 17, 
    title: 'Artificial Intelligence for Everyone', 
    category: 'Technology', 
    level: 'Beginner', 
    price: 149, 
    rating: 4.8, 
    image: 'https://via.placeholder.com/300?text=Artificial+Intelligence'
  },
  { 
    id: 18, 
    title: 'Ethical Hacking Basics', 
    category: 'Technology', 
    level: 'Advanced', 
    price: 169, 
    rating: 4.7, 
    image: 'https://via.placeholder.com/300?text=Ethical+Hacking'
  },
  { 
    id: 19, 
    title: 'Social Media Marketing', 
    category: 'Marketing', 
    level: 'Beginner', 
    price: 89, 
    rating: 4.6, 
    image: 'https://via.placeholder.com/300?text=Social+Media+Marketing'
  },
  { 
    id: 20, 
    title: 'E-commerce Strategies', 
    category: 'Business', 
    level: 'Intermediate', 
    price: 159, 
    rating: 4.4, 
    image: 'https://via.placeholder.com/300?text=E-commerce'
  },
];


const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  // Filter courses based on search term and selected filters
  const filteredCourses = coursesData.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === '' || course.category === selectedCategory) &&
    (selectedLevel === '' || course.level === selectedLevel) &&
    (selectedPrice === '' || course.price <= parseInt(selectedPrice))
  );

  // Get current courses for pagination
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-11/12 mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Our Courses</h1>
        
        {/* Search and Filter Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex flex-col md:flex-row md:items-center mb-4">
            <div className="relative flex-grow mb-4 md:mb-0 md:mr-4">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            <div className="flex items-center">
              <FaFilter className="mr-2 text-indigo-500" />
              <span className="font-medium">Filters:</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Leadership">Leadership</option>
              <option value="Technology">Technology</option>
              <option value="Career Development">Career Development</option>
            </select>
            <select
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              <option value="">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            <select
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
            >
              <option value="">All Prices</option>
              <option value="100">Under $100</option>
              <option value="150">Under $150</option>
              <option value="200">Under $200</option>
            </select>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {currentCourses.map(course => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="w-full h-[210px] overflow-hidden">
                <img src={course.image} alt="" className='w-full h-full object-cover' />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.category}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-2 py-1 rounded">
                    {course.level}
                  </span>
                  <span className="text-gray-900 font-bold">${course.price}</span>
                </div>
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span className="text-gray-700">{course.rating.toFixed(1)}</span>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50">
                <button className="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded hover:bg-indigo-700 transition duration-300">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            {Array.from({ length: Math.ceil(filteredCourses.length / coursesPerPage) }).map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                  currentPage === index + 1
                    ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                    : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;