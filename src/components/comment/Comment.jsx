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

function timeForToday(createdAt) {
  const today = new Date();
  const currentTime = new Date(createdAt);

  const getElapsedMin = Math.floor((today.getTime() - currentTime.getTime()) / 1000 / 60);
  if (getElapsedMin < 1) return '방금 전';
  if (getElapsedMin < 60) {
    return `${getElapsedMin}분 전`;
  }

  const getElapsedHour = Math.floor(getElapsedMin / 60);
  if (getElapsedHour < 24) {
    return `${getElapsedHour}시간 전`;
  }

  const getElapsedHourDay = Math.floor(getElapsedMin / 60 / 24);
  if (getElapsedHourDay < 30) {
    return `${getElapsedHourDay}일 전`;
  }

  const getElapsedHourMonth = Math.floor(getElapsedMin / 60 / 24 / 30);
  if (getElapsedHourMonth < 12) {
    return `${getElapsedHourMonth}달 전`;
  }
  if (Math.floor(getElapsedHourDay / 365) === 0) {
    return '12달전';
  } else {
    return `${Math.floor(getElapsedHourDay / 365)}년 전`;
  }
}

function Comment({
  commentContainerClassName,

  profileImg,
  profileClassName,

  commentContentsClassName,
  commentContentsTitle,

  createdAt,
  contentsMainClassName,
  children,
}) {
  return (
    <CommentContainer className={`flex p-5 ${commentContainerClassName}`}>
      <ProfileImageBox profileImg={profileImg} className={`${profileClassName}`}></ProfileImageBox>

      <CommentContents className={`flex flex-col p-2 ${commentContentsClassName}`}>
        <ContentsHeaderContainer className={`flex flex-start`}>
          <ContentsTitle className={commentContentsTitle ? 'mr-3' : ''}>
            {commentContentsTitle}
          </ContentsTitle>
          <TimeStamp>{timeForToday(createdAt)}</TimeStamp>
        </ContentsHeaderContainer>

        <ContentsMainBox className={`${contentsMainClassName}`}>{children}</ContentsMainBox>
      </CommentContents>
    </CommentContainer>
  );
}

export default Comment;
