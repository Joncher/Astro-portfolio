import { Section } from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent">
      Contact
    </span>
    <span className="text-3xl font-bold "> Info</span>
    <p className="mt-3 text-xl text-gray-300">
      <a className="inline" href="mailto:johnoncher@gmail.com">
        <p>
          Feel free to reach out to me if you have any new opportunities or free
          lance projects. You can contact me by email at johnoncher@gmail.com.
        </p>
      </a>
    </p>
  </Section>
);

export { CTA };
