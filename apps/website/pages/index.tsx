import MyProfileGreeting from '../components/MyProfileGreeting/MyProfileGreeting';
import Socials from '../components/Socials/Socials';
import AboutMe from '../components/AboutMe/AboutMe';
import WorkExperience from '../components/WorkExperience/WorkExperience';
import ThemeSwitch from '../components/ThemeSwitch/ThemeSwitch';
import MadeWithLove from '../components/MadeWithLove/MadeWithLove';
export function Index() {
  return (
    <div>
      <div className="from-primary to-primary-dark border-gold relative flex flex-col border-b-8 bg-gradient-to-br p-6 text-white md:fixed md:h-screen md:w-[700px] md:flex-row md:items-center md:justify-around md:border-b-0 md:border-r-8">
        <div className="text-gold pb-2 text-right md:hidden">
          <ThemeSwitch />
        </div>
        <MyProfileGreeting />
        <div className="absolute bottom-0 hidden justify-around py-3 md:flex">
          <MadeWithLove />
        </div>
      </div>
      <div className="overflow-y-auto dark:bg-[#0f1411] dark:text-white md:pl-[700px]">
        <div className="container mx-auto flex hidden min-h-[64px] items-center justify-end space-x-4 divide-x p-4 md:sticky md:flex">
          <Socials />
          <div className="text-primary flex items-center pl-4">
            <ThemeSwitch />
          </div>
        </div>
        <div className="container mx-auto p-2 md:space-y-6 md:px-12 md:py-6">
          <AboutMe />
          <WorkExperience />
          <div className="flex justify-around pt-4 pb-3 text-gray-500 md:hidden">
            <MadeWithLove />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
