import i18n from "@/locales/i18n";
import { useTranslation } from "react-i18next";

const Locales = () => {
  const langOptions = [
    {
      value: "ko",
      label: "한국어",
    },
    {
      value: "en",
      label: "English",
    },
  ];
  const changeLanguage = () => {
    if (i18n.language === "ko") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("ko");
    }
  };
  return (
    <select onChange={changeLanguage}>
      {langOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      <div>{t("header.content")}</div>
      <div>
        <Locales />
      </div>
    </header>
  );
};

export default Header;
