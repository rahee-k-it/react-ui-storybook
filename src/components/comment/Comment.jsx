import styled from 'styled-components';

const ProfileImageBox = styled.img`
  background-image: url(${(props) => props.profileImg ?? './images/basicCharacter.png'});
  background-position: center;
  background-size: cover;
`;
const TimeStamp = styled.div`
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
`;

function getElapsedTimeFromCommentCreated(createdAt) {
  const elapsedTimeInSecond = (new Date().getTime() - new Date(createdAt).getTime()) / 1000;
  const elapsedTimeInMinute = Math.floor(elapsedTimeInSecond / 60);
  if (elapsedTimeInMinute < 1) return '방금 전';
  if (elapsedTimeInMinute < 60) return `${elapsedTimeInMinute}분 전`;
  const elapsedTimeInHour = Math.floor(elapsedTimeInSecond / (60 * 60));
  if (elapsedTimeInHour < 24) return `${elapsedTimeInHour}시간 전`;
  const elapsedTimeInDay = Math.floor(elapsedTimeInSecond / (60 * 60 * 24));
  if (elapsedTimeInDay < 30) return `${elapsedTimeInDay}일 전`;
  const elapsedTimeInInMonth = Math.floor(elapsedTimeInSecond / (60 * 60 * 24 * 30));
  if (elapsedTimeInInMonth < 12) return `${elapsedTimeInInMonth}달 전`;
  return `${Math.floor(elapsedTimeInDay / 365)}년 전`;
}

function Comment({
  children,
  createdAt,
  profileImg,
  title,
  containerClassName = '',
  profileClassName = '',
  contentsClassName = '',
}) {
  return (
    <div className={`flex p-5 ${containerClassName}`}>
      <ProfileImageBox profileImg={profileImg} className={profileClassName} />
      <div className={`flex flex-col p-1`}>
        <div className={`flex flex-start`}>
          <p className={`font-bold ${title ? 'mr-3' : ''}`}>{title}</p>
          {createdAt ? <TimeStamp>{getElapsedTimeFromCommentCreated(createdAt)}</TimeStamp> : null}
        </div>
        <div className={contentsClassName}>{children}</div>
      </div>
    </div>
  );
}

export default Comment;
