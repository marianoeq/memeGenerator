import React, { useState, useEffect } from "react";

export default function Meme() {
  const [allMemes, setAllMemes] = useState([]);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const data = await response.json();
      setAllMemes(data.data.memes);
    };
    fetchData();
  }, []);

  function getMemeImage() {
    const randomImage = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomImage].url;
    setMeme((prevMemeImg) => {
      return { ...prevMemeImg, randomImage: url };
    });
  }

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
    console.log(`name: ${name}, value: ${value}`);
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="RandomMeme" className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
