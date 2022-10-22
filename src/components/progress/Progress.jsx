import styled from 'styled-components';

const ProgressWrapper = styled.div`
  width: 40%;
  height: 1.2em;
  background-color: #e5e7eb;
  margin: 0.6em 0;
  div {
    height: 100%;
    font-size: 0.9em;
    color: #f8fafc;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ProgressBar = styled.div``;

const ProgressLabel = styled.div`
  margin-bottom: 0.2em;
  font-size: 1.1em;
  font-weight: 700;
`;

function Progress(props) {
  const {
    borderRadius = 'rounded-2xl',
    size = 'text-base',
    bgColor = 'bg-gray-600',
    textColor,
    value,
    id,
    showPercentage,
    isLabel,
    label,
    ...rest
  } = props;

  return (
    <>
      {isLabel ? <ProgressLabel className={textColor}>{label}</ProgressLabel> : ''}
      <ProgressWrapper className={`${size} ${borderRadius}`} {...rest}>
        <ProgressBar style={{ width: `${value}%` }} className={`${bgColor} ${borderRadius}`}>
          {showPercentage && value >= 5 && value <= 100 ? `${value}%` : ''}
        </ProgressBar>
      </ProgressWrapper>
    </>
  );
}

export default Progress;
