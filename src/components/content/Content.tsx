import React from 'react';
import { ContentWrapper } from '.';
import { FullTextSection } from './fullTextSection';
import { HeroSection } from './heroSection';
import { ProjectsSection } from './projectsSection';
import { ReviewsSection } from './reviewsSection';
import { FormSection } from './formSection';
import firstProjectImage from '../../assets/first-project.png';
import secondProjectImage from '../../assets/second-project.png';
import thirdProjectImage from '../../assets/third-project.png';
import leonidasEstebanReviewer from '../../assets/leonidasesteban-reviewer.png';
import marvolReviewer from '../../assets/marvol-reviewer.png';
import netnetReviewer from '../../assets/netnet-reviewer.png';

function Content():React.ReactElement {
  return (
    <ContentWrapper>
      <HeroSection />
      <FullTextSection />
      <ProjectsSection
        title="leonidasesteban.com"
        description="Accede a más de 100 proyectos que te ayudarán a mejorar tus
        habilidades como desarrollador Front-End."
        image={firstProjectImage}
        isReversed={false}
      />
      <ReviewsSection
        image={leonidasEstebanReviewer}
        review="'Jaume ha sido de gran ayuda para acelerar ciertos esfuerzos de desarrollo.
        Lo que nos hubiera llevado 6 meses solo les llevó 1,5 meses'."
        reviewerInfo="LEONIDAS ESTEBAN / COFUNDADOR Y CEO LEONIDASESTEBAN.COM"
      />
      <ProjectsSection
        title="MARVOL"
        description="Es el sitio oficial de Marvol Entertainment.
        Explore películas, personajes, cómics, programas de televisión, videos y más oficiales de Marvol."
        image={secondProjectImage}
        isReversed
      />
      <ReviewsSection
        image={marvolReviewer}
        review="'Jaume ha superado mis expectativas desde el diseño hasta el desarrollo'."
        reviewerInfo="JASON LOPEZ / COFUNDADOR Y CEO MARVOL"
      />
      <ProjectsSection
        title="NETNET"
        description="Películas y series ilimitadas y mucho más.
        Disfruta donde quieras. Cancela cuando quieras."
        image={thirdProjectImage}
        isReversed={false}
      />
      <ReviewsSection
        image={netnetReviewer}
        review="'Por primera vez en la historia de nuestra empresa,
        aparecimos en todas las plataformas en las que trabajamos'."
        reviewerInfo="MARCO CORTEZ / NETNET"
      />
      <FormSection />
    </ContentWrapper>
  );
}

export default Content;
