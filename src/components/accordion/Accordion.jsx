import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const AccordionContainer = styled.div`
  margin-bottom: 15px;
  overflow: hidden;
  ${({ border }) => (border ? 'border: 1px solid gray' : '')}
`;

const AccordionSummary = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const AccordionTitle = styled.div`
  margin: 10px;
`;

const IconShowingDtailOpened = styled.div`
  min-height: 30px;
  width: 30px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  transform: rotate(${({ opened }) => (opened ? '180deg' : '0deg')});
`;

const DetailContent = styled.span`
  ${({ detailsClickable }) => (detailsClickable ? 'cursor: pointer;' : '')}
  display: inline-block;
  transform: scale(1);
  transition: transform 0.5s;
  &:hover {
    ${({ scalable }) => (scalable ? 'transform: scale(1.1);' : '')}
  }
`;

const AccordionDetail = styled.div`
  padding: 10px;
  min-height: 10px;
`;

export const Accordion = ({
  border,
  borderRadiusSize,
  summary,
  summaryColor,
  summaryBgColor,
  summaryFontSize,
  summaryFontWeights,
  details,
  detailsColor,
  detailsBgColor,
  detailsFontSize,
  detailsFontWeights,
  detailsClickable,
  scalable,
}) => {
  const [accordionDetailsOpened, setAccordionDetailsOpened] = useState(false);
  return (
    <AccordionContainer border={border} className={`${borderRadiusSize}`}>
      <AccordionSummary
        onClick={() => {
          setAccordionDetailsOpened(!accordionDetailsOpened);
        }}
        className={`${summaryColor} ${summaryBgColor} ${summaryFontSize} ${summaryFontWeights}`}
      >
        <AccordionTitle>{summary}</AccordionTitle>
        <IconShowingDtailOpened opened={accordionDetailsOpened}>
          <FontAwesomeIcon icon={faAngleDown} />
        </IconShowingDtailOpened>
      </AccordionSummary>
      {accordionDetailsOpened
        ? details.map((detail, index) => (
            <AccordionDetail
              key={index}
              className={`${detailsColor} ${detailsBgColor} ${detailsFontSize} ${detailsFontWeights}`}
            >
              <DetailContent scalable={scalable} detailsClickable={detailsClickable}>
                {detail}
              </DetailContent>
            </AccordionDetail>
          ))
        : ''}
    </AccordionContainer>
  );
};

Accordion.defaultProps = {
  border: false,
  borderRadiusSize: 'rounded-none',
  summary: 'Accordion',
  summaryColor: 'text-black',
  summaryBgColor: 'bg-gray-300',
  summaryFontSize: 'text-xl',
  summaryFontWeights: 'font-bold',
  details: [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  ],
  detailsColor: 'text-black',
  detailsBgColor: 'bg-gray-100',
  detailsFontSize: 'text-base',
  detailsFontWeights: 'font-normal',
  detailsClickable: false,
  scalable: false,
};
