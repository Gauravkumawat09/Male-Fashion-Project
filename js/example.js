// console.log("hello gaurav");
// let a = 5;
// let b = 6;
// let c = a + b;
// console.log(c);

// let name = prompt("hello");
// console.log(name)

// let h2 = document.querySelector("h2");

// console.dir(h2.innerText);

// h2.innerText = h2.innerText + "from gaurav kt";

document.getElementById("red-btn").onclick = function(){
    document.getElementById("bod").style.backgroundColor = "red";
};

document.getElementById("yellow-btn").onclick = function() {
    document.getElementById("bod").style.backgroundColor = "yellow";
}

document.getElementById("green-btn").onclick = function(){
    document.getElementById("bod").style.backgroundColor = "green";
};

document.getElementById("blue-btn").onclick = function(){
    document.getElementById("bod").style.backgroundColor = "blue";
};

document.getElementById("black-btn").onclick = function(){
    document.getElementById("bod").style.backgroundColor = "black";
};

document.getElementById("dropdown").addEventListener("change", function(){
    const selectedValue = this.value;
    const contentParagraph = document.getElementById("para");

    if(selectedValue === "none"){
        contentParagraph.textContent = "";
    }
    else if (selectedValue === "react"){
        contentParagraph.textContent = "React is a popular JavaScript library for building user interfaces, particularly single-page applications. Developed by Facebook, it allows developers to create reusable UI components that efficiently update and render as data changes. React employs a virtual DOM to optimize rendering, ensuring high performance even in complex applications. Its component-based architecture promotes modularity, making code easier to manage and scale. Additionally, React's ecosystem includes tools like React Router for routing and Redux for state management. With a strong community and extensive resources, React is widely adopted for developing dynamic and responsive web applications, enhancing user experiences across platforms.";
    }
    else if (selectedValue === "django"){
        contentParagraph.textContent = "Django is a high-level Python web framework that enables rapid development of secure and maintainable websites. It follows the batteries included philosophy, providing built-in features like an ORM, authentication, and an admin interface. Django's architecture promotes the Model-View-Template (MVT) pattern, separating business logic from presentation. This makes it easy to build complex web applications efficiently. With robust security features, Django helps developers avoid common vulnerabilities like SQL injection and cross-site scripting. Its extensive documentation and active community support facilitate learning and troubleshooting. Ideal for projects of all sizes, Django powers many popular websites and applications across various domains.";
    }
    else if (selectedValue === "angular"){
        contentParagraph.textContent = "Angular is a powerful, open-source web application framework developed by Google, designed for building dynamic and responsive single-page applications (SPAs). It uses TypeScript, a superset of JavaScript, which enhances code quality and maintainability. Angular features a component-based architecture, enabling developers to create reusable UI components that improve development efficiency. With its robust data-binding capabilities, dependency injection, and a rich ecosystem of tools, Angular simplifies complex application development. The framework also includes features like routing, form handling, and state management. Its strong community and comprehensive documentation make Angular a popular choice for enterprise-level applications and large-scale projects.";
    }
    else if (selectedValue === "aws"){
        contentParagraph.textContent = "Amazon Web Services (AWS) is a comprehensive cloud computing platform provided by Amazon, offering a wide range of services including computing power, storage, and databases. It enables businesses to host applications, store data, and leverage advanced technologies such as machine learning and analytics. AWS's pay-as-you-go pricing model allows for cost efficiency and scalability, making it suitable for startups to large enterprises. Key services include Amazon EC2 for scalable computing, Amazon S3 for storage, and Amazon RDS for relational databases. With a global network of data centers, AWS provides high availability and security, helping organizations innovate and grow in the digital landscape.";
    }
})

let counter = 16;

document.getElementById("plus").onclick = function () {
console.log(counter);
document.getElementById("para").style.fontSize = counter + "px";
counter++;
};

document.getElementById("minus").onclick = function () {
console.log(counter);
counter--;
document.getElementById("para").style.fontSize = counter + "px";
};

document.getElementById("uppercase").onclick = function () {
    document.getElementById("para").style.textTransform = "uppercase";
}

document.getElementById("lowercase").onclick = function () {
    document.getElementById("para").style.textTransform = "lowercase";
}

document.getElementById("butttn").onclick = function () {
   let a = document.getElementById("inp1").value;
   let b = document.getElementById("inp2").value;

    let c = a + b;

   console.log(c);
}


document.getElementById("button-10").onclick = function() {


    let a = document.getElementsByClassName("form-2");
    for(let i = 0; i < a.length; i++)
    {
        console.log(a[i].value)
    }
    
}


let gkt = 0;
let i = 0;
setInterval(
()=>{
    if(i === 10 && gkt === 20)
        {
            clearInterval(i,gkt)
        }    
    else{
    i++;
    gkt++;
    gkt++;
    document.write(gkt);
    console.log( `2 * ${i} = `,gkt);
}
    
},500)

setTimeout(
    ()=>{
        console.log("hello")
},500)

