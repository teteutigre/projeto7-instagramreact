import { useState } from "react";
export default function Posts() {
  const postsObj = [
    {
      nickImg: "./assets/img/meowed.svg",
      nick: "meowed",
      img: "./assets/img/gato-telefone.svg",
      curtido: "./assets/img/respondeai.svg",
      curtidoPor: "respondeai",
      outras: "outras 101.523 pessoas",
    },
    {
      nickImg: "assets/img/barked.svg",
      nick: "barked",
      img: "assets/img/dog.svg",
      curtido: "assets/img/adorable_animals.svg",
      curtidoPor: "adorable_animals",
      outras: "outras 99.159 pessoas",
    },
  ];

  function coracao() {
    if (like === "heart") {
      setLike("heart-outline");
      setPreenchimento("");
    } else {
      setLike("heart");
      setPreenchimento("danger");
    }
  }

  const [like, setLike] = useState("heart-outline");
  const [preenchimento, setPreenchimento] = useState("");

  return (
    <div class="posts">
      {postsObj.map((elemento) => (
        <div class="post">
          <div class="topo">
            <div class="usuario">
              <img src={elemento.nickImg} />
              {elemento.nick}
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo">
            <img onClick={coracao} src={elemento.img} />
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                <ion-icon
                  color={preenchimento}
                  onClick={coracao}
                  name={like}
                ></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div class="curtidas">
              <img src={elemento.curtido} />
              <div class="texto">
                Curtido por <strong>{elemento.curtidoPor}</strong> e{" "}
                <strong>{elemento.outras}</strong>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
