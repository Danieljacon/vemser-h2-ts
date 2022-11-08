import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import "./styles.css";
import axios from "axios";
import { TCharacter } from "./types";

export const Home: React.FC = () => {
  const [personagens, setPersonagens] = useState<TCharacter[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://rickandmortyapi.com/api/character/?page=1")
      .then((res) => {
        setPersonagens(res.data.results);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <section className="section-1">
        <div className="cards">
          {loading ? (
            <h1>Carregando...</h1>
          ) : (
            personagens.map((personagem) => {
              return <Card key={personagem.id} card={personagem} />;
            })
          )}
        </div>
      </section>
    </div>
  );
};
