import Github from '../Icons/Github/Github';
import Linkedin from '../Icons/Linkedin/Linkedin';
import SocialLink from '../SocialLink/SocialLink';
import { LINKEDIN_PROFILE_URL, GITHUB_PROFILE_URL } from '../../constants/URL';

export function Socials() {
  return (
    <div className="flex items-center space-x-3">
      <SocialLink href={LINKEDIN_PROFILE_URL} label="LinkedIn">
        <Linkedin />
      </SocialLink>
      <SocialLink href={GITHUB_PROFILE_URL} label="Github">
        <Github />
      </SocialLink>
    </div>
  );
}

export default Socials;
