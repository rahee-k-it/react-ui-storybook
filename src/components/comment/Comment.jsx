import styled from 'styled-components';

const CommentContainer = styled.div`
  &:first-child {
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const ProfileImageBox = styled.img`
  background-image: url(${(props) => props.profileImg ?? './images/basicCharacter.png'});
  background-position: center;
  background-size: cover;
`;

const CommentContents = styled.div``;

const ContentsHeaderContainer = styled.div``;

const ContentsMainBox = styled.div``;

const ContentsTitle = styled.div`
  font-weight: 900;
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

  if (Math.floor(elapsedTimeInDay / 365) === 0) {
    return '12달전';
  }
  return `${Math.floor(elapsedTimeInDay / 365)}년 전`;
}

function Comment({
  commentContainerClassName,

  profileImg,
  profileClassName,

  commentContentsClassName,
  title,

  createdAt,
  contentsMainClassName,
  children,
}) {
  return (
    <CommentContainer className={`flex p-5 ${commentContainerClassName ?? ''}`}>
      <ProfileImageBox
        profileImg={profileImg}
        className={`${profileClassName ?? ''}`}
      ></ProfileImageBox>

      <CommentContents className={`flex flex-col p-1 ${commentContentsClassName ?? ''}`}>
        <ContentsHeaderContainer className={`flex flex-start`}>
          <ContentsTitle className={title ? 'mr-3' : ''}>{title}</ContentsTitle>

          {createdAt ? <TimeStamp>{getElapsedTimeFromCommentCreated(createdAt)}</TimeStamp> : null}
        </ContentsHeaderContainer>

        <ContentsMainBox className={`${contentsMainClassName ?? ''}`}>{children}</ContentsMainBox>
      </CommentContents>
    </CommentContainer>
  );
}

export default Comment;
