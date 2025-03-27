-- Migration number: 0001 	 2024-12-27T22:04:18.794Z
DROP TABLE IF EXISTS comments;

CREATE TABLE IF NOT EXISTS courses (
    id INTEGER PRIMARY KEY NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    instructor TEXT NOT NULL,
    duration TEXT NOT NULL,
    level TEXT NOT NULL
);

-- Insert some sample data into our courses table.
INSERT INTO courses (title, description, instructor, duration, level)
VALUES
    ('리더십 기초', '효과적인 팀 관리와 의사소통을 위한 리더십 기초 과정입니다.', '김민지', '4주', '초급'),
    ('데이터 분석 마스터', '비즈니스 의사결정을 위한 데이터 분석 기법과 툴 활용법을 배웁니다.', '이준호', '8주', '중급'),
    ('디지털 마케팅 전략', '소셜 미디어와 검색 엔진을 활용한 디지털 마케팅 전략을 학습합니다.', '박소영', '6주', '중급'),
    ('클라우드 컴퓨팅 기초', '클라우드 서비스의 기본 개념과 활용 방법을 배웁니다.', '최재훈', '5주', '초급'),
    ('프로젝트 관리 전문가', 'PMI 기반의 프로젝트 관리 방법론과 실무 적용 사례를 학습합니다.', '정다혜', '10주', '고급')
;
