import Dark from "../../public/icon/Dark";
import Light from "../../public/icon/Light";

export default function Header({ setLightMode, lightMode }) {
  return (
    <div className="main-header">
      <p className="header">TO DO</p>
      <button
        onClick={() => setLightMode((lightMode) => !lightMode)}
        className="light-mod"
      >
        {lightMode ? <Light /> : <Dark />}
      </button>
    </div>
  );
}
