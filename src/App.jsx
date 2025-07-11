import { useTranslation } from "react-i18next";
import "./App.css";
import './locals/i18n'

export default function App(){
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="style">
      <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
        <option value="en">English</option>
        <option value="hin">हिंदी</option>
      </select>
      <div>{t("welcome")}</div>
    </div>
  )
}