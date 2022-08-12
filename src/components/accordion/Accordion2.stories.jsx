import styled from 'styled-components';
import Accordion from './Accordion2';
import AccordionSummary from './AccordionSummary';
import AccordionDetails from './AccordionDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
export default {
  title: 'Accordion2',
  component: Accordion,
};

export const Default = (args) => {
  const DefaultRoot = styled.div`
    box-shadow: inset 1px 1px 0 0 hsla(0, 0%, 100%, 0.5), 0 3px 8px 0 #555a64;
  `;
  return (
    <DefaultRoot>
      {[1, 2].map((i) => (
        <Accordion {...args} key={i} className="border-solid border-b-2 border-slate-200">
          <AccordionSummary expandIcon={<FontAwesomeIcon icon={faAngleDown} />}>
            summary
          </AccordionSummary>
          <AccordionDetails>
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
    </DefaultRoot>
  );
};
