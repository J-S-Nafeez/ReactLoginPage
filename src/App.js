// import React from "react";
// import './App.css'
// const Navbar = () => {
//   return (
//     <nav>
//     <header>
//       <nav className="navbar">
//         <div className="logo">
//           <h1>PRAROX</h1>
//         </div>
//         <ul className="nav-links">
//           <li><a href="#home">Home</a></li>
//           <li><a href="#about">About</a></li>
//           <li><a href="#services">Service</a></li>
//           <li><a href="#design">Design</a></li>
//           <li><a href="#contact">Contact</a></li>
//         </ul>
//         <div className="search-container">
//           <input type="text" placeholder="Search..." />
//           <button className="search-btn">Search</button>
//         </div>
//       </nav>
//     </header>
//     <img src='https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630' alt='error'></img>


//     <nav className="MainContent"> 
//       <h1>Web Design & </h1>
//       <h1>Development</h1>
//       <h4>Course</h4>
//       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, pariatur. Veritatis suscipit unde consequuntur in molestias animi accusantium, quod ad corporis deleniti earum dolores aut perspiciatis aliquid, autem iusto quam facere. Perferendis maxime dignissimos iure deserunt mollitia voluptas impedit expedita, veniam veritatis quae reiciendis quo necessitatibus, eos, itaque illum voluptates.</p>
//       <button className="Main-Button">JOIN US</button>
//     </nav>
//     <form className="form1">
//       <h1>Login Here</h1>
//       <input type="text" placeholder="Enter Your Email"></input>
//       <input type ="password" placeholder="Enter your password"></input>
//       <button>Login</button>
//       <h3>Don't have an account? </h3>
//       <h4>Log in with</h4>
      
//       <div>
//       <a href="#">Google</a>
//       <a href="#">Twitter</a>
//       <a href="#">Instagram</a>
//       </div>
//     </form>
//     </nav>
//   );
// };

// export default Navbar;







import React from "react";
import './App.css';

const Navbar = () => {
  return (
    <div className="container">
      <header>
        <nav className="navbar">
          <div className="logo">
            <h1>PRAROX</h1>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Service</a></li>
            <li><a href="#design">Design</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="search-container">
            <input type="text" placeholder="Search..." />
            <button className="search-btn">Search</button>
          </div>
        </nav>
      </header>
      <div className="hero-section">
        {/* <img
          src=''
          alt='background'
          className="hero-image"
        /> */}
        <div className="hero-content">
          <div className="main-content" style={{marginTop:"100px"}}>
            <h1 style={{color:"red"}}>Web Design &</h1>
            <h1 style={{color:"red"}}>Development</h1>
            <h1 style={{color:"red"}}>Course</h1>
            <p>This course covers the essentials of web design and development, focusing on creating responsive and visually appealing websites. Students will learn HTML, CSS, JavaScript, and modern frameworks like React and Angular. The course also explores web accessibility, UX/UI design, and backend integration with databases. By the end, learners will be able to build fully functional websites and web applications.</p>
            <button className="Main-Button">JOIN US</button>
          </div>
          <form className="form1">
            <h1>Login Here</h1>
            <input type="text" placeholder="Enter Your Email" />
            <input type="password" placeholder="Enter your password" />
            <button>Login</button>
            <h3>Don't have an account?</h3>
            <h4>Log in with</h4>
            <div>
              <a href="#">Google</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

