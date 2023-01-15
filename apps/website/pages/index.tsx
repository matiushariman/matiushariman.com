import MyProfileGreeting from '../components/MyProfileGreeting/MyProfileGreeting';

export function Index() {
  return (
    <div>
      <div className="from-primary to-primary-dark border-gold flex items-center justify-around border-b-8 bg-gradient-to-br p-6 md:h-screen md:w-[700px] md:border-b-0 md:border-r-8">
        <MyProfileGreeting />
      </div>
    </div>
  );
}

export default Index;
