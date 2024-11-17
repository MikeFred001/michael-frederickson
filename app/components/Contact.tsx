import Typography from './common/Typography';
import ContactButton from './ContactButton';
import { faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMobileAlt, faSearch, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';

export default function Contact() {
  return (
    <div className='CONTACT w-[74rem]'>
      <Typography className='text-[6rem] text-shadow-red2 font-semibold'>
        Contact
      </Typography>
      <div className='flex flex-grow justify-between'>
        <ContactButton icon={faMobileAlt} label='phone' size={175} />
        <ContactButton icon={faEnvelope} label='email' size={175} />
        <ContactButton icon={faLinkedin} label='linkedin' size={175} />
        <ContactButton icon={faGithub} label='github' size={175} />
        <ContactButton icon={faFileAlt} label='resume' size={175} />
      </div>
    </div>
  );
}