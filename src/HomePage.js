import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function HomePage() {
    return (
        <div className="App">
            {/* 1차 프로젝트 */}
            <div className="port-container">
                <h1>1차 프로젝트</h1>
                <h2>식단/운동/컨디션 기록 등을 제공하는 사용자 건강 관리 서비스 시스템</h2>
                <br></br>
                <div className="content-wrapper">
                    <Link to="/project1-details">
                        <div className="port-video">
                            <video className="video" src={process.env.PUBLIC_URL + "/videos/1st-Project.mp4"} autoPlay muted loop></video>
                        </div>
                    </Link>
                    <div className="port-info">
                    </div>
                </div>
            </div>
            <p style={{ margin: "10px 0 30px 0", color: "#666666" }}></p>
            {/* 2차 프로젝트 */}
            <div className="port-container">
                <h1>2차 프로젝트</h1>
                <h2>공공데이터를 활용한 여행지 추천 및 여행 기록 공유 커뮤니티 서비스</h2>
                <br></br>
                <div className="content-wrapper">
                    <Link to="/project2-details">
                        <div className="port-video">
                            <video className="video" src={process.env.PUBLIC_URL + "/videos/2nd_Project.mp4"} autoPlay muted loop></video>
                        </div>
                    </Link>
                    <div className="port-info">
                    </div>
                </div>
            </div>

            {/* 3차 프로젝트 */}
            <div className="port-container">
                <h1>3차 프로젝트</h1>
                <h2>주유소/전기차 충전소 정보 제공 및 현재위치 기준 목적지 추천 시스템</h2>
                <br></br>
                <div className="content-wrapper">
                    <Link to="/project3-details">
                        <div className="port-video">
                            <video className="video" src={process.env.PUBLIC_URL + "/videos/3rd_Project.mkv"} autoPlay muted loop></video>
                        </div>
                    </Link>
                    <div className="port-info">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;