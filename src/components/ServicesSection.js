import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What i will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Web Design"
            desc="I do UI/UX design that help websites to get a unique look. I value simple content structure, clean design patterns, and thoughtful interactions.
            "
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web Dev"
            desc="I create high performance responsive websites with blazing speed and amazing UI. like to code things from scratch, and enjoy bringing ideas to life in the browser."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="App Dev"
            desc="I develop react native based android and Ios apps with amazing user interface and user experience , if you have an app idea I can help bring it to life "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
