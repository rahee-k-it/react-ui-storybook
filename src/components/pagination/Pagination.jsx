import styled from 'styled-components';

const Item = styled.span`
  min-width: 32px;
`;
const Pagination = ({ count = 10, bgColor = 'bg-slate-300' } = {}) => {
  return (
    <div className="flex gap-2">
      {Array.from({ length: count }, (_, i) => (
        <Item key={i} className={`text-center rounded p-2 ${bgColor}`}>
          {i + 1}
        </Item>
      ))}
    </div>
  );
};

export default Pagination;
