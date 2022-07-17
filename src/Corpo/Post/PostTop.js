export default function PostTop(props) {
  return (
    <div>
      <div class="topo">
        <div class="usuario">
          <img src={props.nickImg} />
          {props.nick}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img
          onClick={() => {
            if (!props.heart) props.setHeart(!props.heart);
          }}
          src={props.img}
        />
      </div>
    </div>
  );
}
