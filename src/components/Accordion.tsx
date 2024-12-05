import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function Accordion1() {
    return (
      <Accordion type="single" collapsible className="m-10 w-90">
        <AccordionItem value="item-1">
          <AccordionTrigger>How to get started ? </AccordionTrigger>
          <AccordionContent>
          Admissions are going on and you can attend our demo cllasses from 03rd March
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What are the class Timings?</AccordionTrigger>
          <AccordionContent>
          Both morning and evening batches available , with classes starting at 7 AM in morning and 4 PM in the afternoon.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Popular Courses to attend?</AccordionTrigger>
          <AccordionContent>
          Join in our DCA and PGDCA courses. classes starting soon.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  