let submitBtnEl = document.getElementById("submitBtn")
let resetBtnEl = document.getElementById("resetBtn")
let answerEl = document.getElementById("answer")
let hintEl = document.getElementById("hint")
let timerEl = document.getElementById("timer")
let resultEl = document.getElementById("result")



let wordList = [{
        word: "Algorithm",
        hint: "I am a step-by-step procedure for solving a problem. Who am I?"
    },
    {
        word: "API",
        hint: "I am a set of functions and protocols for building and integrating software applications. Who am I?"
    },
    {
        word: "Array",
        hint: "I am a data structure that stores a collection of elements, typically of the same type. Who am I?"
    },
    {
        word: "Backend",
        hint: "I am the server-side part of a web application, handling logic, database interactions, and more. Who am I?"
    },
    {
        word: "Boolean",
        hint: "I am a data type with two possible values: true or false. Who am I?"
    },
    {
        word: "Bootstrap",
        hint: "I am a framework for building responsive, mobile-first websites. Who am I?"
    },
    {
        word: "Bug",
        hint: "I am an error or flaw in software that causes it to produce incorrect or unexpected results. Who am I?"
    },
    {
        word: "Byte",
        hint: "I am a unit of data typically consisting of 8 bits. Who am I?"
    },
    {
        word: "Cache",
        hint: "I am a hardware or software component that stores data so future requests can be served faster. Who am I?"
    },
    {
        word: "Cloud Computing",
        hint: "I am the delivery of computing services over the internet, including storage and processing power. Who am I?"
    },
    {
        word: "Compiler",
        hint: "I am a program that translates code from a high-level programming language to machine code. Who am I?"
    },
    {
        word: "CSS",
        hint: "I am a style sheet language used for describing the look and formatting of a document written in HTML. Who am I?"
    },
    {
        word: "Database",
        hint: "I am an organized collection of data, typically stored and accessed electronically. Who am I?"
    },
    {
        word: "Debugging",
        hint: "I am the process of identifying and removing errors from computer hardware or software. Who am I?"
    },
    {
        word: "DNS",
        hint: "I am a system that translates domain names into IP addresses. Who am I?"
    },
    {
        word: "Encryption",
        hint: "I am the process of converting information into a secure format to prevent unauthorized access. Who am I?"
    },
    {
        word: "Framework",
        hint: "I am a platform for developing software applications. Who am I?"
    },
    {
        word: "Frontend",
        hint: "I am the client-side part of a web application, dealing with the user interface and user experience. Who am I?"
    },
    {
        word: "Function",
        hint: "I am a block of organized, reusable code that performs a single action. Who am I?"
    },
    {
        word: "Git",
        hint: "I am a distributed version control system for tracking changes in source code. Who am I?"
    },
    {
        word: "GitHub",
        hint: "I am a web-based platform for version control and collaborative software development. Who am I?"
    },
    {
        word: "HTML",
        hint: "I am the standard markup language for creating web pages. Who am I?"
    },
    {
        word: "HTTP",
        hint: "I am the protocol used for transmitting web pages over the internet. Who am I?"
    },
    {
        word: "IDE",
        hint: "I am a software application providing comprehensive facilities to computer programmers for software development. Who am I?"
    },
    {
        word: "IP Address",
        hint: "I am a unique string of numbers separated by periods that identifies each computer using the Internet Protocol to communicate over a network. Who am I?"
    },
    {
        word: "JavaScript",
        hint: "I am a programming language commonly used to create interactive effects within web browsers. Who am I?"
    },
    {
        word: "JSON",
        hint: "I am a lightweight data-interchange format that's easy for humans to read and write, and easy for machines to parse and generate. Who am I?"
    },
    {
        word: "Kernel",
        hint: "I am the core part of an operating system, managing system resources and communication between hardware and software. Who am I?"
    },
    {
        word: "Linux",
        hint: "I am an open-source operating system modeled on UNIX. Who am I?"
    },
    {
        word: "Linux",
        hint: "I am a field of AI that uses statistical techniques to give computer systems the ability to learn from data. Who am I?"
    },
    {
        word: "Metadata",
        hint: "I am data that provides information about other data. Who am I?"
    },
    {
        word: "Module",
        hint: "I am a self-contained unit of code that can be reused across programs. Who am I?"
    },
    {
        word: "MySQL",
        hint: "I am an open-source relational database management system. Who am I?"
    },
    {
        word: "Node.js",
        hint: "I am a JavaScript runtime built on Chrome's V8 engine for building server-side applications. Who am I?"
    },
    {
        word: "Object-Oriented",
        hint: "I am a programming paradigm based on the concept of 'objects' which contain data and code to manipulate the data. Who am I?"
    },
    {
        word: "Open Source",
        hint: "I am software for which the original source code is made freely available and may be redistributed and modified. Who am I?"
    },
    {
        word: "PHP",
        hint: "I am a server-side scripting language designed for web development. Who am I?"
    },
    {
        word: "Python",
        hint: "I am a high-level programming language known for its readability and versatility. Who am I?"
    },
    {
        word: "Query",
        hint: "I am a request for data or information from a database. Who am I?"
    },
    {
        word: "React",
        hint: "I am a JavaScript library for building user interfaces, maintained by Facebook. Who am I?"
    },
    {
        word: "Repository",
        hint: "I am a central location in which data is stored and managed. Who am I?"
    },
    {
        word: "Responsive Design",
        hint: "I am an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. Who am I?"
    },
    {
        word: "Ruby",
        hint: "I am a dynamic, open-source programming language with a focus on simplicity and productivity. Who am I?"
    },
    {
        word: "Runtime",
        hint: "I am the period during which a computer program is executing. Who am I?"
    },
    {
        word: "SaaS",
        hint: "I am Software as a Service - a software distribution model in which applications are hosted by a service provider and made available to customers over the internet. Who am I?"
    },
    {
        word: "Scrum",
        hint: "I am an agile framework for managing complex projects. Who am I?"
    },
    {
        word: "Server",
        hint: "I am a computer or system that provides resources, data, services, or programs to other computers, known as clients, over a network. Who am I?"
    },
    {
        word: "SQL",
        hint: "I am a standard language for managing and manipulating databases. Who am I?"
    },
    {
        word: "SSH",
        hint: "I am Secure Shell - a protocol for securely accessing a remote computer. Who am I?"
    },
    {
        word: "Stack",
        hint: "I am a collection of technologies used together to build a web or mobile application. Who am I?"
    },
    {
        word: "Swift",
        hint: "I am a programming language developed by Apple for iOS and macOS app development. Who am I?"
    },
    {
        word: "TCP/IP",
        hint: "I am the suite of communication protocols used to connect devices on the internet. Who am I?"
    },
    {
        word: "Template",
        hint: "I am a pre-designed resource that shows the structure for a project, used for designing web pages or documents. Who am I?"
    },
    {
        word: "Token",
        hint: "I am a security mechanism used to authenticate users and grant access to resources. Who am I?"
    },
    {
        word: "UI",
        hint: "I am User Interface - the space where interactions between humans and machines occur. Who am I?"
    },
    {
        word: "UX",
        hint: "I am User Experience - the overall experience of a person using a product, especially in terms of how easy or pleasing it is to use. Who am I?"
    },
    {
        word: "Variable",
        hint: "I am a storage location identified by a memory address and associated with a symbolic name that contains some known or unknown quantity of information. Who am I?"
    },
    {
        word: "Version Control",
        hint: "I am a system that records changes to a file or set of files over time so that specific versions can be recalled later. Who am I?"
    },
    {
        word: "Virtual Machine",
        hint: "I am a software emulation of a physical computer that runs an operating system and applications just like a physical machine. Who am I?"
    },
    {
        word: "Virtualization",
        hint: "I am the creation of a virtual version of something, such as a hardware platform, operating system, storage device, or network resource. Who am I?"
    },
    {
        word: "WebSocket",
        hint: "I am a protocol providing full-duplex communication channels over a single TCP connection. Who am I?"
    },
    {
        word: "XML",
        hint: "I am a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable. Who am I?"
    },
    {
        word: "YAML",
        hint: "I am a human-readable data serialization standard that can be used in conjunction with all programming languages. Who am I?"
    },
    {
        word: "YAML",
        hint: "I am a human-readable data serialization standard that can be used in conjunction with all programming languages. Who am I?"
    },
    {
        word: "Zero-day",
        hint: "I am a previously unknown vulnerability in software that developers have not yet had time to address and fix. Who am I?"
    },
    {
        word: "Binary",
        hint: "I am a numeric system that only uses two digits: 0 and 1. Who am I?"
    },
    {
        word: "CLI",
        hint: "I am Command Line Interface - a text-based user interface used to interact with software and operating systems. Who am I?"
    },
    {
        word: "CRUD",
        hint: "I am Create, Read, Update, Delete - the four basic operations of persistent storage. Who am I?"
    },
    {
        word: "Daemon",
        hint: "I am a background process that handles requests for services such as print spooling and file transfers. Who am I?"
    },
    {
        word: "Docker",
        hint: "I am a set of platform-as-a-service products that use OS-level virtualization to deliver software in packages called containers. Who am I?"
    },
    {
        word: "E-commerce",
        hint: "I am the buying and selling of goods or services using the internet. Who am I?"
    },
    {
        word: "Golang",
        hint: "I am a statically typed, compiled programming language designed at Google. Who am I?"
    },
    {
        word: "Hash",
        hint: "I am a function that converts an input into a fixed-length string of characters, which is typically a digest that uniquely identifies the data. Who am I?"
    },
    {
        word: "HTTP/2",
        hint: "I am a major revision of the HTTP network protocol, aimed at improving the speed and performance of web communications. Who am I?"
    },
    {
        word: "Load Balancer",
        hint: "I am a device that distributes network or application traffic across a number of servers to improve reliability and performance. Who am I?"
    },
    {
        word: "MVC",
        hint: "I am Model-View-Controller - a software design pattern for developing web applications. Who am I?"
    },
    {
        word: "Nginx",
        hint: "I am a web server that can also be used as a reverse proxy, load balancer, and HTTP cache. Who am I?"
    },
    {
        word: "OAuth",
        hint: "I am an open standard for access delegation commonly used as a way to grant websites or applications limited access to user information without exposing passwords. Who am I?"
    },
    {
        word: "ORM",
        hint: "I am Object-Relational Mapping - a programming technique for converting data between incompatible systems using object-oriented programming languages. Who am I?"
    },
    {
        word: "REST",
        hint: "I am Representational State Transfer - an architectural style for designing networked applications, relying on a stateless, client-server, cacheable communications protocol — typically HTTP. Who am I?"
    },
    {
        word: "Ruby on Rails",
        hint: "I am a server-side web application framework written in Ruby under the MIT License. Who am I?"
    },
    {
        word: "Scalability",
        hint: "I am the capability of a system, network, or process to handle a growing amount of work, or its potential to accommodate growth. Who am I?"
    },
    {
        word: "Scrapy",
        hint: "I am an open-source and collaborative web crawling framework for Python. Who am I?"
    },
    {
        word: "Selenium",
        hint: "I am a portable framework for testing web applications. Who am I?"
    },
    {
        word: "Singleton",
        hint: "I am a design pattern that restricts the instantiation of a class to one single instance. Who am I?"
    },
    {
        word: "Sprint",
        hint: "In agile methodology, I am a set period during which specific work has to be completed and made ready for review. Who am I?"
    },
    {
        word: "SSL/TLS",
        hint: "I am Secure Sockets Layer / Transport Layer Security - cryptographic protocols designed to provide communications security over a computer network. Who am I?"
    },
    {
        word: "TypeScript",
        hint: "I am an open-source language which builds on JavaScript by adding static type definitions. Who am I?"
    },
    {
        word: "UML",
        hint: "I am Unified Modeling Language - a standardized modeling language consisting of an integrated set of diagrams used to specify, visualize, construct, and document the artifacts of a software system. Who am I?"
    },
    {
        word: "Vagrant",
        hint: "I am an open-source software product for building and maintaining portable virtual software development environments. Who am I?"
    },
    {
        word: "Vim",
        hint: "I am a highly configurable text editor built to enable efficient text editing. Who am I?"
    },
    {
        word: "Vue.js",
        hint: "I am an open-source model–view–viewmodel front-end JavaScript framework for building user interfaces and single-page applications. Who am I?"
    },
    {
        word: "WebAssembly",
        hint: "I am a binary instruction format for a stack-based virtual machine, designed to be executed at near-native speed by modern web browsers. Who am  I?"
    },
    {
        word: "WebRTC",
        hint: "I am a free, open-source project providing web browsers and mobile applications with real-time communication via simple application programming interfaces. Who am I?"
    },
    {
        word: "Webpack",
        hint: "I am an open-source JavaScript module bundler. Who am I?"
    },
    {
        word: "WYSIWYG",
        hint: "I am What You See Is What You Get - a system in which content displayed during editing appears very similar to the final output. Who am I?"
    },
    {
        word: "jQuery",
        hint: "I am a fast, small, and feature-rich JavaScript library designed to simplify the client-side scripting of HTML. Who am I?"
    },
    {
        word: "DevOps",
        hint: "I am a set of practices that combines software development (Dev) and IT operations (Ops) aimed at shortening the development lifecycle. Who am I?"
    },
]

function generateAndUpdateHint() {
    let randomIndex = Math.ceil(Math.random() * wordList.length - 1)
    let word = wordList[randomIndex]
    hintEl.textContent = word.hint
    return word
}

let word = generateAndUpdateHint()
console.log(word)

submitBtnEl.addEventListener("click", function() {
    if (answerEl.value.toLowerCase() === word.word.toLowerCase()) {
        resultEl.classList.add("correct")
        resultEl.textContent = "Congratulations! You got it right."
    } 
    else if(answerEl.value===""){
        resultEl.classList.add("wrong")
        resultEl.textContent = "Please enter your answer!"        
    }
    else {
        resultEl.classList.add("wrong")
        resultEl.textContent = "Wrong answer!"
    }
})

resetBtnEl.addEventListener("click", function() {
    answerEl.value = ""
    resultEl.textContent = ""
    generateAndUpdateHint()
})