const PostCard = ({ post }) => {
  return (
    <article className="bg-arg-white p-6 sm:p-8 rounded border-4 border-arg-muted shadow-md shadow-arg-muted/40 grid gap-4">
      <div>
        <time
          dateTime={post.data.date.toISOString()}
          className="uppercase text-arg-gold"
        >
          {post.data.date.toLocaleDateString("en-us", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </time>
        <h2 className="text-xl sm:text-2xl max-w-heading font-bold">
          <a
            className="font-bold focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-arg-white ring-arg-gold"
            href={`/${post.slug}/`}
          >
            {post.data.title}
          </a>
        </h2>
      </div>
      <div className="bg-arg-muted h-[1px] w-full" />
      <p>{post.data.description}</p>
      <a
        href={`/${post.slug}/`}
        className="capitalize text-center bg-arg-gold text-arg-white font-bold w-fit px-6 py-2 rounded-md transition-colors hover:bg-arg-muted focus:outline-none ring-offset-arg-white  focus-visible:ring-offset-2 focus-visible:ring-arg-gold focus-visible:ring-4 ring-offset-2"
      >
        Read Post
      </a>
    </article>
  );
};
export default PostCard;
