// src/components/TagComponent.js
import React, { useState } from 'react';
import OvalButton from './Button/OvalButton';
import ArrowButton from './Button/ArrowButton';
import './TagComponent.css';

const tags = [
    "이게 전부 9,900원",
    "최신 트렌드",
    "이 모든 게 단 3일 동안",
    "신규 등록 강의",
    "자바스크립트 일타강사 강의 모음",
    "요즘 뜨는 강사",
    "가장 많은 선택을 받은 강의는?",
    "주니어 강좌_어린이를 위한 코딩 수업",
    "시니어 강좌_도전! 스마트폰 마스터하기",
    "엄마표 코딩 수업 노하우",
];

const TagComponent = () => {
    const [activeTags, setActiveTags] = useState([false, false, false, false, false, false, false, false, false, false]);
    const [showAllTags, setShowAllTags] = useState(false);

    const toggleShowAllTags = () => {
        setShowAllTags((prev) => !prev);
    };

    const handleTagClick = (index) => {
        const newActiveTags = [...activeTags];
        newActiveTags[index] = !newActiveTags[index];
        setActiveTags(newActiveTags);
    };

    return (
        <div>
            <div className="tag-container">
                {tags.slice(0, 4).map((tag, index) => (
                    <OvalButton
                        key={index}
                        isActive={activeTags[index]}
                        onClick={() => handleTagClick(index)}
                        label={tag}
                    />
                ))}
                <ArrowButton onClick={toggleShowAllTags} />
            </div>
            {showAllTags && (
                <div className="tag-dropdown">
                    <div className="tag-box">
                        {tags.slice(4).map((tag, index) => (
                            <OvalButton
                                key={index + 4}
                                isActive={activeTags[index + 4]}
                                onClick={() => handleTagClick(index + 4)}
                                label={tag}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TagComponent;
