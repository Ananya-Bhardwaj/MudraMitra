import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="heading">
          <h1 className="header-title">
            <span className="header-title-span">Money Magic Hub</span> : Your
            Financial Adventure Awaits!
          </h1>
          <p>
            Unlocking Financial Literacy. Dive into bite-sized modules for
            essential financial knowledge, utilize our investment calculator for
            informed decisions, and access mentors for personalized startup
            guidance. Start your journey towards financial empowerment today.
          </p>
          <button className="get-started">Get Started</button>
        </div>
        <div className="header-img">
          <img
            src="https://res.cloudinary.com/dm2nipspt/image/upload/v1707478897/header-img-removebg-preview_dv5nqz.png"
            alt="Financial Literacy"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
