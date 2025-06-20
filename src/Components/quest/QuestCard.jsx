import { useState } from "react";
import "./QuestCard.css";
import { GetDataBase } from "../../services/GetDataBase";
import { QuestInfo } from "./QuestInfo";
import { useSearchContext } from "../../context/SearchContext";
import { QuestStarSelection } from "./QuestStarSelection";

export const QuestCard = ({ questTypeB }) => {
  const { searchValue } = useSearchContext();
  const [misionLevel, setMisionLevel] = useState("1★");
  const { quest } = GetDataBase();
  const [quests] = quest;

  return (
    <div>
      <nav>
        <QuestStarSelection
          questType={misionLevel}
          searchValue={searchValue}
          setQuestLevel={setMisionLevel}
        />
      </nav>
      <div className="quest-container">
        <ul
          className="quests-list"
          style={{ listStyle: "none", margin: "0", padding: 0 }}
        >
          {quests.map((ele) =>
            searchValue === "" ? (
              ele.difficulty + "★" === misionLevel &&
              ele.questType === questTypeB && (
                <QuestInfo
                  key={ele.id}
                  misionLevel={misionLevel}
                  name={ele.name}
                  client={ele.client}
                  description={ele.description}
                  reward={ele.reward}
                  map={ele.map}
                  isKey={ele.isKey}
                  questType={ele.questType}
                  difficulty={ele.difficulty}
                  objective={ele.objetive}
                  targett={ele.targets}
                />
              )
            ) : (
              //Search quest by SearchInput
              <QuestInfo
                key={ele.id}
                misionLevel={misionLevel}
                name={ele.name}
                client={ele.client}
                description={ele.description}
                reward={ele.reward}
                map={ele.map}
                isKey={ele.isKey}
                questType={ele.questType}
                difficulty={ele.difficulty}
                objective={ele.objetive}
                targett={ele.targets}
              />
            )
          )}
        </ul>
      </div>
    </div>
  );
};
