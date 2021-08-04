# mysql-task

## ✨ 배포링크
http://ec2-54-180-135-200.ap-northeast-2.compute.amazonaws.com

<img width="500" alt="Screen Shot 2021-08-05 at 12 26 24 am" src="https://user-images.githubusercontent.com/64633218/128210576-fc62978b-4a07-48ac-9adc-f13dce7ee905.png">
<img width="500" alt="Screen Shot 2021-08-05 at 12 26 17 am" src="https://user-images.githubusercontent.com/64633218/128210582-769addb3-94ef-46e6-b2e3-c51a46903c27.png">
<img width="500" alt="Screen Shot 2021-08-05 at 12 26 34 am" src="https://user-images.githubusercontent.com/64633218/128210603-539f0fdc-0e3d-4188-84d2-822f152e69be.png">
<img width="500" alt="Screen Shot 2021-08-05 at 12 26 40 am" src="https://user-images.githubusercontent.com/64633218/128210623-09809d56-8994-468d-bd2d-25e04ba3135a.png">



## ✨  Introduction
* 모바일 퍼스트 레이아웃 기준 뮤직 웹 플레이어 서비스입니다.
* 앨범과 트랙을 선택하여 뮤직 플레이어와 함께 음악을 들을 수 있습니다.

## ✨  Features
* 앨범 세부 정보 확인
* 트랙 재생 및 정지

## ✨  Getting started
* 로컬 환경에서 실행하기 위해 다음 작업이 필요합니다.
```bash
// 프로젝트 클론, dependency 설치
git clone https://github.com/hyerichung/mysql-task.git
cd mysql-task

// 프론트엔드
cd client
yarn
yarn start

// 백엔드
cd server
yarn
yarn dev
```

* ### 환경변수
  * <b>프론트엔드</b>
    - 프론트엔드 root 디렉토리에 .env 파일을 생성 후, 아래 형식에 맞게 환경변수 값을 입력해 주세요.
    ```bash
    REACT_APP_SERVER_PORT=<YOUR_SERVER_PORT_ADDRESS>
    // ex) http://localhost:4000
    ```
  * <b>백엔드</b>
    - 백엔드 root 디렉토리에 .env 파일을 생성 후, 아래 형식에 맞게 환경변수 값을 입력해 주세요.
    ```bash
    MYSQL_USERNAME=<YOUR_MYSQL_USERNAME>
    MYSQL_PASSWORD=<YOUR_MYSQL_PASSWORD>
    MYSQL_DATABASE=<YOUR_MYSQL_DATABASE_NAME>
    MYSQL_HOST=<YOUR_MYSQL_HOST>

    PORT=<YOUR_PORT_NUMBER>
    // ex) 4000
    ```

## ✨ 폴더 구조
* Frontend

```bash
.
└─client
   ├─ package.json
   ├─ .eslintrc.json
   └─ src
      ├─ index.js
      ├─ App
      ├─ containers               페이지 로직 컨테이너
      ├─ pages             	  페이지 컴포넌트
      ├─ components
      │  ├─ shared                공통 컴포넌트
      │  ├─ └─ MainHeader.js
      │  ├─ Album.js              개별 컴포넌트
      │  ├─ AlbumBottomDesc.js
      │  ├─ ...
      │  ├─ TrackList.js
      │  └─ TrackPlayButton.js
      ├─ layout             	  레이아웃 관련 theme 관리
      ├─ hooks             	  커스텀 훅
      ├─ api                      api 관리
      ├─ redux             	  리덕스
      │  ├─ slices                슬라이스 관리
      │  └─ store.js              리덕스 스토어
      ├─ utils                    유틸 함수 관리
      └─ constants           	  상수 관리
```
* Backend
```bash
.
└─server
   ├─ app.js
   ├─ .eslintrc.json
   ├─ bin                         서버 엔트리
   │   └─ www
   └─ src
      ├─ index.js
      ├─ config
      │  ├─ albums.json           앨범/트랙 json 데이터
      │  ├─ index.js              노드 기본 포트 설정
      │  └─ mysql.js              mysql 설정
      ├─ controllers
      │  └─ albumsController.js   앨범 컨트롤러
      ├─ loaders
      │  ├─ express.js            express 로더
      │  ├─ mysql.js              mysql 로더
      │  ├─ router.js             라우터 로더
      │  └─ index.js
      ├─ models
      │  ├─ Album.js              Album 모델
      │  ├─ Track.js              Track 모델
      │  └─ index.js              sequelize 설정
      └─ routes
         ├─ api                   api 라우터 관리
         └─ index.js              엔트리 라우터
```

