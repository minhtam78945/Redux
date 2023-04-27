import { useSelector } from "react-redux";
import "./MakePost.css";
function Post() {
  const posts = useSelector((state) => state?.posts?.posts);
  const tags = ["None", "NSFW", "GOOD", "MOOD"];
  return (
    <>
      <section className="post-container">
        {posts.slice(1).map((post, index) => (
          <div className="posts" key={index}>
            <p className="posts-title">{post.title}</p>
            <p className={`posts-tags-${tags[post.tag]} posts-tags`}>
              {tags[post.tag]}
            </p>
            <p className="posts-description">{post.desciption}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default Post;
