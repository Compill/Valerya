
import { Accordion, AccordionItem, Container } from "@valerya/components";
import React from "react";

function ExpandArrowDownSvg() {
  return <svg w="24px" h="24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
  </svg>
}

function CollapseArrowUpSvg() {
  return <svg w="24px" h="24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
  </svg>
}
export default function AccordionPage({ ...props }) {

  return (
    <Container dflex center size="x2" justifyContent="center" py="48" w="50%" flexRow gap="5">
      <Accordion w="350px" allowMultiple={true} gap="4" >
        <AccordionItem label="test1" showDivider scheme="default" dividerWidth="padded">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum assumenda odit ad quidem possimus praesentium esse minima voluptate nesciunt omnis. Eligendi assumenda vitae deleniti fuga veritatis eum modi eveniet ipsum.</p>
        </AccordionItem >

        <AccordionItem label="test2" isOpen showDivider>
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum assumenda odit ad quidem possimus praesentium esse minima voluptate nesciunt omnis. Eligendi assumenda vitae deleniti fuga veritatis eum modi eveniet ipsum.</p>
        </AccordionItem >

        <AccordionItem label="test3" >
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum assumenda odit ad quidem possimus praesentium esse minima voluptate nesciunt omnis. Eligendi assumenda vitae deleniti fuga veritatis eum modi eveniet ipsum.</p>
        </AccordionItem >
      </Accordion>

      <Accordion w="350px" variant="bordered" allowMultiple={true} gap="4" itemStyle={{borderColor: "#ffff00", borderOpacity: "100", bgColor:"#00ffff"}} itemDividerStyle={{bgColor: "#00ff00", bgOpacity: "100"}}>
        <AccordionItem label="test1" showDivider scheme="default" dividerWidth="padded">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum assumenda odit ad quidem possimus praesentium esse minima voluptate nesciunt omnis. Eligendi assumenda vitae deleniti fuga veritatis eum modi eveniet ipsum.</p>
        </AccordionItem >

        <AccordionItem label="test2" isOpen showDivider>
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum assumenda odit ad quidem possimus praesentium esse minima voluptate nesciunt omnis. Eligendi assumenda vitae deleniti fuga veritatis eum modi eveniet ipsum.</p>
        </AccordionItem >

        <AccordionItem label="test3" >
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum assumenda odit ad quidem possimus praesentium esse minima voluptate nesciunt omnis. Eligendi assumenda vitae deleniti fuga veritatis eum modi eveniet ipsum.</p>
        </AccordionItem >
      </Accordion>

      <Accordion w="350px" variant="menu" allowMultiple={true} gap="4" >
        <AccordionItem label="test1" showDivider scheme="default" dividerWidth="padded">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum assumenda odit ad quidem possimus praesentium esse minima voluptate nesciunt omnis. Eligendi assumenda vitae deleniti fuga veritatis eum modi eveniet ipsum.</p>
        </AccordionItem >

        <AccordionItem label="test2" isOpen showDivider>
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum assumenda odit ad quidem possimus praesentium esse minima voluptate nesciunt omnis. Eligendi assumenda vitae deleniti fuga veritatis eum modi eveniet ipsum.</p>
        </AccordionItem >

        <AccordionItem label="test3" >
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum assumenda odit ad quidem possimus praesentium esse minima voluptate nesciunt omnis. Eligendi assumenda vitae deleniti fuga veritatis eum modi eveniet ipsum.</p>
        </AccordionItem >
      </Accordion>
    </Container>
  );
}
