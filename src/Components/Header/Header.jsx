import profile from "../../assets/profile.png";
const Header = () => {
  return (
    <div className="text-2xl flex justify-between  items-center border-b-2">
      <h1 className="text-sky-500 font-bold mx-4 p-4">Knowledge Cafe </h1>
      <img className="mx-4 p-4" src={profile} alt="" />
    </div>
  );
};

export default Header;
//https://i.ibb.co.com/wpcPWpv/flat-lay-keyboard-headphones-with-copy-space.jpg
