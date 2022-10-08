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

function Comment({
  commentContainerClassName,

  profileImg,
  profileClassName,
}) {
  return (
    <CommentContainer className={`flex p-5 ${commentContainerClassName}`}>
      <ProfileImageBox profileImg={profileImg} className={`${profileClassName}`}></ProfileImageBox>
    </CommentContainer>
  );
}

export default Comment;
