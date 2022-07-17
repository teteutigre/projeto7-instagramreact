import PostTop from "./PostTop";
import PostMid from "./PostMid";

export default function Post({ topInfo, midInfo }) {
  return (
    <div class="post">
      <PostTop
        nickImg={topInfo.nickImg}
        nick={topInfo.nick}
        img={topInfo.img}
      />
      <PostMid
        curtido={midInfo.curtido}
        likes={midInfo.likes}
        curtidoPor={midInfo.curtidoPor}
      />
    </div>
  );
}
