import Post from "./Post/Post";
import ArrayPost from "./Post/ArrayPost";

export default function Posts() {
  return (
    <div class="posts">
      {ArrayPost.map((elemento, index) => {
        return (
          <Post
            key={index}
            topInfo={elemento.topInfo}
            midInfo={elemento.midInfo}
          />
        );
      })}
    </div>
  );
}
