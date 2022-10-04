import styled from 'styled-components';
import Accordion from './Accordion';
import AccordionSummary from './AccordionSummary';
import AccordionDetails from './AccordionDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { fontColors, backgroundColors, fontSizes, fontWeights } from '../common';
import { useState } from 'react';

export default {
  title: 'Accordion',
  component: Accordion,
  argTypes: {
    summaryColor: { control: 'select', options: fontColors },
    summaryBgColor: { control: 'select', options: backgroundColors },
    summaryFontSize: { control: 'select', options: fontSizes },
    summaryFontWeights: { control: 'select', options: fontWeights },

    detailsColor: { control: 'select', options: fontColors },
    detailsBgColor: { control: 'select', options: backgroundColors },
    detailsFontSize: { control: 'select', options: fontSizes },
    detailsFontWeights: { control: 'select', options: fontWeights },

    disabled: { control: 'boolean' },
  },
};

export const Default = ({
  summaryColor = 'text-black',
  summaryBgColor = 'bg-white',
  summaryFontSize = 'text-xl',
  summaryFontWeights = 'font-bold',
  detailsColor = 'text-black',
  detailsBgColor = 'bg-white',
  detailsFontSize = 'text-base',
  detailsFontWeights = 'font-light',
  ...args
}) => {
  const DefaultRoot = styled.div`
    box-shadow: inset 1px 1px 0 0 hsla(0, 0%, 100%, 0.5), 0 3px 8px 0 #555a64;
  `;
  return (
    <DefaultRoot>
      <Accordion {...args} className="border-solid border-b-2 border-slate-200">
        <AccordionSummary
          className={`${summaryColor} ${summaryBgColor} ${summaryFontSize} ${summaryFontWeights}`}
          expandIcon={<FontAwesomeIcon icon={faAngleDown} />}
        >
          summary
        </AccordionSummary>
        <AccordionDetails
          className={`${detailsColor} ${detailsBgColor} ${detailsFontSize} ${detailsFontWeights}`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente at excepturi nemo, ad
          dolores nihil, quae eos magnam quas et ullam eius eaque dolore. Dolore voluptate impedit
          voluptatum et culpa, quo deserunt non libero minus inventore sapiente, accusantium
          aspernatur similique odio alias, quae quas commodi eligendi expedita. Beatae blanditiis
          perspiciatis minima earum assumenda possimus voluptatem enim tempore quae, corrupti,
          ducimus incidunt quas animi temporibus expedita laudantium ipsa repellat! Veritatis nihil
          tenetur recusandae dolorum, minus dolores nesciunt asperiores nobis dicta quibusdam?
          Possimus minus officiis maiores aliquid, sequi incidunt. Obcaecati consequuntur
          reprehenderit temporibus neque possimus, vero ducimus nam itaque blanditiis quis eos.
        </AccordionDetails>
      </Accordion>
    </DefaultRoot>
  );
};

export const Multiple = ({
  summaryColor = 'text-black',
  summaryBgColor = 'bg-white',
  summaryFontSize = 'text-xl',
  summaryFontWeights = 'font-bold',
  detailsColor = 'text-black',
  detailsBgColor = 'bg-white',
  detailsFontSize = 'text-base',
  detailsFontWeights = 'font-light',
  ...args
}) => {
  const MultipleRoot = styled.div`
    box-shadow: inset 1px 1px 0 0 hsla(0, 0%, 100%, 0.5), 0 3px 8px 0 #555a64;
  `;
  return (
    <MultipleRoot>
      {[1, 2, 3].map((i) => (
        <Accordion {...args} key={i} className="border-solid border-b-2 border-slate-200">
          <AccordionSummary
            className={`${summaryColor} ${summaryBgColor} ${summaryFontSize} ${summaryFontWeights}`}
            expandIcon={<FontAwesomeIcon icon={faAngleDown} />}
          >
            summary
          </AccordionSummary>
          <AccordionDetails
            className={`${detailsColor} ${detailsBgColor} ${detailsFontSize} ${detailsFontWeights}`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente at excepturi nemo, ad
            dolores nihil, quae eos magnam quas et ullam eius eaque dolore. Dolore voluptate impedit
            voluptatum et culpa, quo deserunt non libero minus inventore sapiente, accusantium
            aspernatur similique odio alias, quae quas commodi eligendi expedita. Beatae blanditiis
            perspiciatis minima earum assumenda possimus voluptatem enim tempore quae, corrupti,
            ducimus incidunt quas animi temporibus expedita laudantium ipsa repellat! Veritatis
            nihil tenetur recusandae dolorum, minus dolores nesciunt asperiores nobis dicta
            quibusdam? Possimus minus officiis maiores aliquid, sequi incidunt. Obcaecati
            consequuntur reprehenderit temporibus neque possimus, vero ducimus nam itaque blanditiis
            quis eos.
          </AccordionDetails>
        </Accordion>
      ))}
    </MultipleRoot>
  );
};

export const Disabled = ({
  summaryColor = 'text-black',
  summaryBgColor = 'bg-white',
  summaryFontSize = 'text-xl',
  summaryFontWeights = 'font-bold',
  detailsColor = 'text-black',
  detailsBgColor = 'bg-white',
  detailsFontSize = 'text-base',
  detailsFontWeights = 'font-light',
  disabled = true,
  ...args
}) => {
  const DefaultRoot = styled.div`
    box-shadow: inset 1px 1px 0 0 hsla(0, 0%, 100%, 0.5), 0 3px 8px 0 #555a64;
  `;
  return (
    <DefaultRoot>
      <Accordion {...args} disabled={disabled} className="border-solid border-b-2 border-slate-200">
        <AccordionSummary
          className={`${summaryColor} ${summaryBgColor} ${summaryFontSize} ${summaryFontWeights}`}
          expandIcon={<FontAwesomeIcon icon={faAngleDown} />}
        >
          summary
        </AccordionSummary>
        <AccordionDetails
          className={`${detailsColor} ${detailsBgColor} ${detailsFontSize} ${detailsFontWeights}`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente at excepturi nemo, ad
          dolores nihil, quae eos magnam quas et ullam eius eaque dolore. Dolore voluptate impedit
          voluptatum et culpa, quo deserunt non libero minus inventore sapiente, accusantium
          aspernatur similique odio alias, quae quas commodi eligendi expedita. Beatae blanditiis
          perspiciatis minima earum assumenda possimus voluptatem enim tempore quae, corrupti,
          ducimus incidunt quas animi temporibus expedita laudantium ipsa repellat! Veritatis nihil
          tenetur recusandae dolorum, minus dolores nesciunt asperiores nobis dicta quibusdam?
          Possimus minus officiis maiores aliquid, sequi incidunt. Obcaecati consequuntur
          reprehenderit temporibus neque possimus, vero ducimus nam itaque blanditiis quis eos.
        </AccordionDetails>
      </Accordion>
    </DefaultRoot>
  );
};

export const CollapsibleGroup = ({
  summaryColor = 'text-black',
  summaryBgColor = 'bg-white',
  summaryFontSize = 'text-xl',
  summaryFontWeights = 'font-bold',
  detailsColor = 'text-black',
  detailsBgColor = 'bg-white',
  detailsFontSize = 'text-base',
  detailsFontWeights = 'font-light',
  ...args
}) => {
  const CollapsibleGroupRoot = styled.div`
    box-shadow: inset 1px 1px 0 0 hsla(0, 0%, 100%, 0.5), 0 3px 8px 0 #555a64;
  `;
  const [expandedAccordion, setExpandedAccordion] = useState(0);
  const onChange = (i) => (event, newExpanded) => {
    if (newExpanded) {
      setExpandedAccordion(i);
    }
  };
  return (
    <CollapsibleGroupRoot>
      {[1, 2, 3].map((i) => (
        <Accordion
          onChange={onChange(i)}
          expanded={expandedAccordion === i}
          {...args}
          key={i}
          className="border-solid border-b-2 border-slate-200"
        >
          <AccordionSummary
            className={`${summaryColor} ${summaryBgColor} ${summaryFontSize} ${summaryFontWeights}`}
            expandIcon={<FontAwesomeIcon icon={faAngleDown} />}
          >
            summary
          </AccordionSummary>
          <AccordionDetails
            className={`${detailsColor} ${detailsBgColor} ${detailsFontSize} ${detailsFontWeights}`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente at excepturi nemo, ad
            dolores nihil, quae eos magnam quas et ullam eius eaque dolore. Dolore voluptate impedit
            voluptatum et culpa, quo deserunt non libero minus inventore sapiente, accusantium
            aspernatur similique odio alias, quae quas commodi eligendi expedita. Beatae blanditiis
            perspiciatis minima earum assumenda possimus voluptatem enim tempore quae, corrupti,
            ducimus incidunt quas animi temporibus expedita laudantium ipsa repellat! Veritatis
            nihil tenetur recusandae dolorum, minus dolores nesciunt asperiores nobis dicta
            quibusdam? Possimus minus officiis maiores aliquid, sequi incidunt. Obcaecati
            consequuntur reprehenderit temporibus neque possimus, vero ducimus nam itaque blanditiis
            quis eos.
          </AccordionDetails>
        </Accordion>
      ))}
    </CollapsibleGroupRoot>
  );
};
