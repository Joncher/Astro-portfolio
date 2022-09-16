import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>John Oncher</GradientText> 👋
        </>
      }
      description={
        <>
          Full stack web developer with a background in logistics and
          communication. I grew interested in JavaScript and coding after
          college which led to working as a free lance web developer.
        </>
      }
      avatar={
        <img
          className="h-80"
          src="src/images/profile-pic.png"
          alt="Profile picture"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a
            href="https://www.linkedin.com/in/john-crespi-oncher-62b4a3175/"
            target="_blank"
          >
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
