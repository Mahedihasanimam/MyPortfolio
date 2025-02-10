import React from 'react';

const blogsData = [
  {
    title: "Introduction to React",
    author: "Mehedi Hasan",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-OTH6bMRtkCaXL5OqslG8DJvY6VMLNj82LA&s",
    content: [
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of developers. React can be used as a base for single-page or mobile applications. However, it focuses on state management and rendering, so additional libraries are required for routing and other functionalities.",
      "The main concepts of React include components, JSX, state, and props. Components are the building blocks of React apps. JSX is a syntax extension that resembles HTML. State manages component data, while props pass data between components.",
      "React enables efficient updates and rendering in response to data changes. It is component-based, allowing developers to build encapsulated components that manage their own state. Because logic is written in JavaScript instead of templates, rich data can be passed easily throughout an app.",
      "Overall, React is a powerful library for building user interfaces with its component-based architecture, JSX, state, and props. It simplifies UI development and enhances performance."
    ]
  },
  {
    title: "Introduction to JavaScript",
    author: "Mehedi Hasan",
    image: "https://media.licdn.com/dms/image/D4D12AQEVeO32hO7sKA/article-cover_image-shrink_720_1280/0/1681748767021?e=2147483647&v=beta&t=_PzcjpBUdeI9DiXN_Jv-S4eJsNlITdi-F3aPPSin3Rk",
    content: [
      "JavaScript is a versatile programming language widely used in web development. It enables dynamic and interactive content on websites and is essential for front-end development. Additionally, JavaScript is used on the server side through environments like Node.js.",
      "Initially developed by Netscape, JavaScript is one of the core web technologies alongside HTML and CSS. Its syntax is influenced by Java but supports both object-oriented and functional programming styles.",
      "A key feature of JavaScript is its event-driven nature, allowing programs to respond to user actions like clicks or key presses. This enables the creation of interactive applications, including games and real-time updates.",
      "JavaScript has a vast ecosystem of libraries and frameworks, such as jQuery, React, Angular, and Vue. Node.js further extends JavaScript’s capabilities to server-side development, making it an all-purpose language for modern web applications."
    ]
  }
];

const Blogs = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-5xl font-extrabold text-center text-green-600 mb-8">My Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogsData.map((blog, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-green-500">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{blog.title}</h2>
            <p className="text-gray-600 text-sm mb-4">By {blog.author}</p>
            {blog.content.map((paragraph, idx) => (
              <p key={idx} className="text-gray-700 mb-3">{paragraph}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
