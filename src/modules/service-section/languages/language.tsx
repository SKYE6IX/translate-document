import "./language.scss";

const languageList = [
  "с азербайджанского",
  "с английского",
  "с арабского",
  "с армянского",
  "с беларусского",
  "с грузинского",
  "с итальянского",
  "с испанского",
  "с казахского",
  "с киргизского",
  "с китайского",
  "с немецкого",
  "с португальского",
  "с румынского",
  "с таджикского",
  "с турецкого",
  "с туркменского",
  "с узбекского",
  "с украинского",
  "с французского",
];

export default function Languages() {
  return (
    <div className="language">
      <div className="language__header">
        <h3>
          Переводим <span>на русский</span> язык <span>и наоборот</span>
        </h3>
        <div className="language__header-inner-wrapper">
          <h2>20</h2>
          <p>языков</p>
        </div>
      </div>
      <div className="language__list-wrapper">
        <ul className="language__list">
          {languageList.map((list, i) => (
            <li key={i}>{list}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
