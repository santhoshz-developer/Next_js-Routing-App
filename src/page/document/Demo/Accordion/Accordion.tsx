import UpAccordion from "@/component/upAccordion/UpAccordion"
import { AccordionStyled } from "./Accordion.styled"

export const Accordion=()=>{
    return (
        <>
          <UpAccordion title="Accordion">
        <div>
          <AccordionStyled title="One">
            <p>Santhosh</p>
          </AccordionStyled>
          <AccordionStyled title="Two">
            <p>sanjai</p>
          </AccordionStyled>
        </div>
      </UpAccordion>
      <UpAccordion title="Accordion">
        <div>
          <AccordionStyled title="One">
            <p>Santhosh</p>
          </AccordionStyled>
          <AccordionStyled title="Two">
            <p>sanjai</p>
          </AccordionStyled>
        </div>
      </UpAccordion>
        </>
      

    )
}