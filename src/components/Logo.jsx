import LOGO_IMG from "../assets/imgs/logo.png";
export default function Logo() {
  return (
    <div className="logo__container flex justify-center items-center gap-2">
      <img src={LOGO_IMG} alt="logo" className="logo__img w-20" />
      <span className=" font-roboto font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-sky-500  uppercase">
        invoicy
      </span>
    </div>
  );
}
