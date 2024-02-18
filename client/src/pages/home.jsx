import "../css/home.css";

//images
import profileImg from "../images/NWD_Logo.png";

const home = () => {
  return (
    <div>
      <nav>
        <button className="logo">DevMedia</button>

        <button className="profileButton">
          <img className="profileImg" src={profileImg} alt="profileImg" />
        </button>
      </nav>

      <main className="content">
        <div className="videoContainer">
          <div className="videos">
            {" "}
            <img src={profileImg} alt="profileImg" />
            <p></p>
          </div>
          <div className="videos">
            {" "}
            <img src={profileImg} alt="profileImg" />
          </div>
          <div className="videos">
            {" "}
            <img src={profileImg} alt="profileImg" />
          </div>
          <div className="videos">
            {" "}
            <img src={profileImg} alt="profileImg" />
          </div>
          <div className="videos">
            {" "}
            <img src={profileImg} alt="profileImg" />
          </div>
          <div className="videos">
            {" "}
            <img src={profileImg} alt="profileImg" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default home;
