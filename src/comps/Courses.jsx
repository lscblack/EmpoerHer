import React from 'react';

export const Courses = () => {
  const courses = [
    {
      id: 1,
      image: 'https://i.ytimg.com/vi/6EukZDFE_Zg/maxresdefault.jpg',
      title: 'Web Development',
      description: 'Learn the fundamentals of web development with HTML, CSS, and JavaScript.',
      date: '1/3/2023',
    },
    {
      id: 2,
      image: 'https://img-b.udemycdn.com/course/750x422/2314160_8d61_6.jpg',
      title: 'Data Science',
      description: 'Master data analysis, statistics, and machine learning techniques.',
      date: '1/3/2023',
    },
    {
      id: 3,
      image: 'https://d2i2nj5el4wq1j.cloudfront.net/assets/courses/beginner-course-cf789b85328e4b8fac61cdf9ff8f69160dc290c48272b06e008c9081b024245c.png',
      title: 'UI/UX Design',
      description: 'Design user-friendly and aesthetically pleasing interfaces.',
      date: '1/3/2023',
    },
    {
      id: 4,
      image: 'https://resources.reed.co.uk/courses/coursemedia/436537/6a1e69a6-6922-43ab-bc85-5d8548a32e20_cover.webp',
      title: 'Digital Marketing',
      description: 'Become an expert in SEO, PPC, and social media marketing.',
      date: '1/3/2023',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Courses</h2>

      {/* Responsive 4-Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 text-sm">{course.date}</span>
                <button className="hover:bg-blue-500  px-4 py-2 rounded-lg hover:text-white text-blue-500 text-sm transition duration-300">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
