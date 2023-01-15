import MyProfileGreeting from '../components/MyProfileGreeting/MyProfileGreeting';
import Socials from '../components/Socials/Socials';

export function Index() {
  return (
    <div>
      <div className="from-primary to-primary-dark border-gold flex items-center justify-around border-b-8 bg-gradient-to-br p-6 md:fixed md:h-screen md:w-[700px] md:border-b-0 md:border-r-8">
        <MyProfileGreeting />
      </div>
      <div className="overflow-y-auto md:pl-[700px]">
        <div className="container mx-auto flex hidden min-h-[64px] justify-end p-4 md:sticky md:flex">
          <Socials />
        </div>
      </div>
    </div>
  );
}

export default Index;
