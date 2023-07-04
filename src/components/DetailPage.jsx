const imgUrl = "https://picsum.photos/200?random=${post.id}";

const DetailPage = ({ item: { userId, id, title, body } }) => {
  return (
    <div className="detailPage">
      <h5>details page for id {id}</h5>
      <img src={imgUrl} alt="" />
      <h5>user id: {userId}</h5>
      <h5>title: {title}</h5>
      <p>body: {body}</p>
    </div>
  );
};
export default DetailPage;
