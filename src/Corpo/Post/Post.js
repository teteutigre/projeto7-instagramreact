import PostTop from "./PostTop";
import PostMid from "./PostMid";
import { useState } from "react";
export default function Post({ topInfo, midInfo }) {
  const [heart, setHeart] = useState(false);
  return (
    <div class="post">
      <PostTop
        heart={heart}
        setHeart={setHeart}
        nickImg={topInfo.nickImg}
        nick={topInfo.nick}
        img={topInfo.img}
      />
      <PostMid
        heart={heart}
        setHeart={setHeart}
        curtido={midInfo.curtido}
        likes={midInfo.likes}
        curtidoPor={midInfo.curtidoPor}
      />
    </div>
  );
}
