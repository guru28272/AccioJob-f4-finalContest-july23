const imgUrl = "https://picsum.photos/200?random=${post.id}";

const Display = ({ data, setDetail }) => {
  return (
    <div className="homeDisplay">
      {data &&
        data.map((item) => {
          // console.log(item);
          const { userId, id, title, body } = item;
          return (
            <div key={id} onClick={() => setDetail(item)} className="display">
              <img src={imgUrl} alt={title} />
              <h5>user id: {userId}</h5>
              <h5 style={{ marginBottom: "0.75rem" }}>title: {title}</h5>
              <p>body: {body}</p>
              <h5 id="absolute">read more</h5>
            </div>
          );
        })}
    </div>
  );
};
export default Display;
