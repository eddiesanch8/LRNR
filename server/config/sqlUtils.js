import connectToDatabase from "./db.js";
const pool = await connectToDatabase();

export const initQuestionsTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS questions (
   id INT AUTO_INCREMENT PRIMARY KEY,
   topic VARCHAR(100) NOT NULL,
   difficulty ENUM('easy', 'medium', 'hard') NOT NULL,
   question_text TEXT NOT NULL, 
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  pool.query(query, (err) => {
    if (err) console.error("Error creating question table:", err);
    else console.log("Question table initiated");
  });
};

export const seedQuestions = () => {
  const seedQuestions = [
    [
      "JavaScript",
      "easy",
      "What is the difference between var, let, and const in JavaScript?",
    ],
    ["JavaScript", "easy", "Explain what a JavaScript function does."],
    [
      "JavaScript",
      "easy",
      "What is a variable and how do you use it in JavaScript?",
    ],
    ["JavaScript", "easy", "What is the purpose of the console.log statement?"],
    [
      "JavaScript",
      "easy",
      "Describe how you would write a simple for loop in JavaScript.",
    ],
    ["JavaScript", "easy", "What is an array and when would you use one?"],
    ["JavaScript", "easy", "How does JavaScript handle string concatenation?"],
    ["JavaScript", "easy", "What is a boolean value used for?"],
    [
      "JavaScript",
      "easy",
      "Explain the difference between == and === in JavaScript.",
    ],
    [
      "JavaScript",
      "easy",
      "What happens when you try to access a variable that is not defined?",
    ],
    ["JavaScript", "easy", "Describe what NaN means in JavaScript."],
    [
      "JavaScript",
      "easy",
      "What is a comment and how do you write one in JavaScript?",
    ],
    ["JavaScript", "easy", "How do you declare a function in JavaScript?"],
    ["JavaScript", "easy", "What does the return statement do in a function?"],
    ["JavaScript", "easy", "What are JavaScript data types?"],
    ["JavaScript", "medium", "Explain how scope works in JavaScript."],
    [
      "JavaScript",
      "medium",
      "What is a callback function and why is it useful?",
    ],
    [
      "JavaScript",
      "medium",
      "Describe how promises help with asynchronous code.",
    ],
    [
      "JavaScript",
      "medium",
      "What is the difference between null and undefined?",
    ],
    ["JavaScript", "medium", "How does the event loop work in JavaScript?"],
    [
      "JavaScript",
      "medium",
      "Explain what closures are and give an example use case.",
    ],
    ["JavaScript", "medium", "What is the difference between forEach and map?"],
    ["JavaScript", "medium", "What is destructuring and how is it useful?"],
    [
      "JavaScript",
      "medium",
      "How does hoisting affect variable and function declarations?",
    ],
    [
      "JavaScript",
      "medium",
      "Explain how arrow functions differ from regular functions.",
    ],
    [
      "JavaScript",
      "medium",
      "What are template literals and how do they work?",
    ],
    [
      "JavaScript",
      "medium",
      "What is the difference between shallow and deep copies of objects?",
    ],
    ["JavaScript", "medium", "Explain how async/await works in JavaScript."],
    [
      "JavaScript",
      "medium",
      "How does JavaScript handle errors with try/catch?",
    ],
    ["JavaScript", "medium", "What are modules and why are they useful?"],

    ["JavaScript", "hard", "Explain prototypal inheritance in JavaScript."],
    [
      "JavaScript",
      "hard",
      "What happens behind the scenes when you call a function with the new keyword?",
    ],
    [
      "JavaScript",
      "hard",
      "Describe how JavaScript’s garbage collection works.",
    ],
    [
      "JavaScript",
      "hard",
      "How would you optimize performance in a large JavaScript application?",
    ],
    [
      "JavaScript",
      "hard",
      "What are generator functions and what problem do they solve?",
    ],
    ["JavaScript", "hard", "Explain how event delegation works."],
    [
      "JavaScript",
      "hard",
      "Describe how debouncing or throttling can be implemented manually.",
    ],
    [
      "JavaScript",
      "hard",
      "What is a memory leak and how would you prevent one in JS?",
    ],
    [
      "JavaScript",
      "hard",
      "How does JavaScript handle single-threaded concurrency?",
    ],
    [
      "JavaScript",
      "hard",
      "Describe how you would implement a custom promise from scratch.",
    ],
    ["JavaScript", "hard", "What are WeakMaps and WeakSets used for?"],
    ["JavaScript", "hard", "How does JavaScript handle prototype chains?"],
    [
      "JavaScript",
      "hard",
      "Describe the difference between mutable and immutable data structures in JS.",
    ],
    ["JavaScript", "hard", "Explain how you might implement a polyfill."],
    [
      "JavaScript",
      "hard",
      "How would you design a custom iterator in JavaScript?",
    ],

    ["AWS", "easy", "What is AWS and what is it used for?"],
    ["AWS", "easy", "Explain what an EC2 instance is."],
    ["AWS", "easy", "What is S3 used for?"],
    ["AWS", "easy", "What is the purpose of IAM in AWS?"],
    ["AWS", "easy", "What is a region in AWS?"],
    [
      "AWS",
      "easy",
      "What is the difference between availability zones and regions?",
    ],
    ["AWS", "easy", "Explain how you might host a static website on AWS."],
    ["AWS", "easy", "What is AWS Lambda used for?"],
    ["AWS", "easy", "What is CloudWatch and what does it do?"],
    ["AWS", "easy", "What does scalability mean in the context of AWS?"],
    ["AWS", "easy", "How does AWS handle data backups?"],
    ["AWS", "easy", "What is the AWS free tier?"],
    ["AWS", "easy", "What does on-demand pricing mean?"],
    ["AWS", "easy", "How would you explain AWS to a non-technical person?"],
    ["AWS", "easy", "What are some examples of AWS services?"],

    ["AWS", "medium", "Explain the difference between EC2 and Lambda."],
    ["AWS", "medium", "What is the role of an IAM policy?"],
    ["AWS", "medium", "Describe how S3 versioning works."],
    [
      "AWS",
      "medium",
      "What is the difference between public and private subnets in a VPC?",
    ],
    ["AWS", "medium", "How would you secure an S3 bucket?"],
    [
      "AWS",
      "medium",
      "What is the difference between horizontal and vertical scaling in AWS?",
    ],
    ["AWS", "medium", "How can CloudFormation help automate infrastructure?"],
    ["AWS", "medium", "What is an Auto Scaling group and why is it important?"],
    ["AWS", "medium", "Explain how CloudTrail differs from CloudWatch."],
    ["AWS", "medium", "What is the purpose of Elastic Load Balancing?"],
    [
      "AWS",
      "medium",
      "Describe how to connect a database instance (RDS) to an EC2 application.",
    ],
    ["AWS", "medium", "What is the benefit of using Route 53?"],
    [
      "AWS",
      "medium",
      "How would you manage secrets or credentials securely in AWS?",
    ],
    ["AWS", "medium", "Explain the shared responsibility model in AWS."],
    ["AWS", "medium", "What’s the difference between EBS and S3 storage?"],
    [
      "AWS",
      "hard",
      "How would you design a fault-tolerant architecture on AWS?",
    ],
    ["AWS", "hard", "Explain how AWS handles high availability."],
    ["AWS", "hard", "Describe the differences between ECS and EKS."],
    ["AWS", "hard", "How would you implement disaster recovery in AWS?"],
    [
      "AWS",
      "hard",
      "Explain the role of CloudFront in optimizing global performance.",
    ],
    [
      "AWS",
      "hard",
      "What are AWS Organizations and how can they be used to manage multiple accounts?",
    ],
    [
      "AWS",
      "hard",
      "Describe how you would design a serverless REST API using AWS services.",
    ],
    ["AWS", "hard", "Explain the lifecycle of a Lambda function."],
    [
      "AWS",
      "hard",
      "What is a VPC peering connection and when would you use one?",
    ],
    [
      "AWS",
      "hard",
      "How would you secure an application deployed across multiple AWS accounts?",
    ],
    ["AWS", "hard", "Explain how to reduce costs using AWS Trusted Advisor."],
    [
      "AWS",
      "hard",
      "Describe how to use AWS Step Functions for orchestration.",
    ],
    [
      "AWS",
      "hard",
      "What are AWS Availability Zones and how do they support redundancy?",
    ],
    [
      "AWS",
      "hard",
      "Explain the CAP theorem in the context of AWS database services.",
    ],
    ["AWS", "hard", "How does AWS ensure data durability for S3 objects?"],

    ["Node.js", "easy", "What is Node.js used for?"],
    ["Node.js", "easy", "What language is Node.js built on?"],
    ["Node.js", "easy", "What is npm and what does it do?"],
    ["Node.js", "easy", "What does the package.json file store?"],
    ["Node.js", "easy", "Explain what a module is in Node.js."],
    ["Node.js", "easy", "How do you import a module in Node.js?"],
    ["Node.js", "easy", "What does console.log do in Node.js?"],
    [
      "Node.js",
      "easy",
      "What is the difference between synchronous and asynchronous code?",
    ],
    ["Node.js", "easy", "How do you start a basic Node.js server?"],
    ["Node.js", "easy", "What is the purpose of the require function?"],
    ["Node.js", "easy", "What is the event loop in Node.js?"],
    ["Node.js", "easy", "What is Express used for?"],
    ["Node.js", "easy", "How do you install dependencies using npm?"],
    ["Node.js", "easy", "What is a callback function?"],
    ["Node.js", "easy", "Explain how Node.js handles concurrent requests."],
    ["Node.js", "medium", "Explain how middleware works in Express."],
    [
      "Node.js",
      "medium",
      "What is the difference between res.send and res.json?",
    ],
    [
      "Node.js",
      "medium",
      "How do you handle environment variables in Node.js?",
    ],
    ["Node.js", "medium", "What is the difference between require and import?"],
    ["Node.js", "medium", "Explain how to use async/await with Node.js."],
    ["Node.js", "medium", "What is an event emitter and how is it used?"],
    ["Node.js", "medium", "Describe how routing works in Express."],
    [
      "Node.js",
      "medium",
      "How would you handle errors in Node.js applications?",
    ],
    ["Node.js", "medium", "What are streams in Node.js and how do they work?"],
    ["Node.js", "medium", "What is CORS and how do you enable it in Node.js?"],
    ["Node.js", "medium", "Explain the concept of non-blocking I/O."],
    ["Node.js", "medium", "How can you connect Node.js to a MySQL database?"],
    ["Node.js", "medium", "What are global objects in Node.js?"],
    ["Node.js", "medium", "Explain how to use JSON data in Node.js."],
    ["Node.js", "medium", "What is clustering and why might you use it?"],
    [
      "Node.js",
      "hard",
      "Explain how Node.js manages the call stack and callback queue.",
    ],
    [
      "Node.js",
      "hard",
      "What are worker threads and when should they be used?",
    ],
    ["Node.js", "hard", "How does Node.js handle file streaming efficiently?"],
    [
      "Node.js",
      "hard",
      "Explain how you would implement load balancing for a Node.js server.",
    ],
    [
      "Node.js",
      "hard",
      "Describe how to use process.nextTick and how it differs from setImmediate.",
    ],
    ["Node.js", "hard", "What is the role of the libuv library in Node.js?"],
    ["Node.js", "hard", "How would you prevent memory leaks in a Node.js app?"],
    [
      "Node.js",
      "hard",
      "Explain how to optimize performance for a high-traffic Node.js API.",
    ],
    [
      "Node.js",
      "hard",
      "What are the security risks of using eval in Node.js?",
    ],
    ["Node.js", "hard", "How does Node.js handle asynchronous exceptions?"],
    [
      "Node.js",
      "hard",
      "Describe how to build a REST API with Express and middleware.",
    ],
    ["Node.js", "hard", "How does Node.js handle concurrent file operations?"],
    [
      "Node.js",
      "hard",
      "What are native addons in Node.js and how do you create one?",
    ],
    ["Node.js", "hard", "Explain the internal architecture of the V8 engine."],
    ["Node.js", "hard", "How would you implement custom streams in Node.js?"],
    ["HTML", "easy", "What does HTML stand for?"],
    ["HTML", "easy", "What is the purpose of the <head> tag?"],
    ["HTML", "easy", "What does the <title> tag do?"],
    ["HTML", "easy", "Explain the difference between <div> and <span>."],
    ["HTML", "easy", "What does the <a> tag do?"],
    ["HTML", "easy", "What is the <img> tag used for?"],
    ["HTML", "easy", "What does the <ul> tag create?"],
    ["HTML", "easy", "What is the purpose of the <p> tag?"],
    ["HTML", "easy", "How do you insert a comment in HTML?"],
    ["HTML", "easy", "What does the alt attribute in the <img> tag do?"],
    ["HTML", "easy", "What is the <form> tag used for?"],
    ["HTML", "easy", "How do you create a hyperlink in HTML?"],
    ["HTML", "easy", "What is the difference between <h1> and <h6> tags?"],
    ["HTML", "easy", "What does the <br> tag do?"],
    ["HTML", "easy", "Explain what semantic HTML means."],
    [
      "HTML",
      "medium",
      "What is the difference between block-level and inline elements?",
    ],
    ["HTML", "medium", "How do you embed a video in HTML?"],
    ["HTML", "medium", "Explain the purpose of the <meta> tag."],
    ["HTML", "medium", "How does the <canvas> element work?"],
    [
      "HTML",
      "medium",
      "What is the difference between <section> and <article>?",
    ],
    [
      "HTML",
      "medium",
      "What is accessibility in HTML and why is it important?",
    ],
    ["HTML", "medium", "How do you create a table in HTML?"],
    ["HTML", "medium", "What are data attributes in HTML used for?"],
    ["HTML", "medium", "How does HTML handle forms and input validation?"],
    ["HTML", "medium", "Explain the purpose of the <iframe> tag."],
    ["HTML", "medium", "What are custom elements in HTML?"],
    ["HTML", "medium", "What are HTML entities and why are they used?"],
    ["HTML", "medium", "How can you use the <details> and <summary> tags?"],
    ["HTML", "medium", "What does the <link> tag do in HTML?"],
    ["HTML", "medium", "What is the difference between <header> and <nav>?"],
    ["HTML", "hard", "Explain how the browser parses and renders HTML."],
    ["HTML", "hard", "What are the advantages of using semantic HTML for SEO?"],
    ["HTML", "hard", "Describe how to create an accessible form in HTML."],
    ["HTML", "hard", "How do you optimize HTML for faster load times?"],
    [
      "HTML",
      "hard",
      "Explain how to use microdata and structured data in HTML.",
    ],
    ["HTML", "hard", "What is the purpose of ARIA attributes in HTML?"],
    ["HTML", "hard", "Describe how HTML interacts with the DOM."],
    ["HTML", "hard", "What are web components and how do they relate to HTML?"],
    ["HTML", "hard", "How do you handle fallback content in HTML5?"],
    ["HTML", "hard", "Explain how the shadow DOM works."],
    [
      "HTML",
      "hard",
      "How can HTML5 APIs (like geolocation or storage) be used in apps?",
    ],
    [
      "HTML",
      "hard",
      "What’s the difference between progressive enhancement and graceful degradation?",
    ],
    ["HTML", "hard", "Describe how HTML contributes to responsive design."],
    ["HTML", "hard", "What are the security implications of using iframes?"],
    ["HTML", "hard", "Explain the role of the <template> element in HTML5."],
  ];

  pool.query("SELECT COUNT(*) AS count FROM questions", (err, results) => {
    if (err) return console.error(err);
    if (results[0].count === 0) {
      const insertQuery =
        "INSERT INTO questions (topic,  difficulty, question_text) VALUES ?";
      pool.query(insertQuery, [seedQuestions], (err) => {
        if (err) console.error("Error seeding questions:", err);
        else console.log("Questions inserted");
      });
    }
  });
};
