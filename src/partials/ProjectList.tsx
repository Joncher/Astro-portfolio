import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Woodhaven Smoke Shop Site"
        description="A site built for a client to bring more awareness to their business"
        link="https://woodhaven-smokeshop.netlify.app"
        img={{
          src: '/assets/images/woodhaven-smokeshop.png',
          alt: 'Smokeshop site project',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
            <Tags color={ColorTags.LIME}>Web design</Tags>
          </>
        }
      />
      <Project
        name="NLF SG Blog Site"
        description="A Blog site that allows users to engage with small group content"
        link="https://nlf-sg-resources.netlify.app/blog/"
        img={{
          src: '/assets/images/sg-resource.png',
          alt: 'Small Group blog project',
        }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Gatsby.js</Tags>
            <Tags color={ColorTags.EMERALD}>Blog</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
          </>
        }
      />
      <Project
        name="Overtrack"
        description="An App that allows users to keep track of Overwatch ranked games and gives match history and profile stats"
        link="https://www.youtube.com/watch?v=_sblH20usE8&ab_channel=johnoncher"
        img={{ src: '/assets/images/Overtrack.png', alt: 'Overtrack Project' }}
        category={
          <>
            <Tags color={ColorTags.BLUE}>React.js</Tags>
            <Tags color={ColorTags.INDIGO}>Bootstrap</Tags>
            <Tags color={ColorTags.ROSE}>Ruby on Rails</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
