import LOGO_IMG from "../assets/imgs/logo.png";
export default function Logo({ text, textSize = "text-s", logoSize = "w-20" }) {
  return (
    <div className="logo__container  flex justify-center items-center gap-2">
      <img src={LOGO_IMG} alt="logo" className={`logo__img ${logoSize}`} />
      {text && (
        <span
          className={`font-josefin font-bold  text-transparent ${textSize} bg-clip-text bg-gradient-to-r from-sky-700 to-sky-500  uppercase`}
        >
          invoicy
        </span>
      )}
    </div>
  );
}
