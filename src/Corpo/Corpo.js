import Posts from "./Posts";
import Sidebar from "./Sidebar";

export default function Stories() {
  const storyObj = [
    { img: "./assets/img/9gag.svg", usuario: "9gag" },
    {
      img: "./assets/img/meowed.svg",
      usuario: "meowed",
    },
    { img: "./assets/img/barked.svg", usuario: "barked" },
    {
      img: "./assets/img/nathanwpylestrangeplanet.svg",
      usuario: "nathanwpylestrangeplanet",
    },
    { img: "./assets/img/wawawicomics.svg", usuario: "wawawicomics" },
    { img: "./assets/img/respondeai.svg", usuario: "respondeai" },
    { img: "./assets/img/filomoderna.svg", usuario: "filomoderna" },
    { img: "./assets/img/memeriagourmet.svg", usuario: "memeriagourmet" },
  ];

  return (
    <div class="corpo">
      <div class="esquerda">
        <div class="stories">
          {storyObj.map((elemento) => (
            <div class="story">
              <div class="imagem">
                <img src={elemento.img} />
              </div>
              <div class="usuario">{elemento.usuario}</div>
            </div>
          ))}
          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>

        <Posts />
      </div>
      <Sidebar />
    </div>
  );
}
