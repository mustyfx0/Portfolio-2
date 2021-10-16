import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi there, <span>Mustapha</span> here
              </p>
              <h2 className="about__heading">A freelance Web Developer</h2>
              <div className="about__info">
                <PText>
                  I am currently studying Computer Engineering at Cyprus
                  International University, with a focus on Computer Software
                  Engineering, and Since the beginning of my journey as a
                  freelance developer nearly 3 years ago, I've done remote work
                  for agencies, consulted for local startups, and collaborated
                  with talented people to create digital products for both
                  business and consumer use.
                  <br />
                  <br />
                  Being a developer is tough. It seems like every other day
                  there's a new design to learn, tool to master, and endless
                  design-related articles to read. Honestly, it can be
                  overwhelming and intimidating. I know because I've walked more
                  than a few miles in those shoes. So whether you're new to the
                  field or simply looking for some guidance and support, I can
                  help.. My vision is to improve the world a one problem at a
                  time.
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="High-School"
                items={['El=Amin international School']}
              />
              <AboutInfoItem
                title="College"
                items={['Glorious Vision International College']}
              />
              <AboutInfoItem
                title="University"
                items={['Cyprus International University']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="Languages"
                items={['C++', 'C#', 'JavaScript', 'Python']}
              />
              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'React']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node.js', 'Express', 'PHP']}
              />
              <AboutInfoItem
                title="Design"
                items={['Photoshop', 'Adobe Xd', 'Figma']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2019-2020"
                items={['Junior developer at Jibasa Tech']}
              />
              <AboutInfoItem
                title="2020-"
                items={['Freelance Web Developer']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
