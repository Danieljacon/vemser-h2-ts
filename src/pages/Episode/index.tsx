import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

type TEpisodes = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
};

type TInfo = {
  next: string;
  prev: string;
  count: number;
  pages: number;
};

export const Episode: React.FC = () => {
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/episode");
  const [episodes, setEpisodes] = useState<TEpisodes[]>([]);
  const [info, setInfo] = useState<TInfo>({
    next: "",
    prev: "",
    count: 0,
    pages: 0,
  });

  useEffect(() => {
    axios.get(url).then((response) => {
      setEpisodes(response.data.results);
      setInfo(response.data.info);
    });
  }, [url]);

  return (
    <div id="episodes">
      <div>
        <ul className="episodes">
          {episodes &&
            episodes.map((episode) => {
              return (
                <li key={episode.id}>
                  <p className="episode-name">{episode.name}</p>
                  <p>{episode.episode}</p>
                  <p>{episode.air_date}</p>
                </li>
              );
            })}
        </ul>
      </div>
      <div id="buttons-end">
        <div className="buttons">
          {info.prev && (
            <button onClick={() => setUrl(info.prev)}>Previous</button>
          )}
          {info.next && <button onClick={() => setUrl(info.next)}>Next</button>}
        </div>
      </div>
    </div>
  );
};