## ✨ Tech Stack
### <b>Frontend</b>
* ES2015+
* React
* React-router-dom
* Redux
* Redux-thunk
* Redux-toolkit
* Styled-components
### <b>Backend</b>
* NodeJS
* Express
* MySQL
* Sequelize

### <b>ETC</b>
* AWS EC2
* AWS RDS
* AWS S3
* pm2
* nginx

## ✨ 구현 과정
* ### 모바일 퍼스트 레이아웃
  - 모바일 뷰를 기준으로 하는 프로젝트였기 때문에 기기별 레이아웃을 고려하기 위해 mediaRules를 생성하였고, GlobalStyles과 함께 Styled-components의 theme처럼 재사용할 수 있어 편리하게 작업할 수 있었습니다.
* ### 뮤직 플레이어 관리
  - 화면의 이동에 상관 없이 음악 재생 관리를 하려면 전역 상태 관리가 필요하다고 생각되었고, 서버에서 데이터를 받아와야 하는 비동기 작업이 포함되므로 상태관리를 위해 redux를 선택하였습니다.
  - 비동기 작업이 현재 모든 앨범 정보를 받아오는 단순한 작업밖에 없기 때문에 saga까지 사용할 필요성을 느끼지 못하여 thunk를 사용해 보았습니다.
  - Ducks 패턴의 편의성을 제공하는 redux-toolkit 또한 보일러플레이트를 줄이기 위해 함께 사용해보았습니다.
* ### 컴포넌트 리렌더링 관리
   - 불필요한 리렌더링을 방지하기 위해 최대한 컴포넌트를 잘게 쪼개어 작업하였으며, useCallback을 이용해 불필요한 함수 재생성을 방지해보았습니다.
   - React.memo까지 함께 사용하려고 했지만 profiler로 확인 시 현재 스케일에서는 유의미한 차이를 주지 못한다고 판단하여서 useCallback만 함수에 적용해 주었습니다.
* ### Safari에서 오디오 재생 관리
  - 크롬 기준으로 작업을 하고 배포 후 Safari에서 확인해보니, 음원 재생이 되지 않는 이슈가 있었습니다.
  - 해당 이슈는 safari에서 audio 재생 시 '미리 로딩 완료 된' 음원만 재생 가능한데, 저의 경우 useEffect에서 필요 상태를 확인하고 audio.current.play()를 호출하고 있기 때문에 문제가 발생하였습니다.
    - useEffect는 화면이 그려지고 난 후 비동기적으로 실행되기 때문에 '미리 로딩 되지 않은' 오디오를 play()하기 때문에 문제가 발생합니다.
    - 따라서 useLayoutEffect를 사용하여 미리 비동기적으로 로직을 진행한 후 화면을 그려주는 방식으로 변경하여 해당 이슈를 해결했습니다.

## ✨ TO-DO
* 현재 MySQL에 데이터를 저장하는 방식은, s3에 수동으로 업로드 한 음원 파일, 앨범 커버 사진의 객체 URL를 이용해 앨범/트랙 목데이터 json을 만들고, MySQL과 노드가 연결될 시 해당 데이터를 함께 업로드 해줍니다(pm2로 서버 관리 중)
  - 해당 방식은 데이터 수가 작았기 가능하였지만, 확장성을 고려하면 서버에서 aws-sdk를 이용해 데이터를 s3로 업로드 해서 객체 URL을 받아 Sequelize로 해당 객체 URL을 가진 모델을 생성해 MySQL에 집어넣어 사용하거나, Sequelize의 seeds, migration 기능을 이용하여 개선하고 싶습니다.
- s3를 cloudfront와 함께 배포
- 배포 자동화 고려
- redux-persist 이용하여 새로고침 시 페이지에서 음악 데이터 유실 방지

## ✨ 마치며
* 이전에 AWS를 많이 다뤄볼 기회가 없었는데, 이번 프로젝트를 진행하면서 전체적인 배포에 대한 그림을 그리는 방법을 배운 것 같고, 처음 접해본 MySQL을 통해 mongoDB와는 다르게 명확한 스키마에 따라서 작업하는 방식을 접해볼 수 있는 좋은 기회였다고 생각합니다.
* 시간이 더 주어진다면, 우선 db와 백엔드 쪽을 확장성을 고려하여 더 보완하고 개선하고 싶습니다.
* 제가 평소 항상 관심있고, 좋아하는 음악 관련 프로젝트를 진행할 수 있어서 너무 재미있게 작업했습니다. 
  실제 서비스를 개발할 수 있다면 너무 재미있을 것 같습니다!
* 개발자로서 피드백을 받으며 계속 성장하고 싶습니다. 시간 내주셔서 감사합니다 🙇‍♀️

