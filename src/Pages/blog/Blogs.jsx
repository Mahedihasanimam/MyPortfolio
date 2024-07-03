import React from 'react';

const Blogs = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Introduction to React</h1>
      <p className="text-lg mb-2">By Mehedi Hasan</p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-OTH6bMRtkCaXL5OqslG8DJvY6VMLNj82LA&s" alt="" /> <br />
      <div className=" leading-relaxed">
        <p className="mb-4">
          React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.
        </p>
        <p className="mb-4">
          The main concepts of React include components, JSX, state, and props. Components are the building blocks of any React application, and a single app usually consists of multiple components. JSX is a syntax extension to JavaScript that looks similar to XML or HTML and is used to describe what the UI should look like. State is a built-in object that stores property values that belong to a component, while props are used to pass data from one component to another.
        </p>
        <p className="mb-4">
          One of the main advantages of React is that it allows developers to create large web applications that can update and render efficiently in response to data changes. It is component-based and allows developers to build encapsulated components that manage their own state, then compose them to make complex UIs. Because component logic is written in JavaScript instead of templates, developers can easily pass rich data through their app and keep state out of the DOM.
        </p>
        <p className="mb-4">
          Overall, React is a powerful and flexible library for building user interfaces. Its component-based architecture, combined with the use of JSX, state, and props, makes it easy to create complex UIs that are both efficient and easy to manage.
        </p>
      </div>

      <div className="">
      <h1 className="text-4xl font-bold mb-4">Introduction to JavaScript</h1>
      <p className="text-lg mb-2">By Mehedi Hasan</p>
      <img src="https://media.licdn.com/dms/image/D4D12AQEVeO32hO7sKA/article-cover_image-shrink_720_1280/0/1681748767021?e=2147483647&v=beta&t=_PzcjpBUdeI9DiXN_Jv-S4eJsNlITdi-F3aPPSin3Rk" alt="JavaScript Logo" className="mb-4" />
      <div className="leading-relaxed">
        <p className="mb-4">
          JavaScript is a versatile and powerful programming language commonly used in web development. It allows developers to create interactive and dynamic content for websites, making it an essential tool for front-end development. JavaScript can also be used on the server side, thanks to environments like Node.js.
        </p>
        <p className="mb-4">
          Initially developed by Netscape as a means to add dynamic and interactive elements to websites, JavaScript has since become one of the core technologies of the World Wide Web, alongside HTML and CSS. Its syntax is influenced by Java, but it is primarily a functional language, making it unique in its ability to handle both object-oriented and functional programming styles.
        </p>
        <p className="mb-4">
          One of the key features of JavaScript is its event-driven nature. This means that JavaScript programs are largely composed of event handlers that respond to user actions, such as clicks or key presses. This capability makes it possible to create highly interactive applications, such as games, responsive user interfaces, and real-time updates without needing to refresh the page.
        </p>
        <p className="mb-4">
          JavaScript has a rich ecosystem of libraries and frameworks that make development easier and more efficient. Popular libraries like jQuery simplify DOM manipulation, while frameworks like React, Angular, and Vue provide robust tools for building complex single-page applications. Additionally, tools like Node.js allow JavaScript to be used for server-side programming, expanding its versatility beyond the browser.
        </p>
        <p className="mb-4">
          Overall, JavaScript's flexibility, ease of use, and extensive ecosystem make it an indispensable tool for modern web development. Whether you're building a simple interactive form or a complex web application, JavaScript provides the functionality needed to bring your ideas to life.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Blogs;
