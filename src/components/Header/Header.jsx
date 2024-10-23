import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center container p-4 border-b-2 mx-auto">
      <h2 className="text-4xl text-center font-bold">This Is Cafe Knowledge</h2>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
