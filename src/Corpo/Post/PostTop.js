function FotoPost(props) {
  return (
    <div class="conteudo">
      <img src={props.img} />
    </div>
  );
}

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

      <FotoPost img={props.img} />
    </div>
  );
}
