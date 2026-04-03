export default function NewsList({ news }) {
  const newsHandler = news.map(item => (
    <div key={item.id} className="news_item">
      <h3>{item.title}</h3>
      <div>{item.feed}</div>
    </div>
  ));

  return (
    <div className="container">
      {newsHandler}
    </div>
  );
}