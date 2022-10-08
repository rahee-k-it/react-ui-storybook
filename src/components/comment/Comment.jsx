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
  const getElapsedTimeFromCommentCreated = new Date(createdAt);

  const ElapsedMin = Math.floor(
    (today.getTime() - getElapsedTimeFromCommentCreated.getTime()) / 1000 / 60,
  );
  if (ElapsedMin < 1) return '방금 전';
  if (ElapsedMin < 60) {
    return `${ElapsedMin}분 전`;
  }

  const ElapsedHour = Math.floor(ElapsedMin / 60);
  if (ElapsedHour < 24) {
    return `${ElapsedHour}시간 전`;
  }

  const ElapsedHourDay = Math.floor(ElapsedMin / 60 / 24);
  if (ElapsedHourDay < 30) {
    return `${ElapsedHourDay}일 전`;
  }

  const ElapsedHourMonth = Math.floor(ElapsedMin / 60 / 24 / 30);
  if (ElapsedHourMonth < 12) {
    return `${ElapsedHourMonth}달 전`;
  }
  if (Math.floor(ElapsedHourDay / 365) === 0) {
    return '12달전';
  } else {
    return `${Math.floor(ElapsedHourDay / 365)}년 전`;
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
      <ProfileImageBox
        profileImg={profileImg}
        className={`${profileClassName ?? ''}`}
      ></ProfileImageBox>

      <CommentContents className={`flex flex-col p-1 ${commentContentsClassName ?? ''}`}>
        <ContentsHeaderContainer className={`flex flex-start`}>
          <ContentsTitle className={commentContentsTitle ? 'mr-3' : ''}>
            {commentContentsTitle}
          </ContentsTitle>

          {createdAt ? <TimeStamp>{timeForToday(createdAt)}</TimeStamp> : null}
        </ContentsHeaderContainer>

        <ContentsMainBox className={`${contentsMainClassName ?? ''}`}>{children}</ContentsMainBox>
      </CommentContents>
    </CommentContainer>
  );
}

export default Comment;
