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
            <h1>"모두가 누릴수 있는 여행"을 목표로 이동에 불편함이 있는 사람들을 위한 편의시설 중심의 여행지 추천 및 예약 커뮤티니 플랫폼입니다.</h1>
            <div className="image-container">
                <img src="/images/2nd/2nd_ERD.png"
                    onClick={() => openModal("/images/2nd/2nd_ERD.png")}
                    className="clickable-image" />
                <h2>ERD</h2>
                <p />
                <img src="/images/2nd/2nd_MenuTree.png"
                    onClick={() => openModal("images/2nd/2nd_MenuTree.png")}
                    className="clickable-image" />
                <h2>메뉴 트리</h2>
                <p />
                <img src="/images/2nd/2nd_UseCase.png"
                    onClick={() => openModal("/images/2nd/2nd_UseCase.png")}
                    className="clickable-image" />
                <h2>유스케이스</h2>
                <p />
                <img src="/images/2nd/2nd_WBS.png"
                    onClick={() => openModal("/images/2nd/2nd_WBS.png")}
                    className="clickable-image" />
                <h2>WBS</h2>
                <p />
                <img src="/images/2nd/2nd_요구사항분석.png"
                    onClick={() => openModal("/images/2nd/2nd_요구사항분석.png")}
                    className="clickable-image" />
                <h2>요구사항 분석</h2>
                <p />
                <h2>경험한 문제와 해결방안</h2>
                <h3>서버로 전송된 후 DB에서 ORA-00001 무결성 제약조건 위배 오류가 발생했으나 데이터의 무결성을 보장하기 위해 서버 로직과 DB 제약 조건을 일치시켜서 문제를 해결하였습니다.</h3>
                <p />
                <h2>추후 개선 및 보완사항</h2>
                <h3>회원가입과 관련하여 유효성 검증에서 아이디의 중복검사 추가를 할 것입니다.</h3>
                <p />
                <h2>후기</h2>
                <h3>MVC패턴의 구성요소인 Controller, Service, DAO, 구현체, Mapper들의 연결고리를 찾지못해 힘들었지만 프로젝트를 통해 부족한 부분을 보완할 수 있는 계기가 되었습니다.</h3>
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