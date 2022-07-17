import React from "react";
export default function PostMid(props) {
  return (
    <div class="fundo">
      <div class="acoes">
        <div>
          <ion-icon
            color={props.heart ? "danger" : ""}
            onClick={() => props.setHeart(!props.heart)}
            name={props.heart ? "heart" : "heart-outline"}
          ></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>

      <div class="curtidas">
        <img src={props.curtido} />
        <div class="texto">
          Curtido por <strong>{props.curtidoPor}</strong> e{" "}
          <strong>{props.likes}</strong>
        </div>
      </div>
    </div>
  );
}
