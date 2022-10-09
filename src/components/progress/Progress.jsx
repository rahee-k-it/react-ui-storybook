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

const ProgressLabel = styled.div`
  margin-bottom: 0.2em;
  font-size: 1.1em;
  font-weight: 700;
`;

function Progress(props) {
  const {
    borderRadius = 'rounded-2xl',
    size = 'text-base',
    bgColor = 'blue',
    value = 50,
    id,
    isValue,
    isLabel,
    label,
    ...rest
  } = props;

  const bgColorMap = {
    gray: 'bg-gray-600',
    blue: 'bg-blue-600',
    red: 'bg-red-600',
    green: 'bg-green-600',
    yellow: 'bg-yellow-400',
    indigo: 'bg-indigo-600',
    purple: 'bg-purple-600',
  };

  const textColorMap = {
    gray: 'text-gray-700',
    blue: 'text-blue-700',
    red: 'text-red-700',
    green: 'text-green-700',
    yellow: 'text-yellow-500',
    indigo: 'text-indigo-700',
    purple: 'text-purple-700',
  };

  return (
    <>
      {isLabel ? <ProgressLabel className={`${textColorMap[bgColor]}`}>{label}</ProgressLabel> : ''}
      <ProgressWrapper id={`progress-${id}`} className={` ${size} ${borderRadius}`} {...rest}>
        <div style={{ width: `${value}%` }} className={`${bgColorMap[bgColor]} ${borderRadius}`}>
          {isValue && value >= 5 && value <= 100 ? `${value}%` : ''}
        </div>
      </ProgressWrapper>
    </>
  );
}

export default Progress;
