import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>OOO's Portfolio</h1>

      <div className="port-container">
        <div className="port-video">
          <video src={"https://yong-jin.github.io/web-portfolio/videos/pf1.mkv"} autoPlay muted loop></video>
        </div>
        <div className="port-info">
          <h3>주제 : 음식어쩌고</h3>
          <p>일정 : </p>
          <p>사용기술 : </p>
          <p>설명 : </p>
        </div>
      </div>

      <div className="port-container">
        <div className="port-video">
          <video src={"https://yong-jin.github.io/web-portfolio/videos/pf1.mkv"} autoPlay muted loop></video>
        </div>
        <div className="port-info">
          <h3>주제 : 음식어쩌고</h3>
          <p>일정 : </p>
          <p>사용기술 : </p>
          <p>설명 : </p>
          <p>github Link : <a>https://github....</a></p>
        </div>
      </div>

      <div className="port-container">
        <div className="port-video">
          <video src={"https://yong-jin.github.io/web-portfolio/videos/pf1.mkv"} autoPlay muted loop></video>
        </div>
        <div className="port-info">
          <h3>주제 : 음식어쩌고</h3>
          <p>일정 : </p>
          <p>사용기술 : </p>
          <p>설명 : </p>
        </div>
      </div>

    </div>
  );
}

export default App;
