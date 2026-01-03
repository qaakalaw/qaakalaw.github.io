import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'mailto:angeloaaronkalaw@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'https://api.whatsapp.com/send?phone=09085655001',
    label: 'Github',
    icon: faWhatsapp,
  },
  {
    link: 'https://www.linkedin.com/in/angeloaaronkalaw',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://www.facebook.com/angeloaaronkalaw',
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: 'https://github.com/qaakalaw',
    label: 'Github',
    icon: faGithub,
  },
];

export default data;
