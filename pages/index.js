import Nav from '../components/nav';
import WinnerList from '../components/WinnerList';

const Title = () => {
  return (
    <div className="py-10">
      <h1 className="text-4xl text-center">FIFA React</h1>
    </div>
  );
};

export default function IndexPage() {
  return (
    <div>
      {/* <Nav /> */}
      <Title />
      <WinnerList />
    </div>
  );
}
