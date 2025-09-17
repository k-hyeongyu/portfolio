import React, { useState } from 'react';
import './Project1_Details.css';

function Project1Details() {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (src) => {
        setSelectedImage(src);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };
    return (
        <div className="details-container">
            <h1>위고비의 국내 출시로 높아진 체중 감량 및 건강관리 관심에 맞춰 과학적이고 효율적인 식단 추천 및 판매 웹 서비스를 제공</h1>
            
            <div className="video-container">
                <video controls className="video-player" src={process.env.PUBLIC_URL + "/videos/1st-Project.mp4"} autoPlay muted loop></video>
            </div>
            <h2>시연 영상</h2>
            <br />
            
            <div className="image-container">
                <p/>
                <img
                    src={process.env.PUBLIC_URL + "/images/1st/1차 기술스택.png"}
                    onClick={() => openModal(process.env.PUBLIC_URL + "/images/1st/1차 기술스택.png")}
                    className="clickable-image"
                />
                <h2>사용한 툴</h2>
                <p/>
                <img src={process.env.PUBLIC_URL + "/images/1st/stack-project MenuTree.png"}
                    onClick={() => openModal(process.env.PUBLIC_URL + "/images/1st/stack-project MenuTree.png")}
                    className="clickable-image" />
                <h2>메뉴 트리</h2>
                <p/>
                <img src={process.env.PUBLIC_URL + "/images/1st/1차 개발일정.png"}
                    onClick={() => openModal(process.env.PUBLIC_URL + "/images/1st/1차 개발일정.png")}
                    className="clickable-image" />
                <h2>개발 일정</h2>
                <p/>
                <img src={process.env.PUBLIC_URL + "/images/1st/1차 요구사항 명세서.png"}
                    onClick={() => openModal(process.env.PUBLIC_URL + "/images/1st/1차 요구사항 명세서.png")}
                    className="clickable-image" />
                <h2>요구사항 명세서</h2>
                <p/>
                <h2>경험한 문제와 해결방안</h2>
                <h3>컴포넌트화 라는 자바의 오브젝트와 비슷한 개념에 대하여 혼란이 있었고 개인학습을 통해 하나의 객체를 만든다는 것을 알게 되었음</h3>
                <p/>
                <h2>추후 개선 및 보완사항</h2>
                <h3>조금 더 코드를 객체화 하여 하드코딩의 경우를 줄일것</h3>
                <h3></h3>
            </div>
            {selectedImage && (
                <div className="modal" onClick={closeModal}>
                    <span className="close">&times;</span>
                    <img className="modal-content" src={selectedImage} alt="모달 이미지" />
                </div>
            )}
        </div>
    );
}

export default Project1Details;