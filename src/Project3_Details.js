import React, { useState } from 'react';
import './Project2_Details.css'; // 여기에 CSS 코드를 작성할 겁니다.

function Project2Details() {

    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (src) => {
        setSelectedImage(src);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="details-container">
            <h1>주유소와 충전소 편의시설</h1>

            <div className="video-container">
                <video controls className="video-player" src="/videos/3rd_Project.mkv" autoPlay muted loop></video>
            </div>
            <h2>시연 영상</h2>
            <br />

            <div className="image-container">
                <p />
                <img src="/images/3rd/3차 툴.png"
                    onClick={() => openModal("/images/3rd/3차 툴.png")}
                    className="clickable-image" />
                <h2>사용한 툴</h2>
                <p />
                <img src="/images/3rd/오일머니 ERD.png"
                    onClick={() => openModal("/images/3rd/오일머니 ERD.png")}
                    className="clickable-image" />
                <h2>ERD</h2>
                <p />
                <img src="/images/3rd/메뉴트리.png"
                    onClick={() => openModal("/images/3rd/메뉴트리.png")}
                    className="clickable-image" />
                <h2>메뉴 트리</h2>
                <p />
                <img src="/images/3rd/사용자 유스케이스.png"
                    onClick={() => openModal("/images/3rd/사용자 유스케이스.png")}
                    className="clickable-image" />
                <h2>유스케이스</h2>
                <p />
                <img src="/images/3rd/3차 WBS.png"
                    onClick={() => openModal("/images/3rd/3차 WBS.png")}
                    className="clickable-image" />
                <h2>WBS</h2>
                <p />
                <img src="/images/3rd/3차 요구사항 명세서.png"
                    onClick={() => openModal("/images/3rd/3차 요구사항 명세서.png")}
                    className="clickable-image" />
                <p />
                <img src="/images/3rd/테스트시나리오.png"
                    onClick={() => openModal("/images/3rd/테스트시나리오.png")}
                    className="clickable-image" />
                <h2>테스트 시나리오</h2>
                <p />
                <h2>경험한 문제와 해결방안</h2>
                <h3>서비스 파일마다 API키를 직접 하드코딩하여 키 변경 시 모든 파일을 수정해야 했지만 Property어노테이션으로 나뉘어있던 API키를 하나로 묶어 리팩토링 하였습니다.</h3>
                <p />
                <h2>추후 개선 및 보완사항</h2>
                <h3>실시간 API를 계속 호출하여 호출횟수와 재렌더링으로 트래픽 과다 발생했던 부분을 DB저장 후 스케줄러를 사용해 주기적으로 갱신하여 호출 횟수 및 트래픽을 절감할 것입니다.</h3>
                <p />
                <h2>후기</h2>
                <h3>API를 활용한다는것이 매우 중요하다는 것을 깨달았고 API를 활용함에 있어서 더욱 많은 공부가 필요하다는 것을 느꼈습니다.</h3>
            </div>

            {/* 모달 영역 */}
            {selectedImage && (
                <div className="modal" onClick={closeModal}>
                    <span className="close">&times;</span>
                    <img className="modal-content" src={selectedImage} />
                </div>
            )}
        </div>
    );
}

export default Project2Details;