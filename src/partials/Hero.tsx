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
          communication. I grew interested in JavaScript and coding and decided
          to become a web developer when I discovered that they could help me
          translate my creative skills into tangible solutions.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
