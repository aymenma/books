import nocover from "../assets/images/nocover.png";
import "./book.css";
export default function Book({ book }) {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : nocover;
  return (
    <>
      <div className="card">
        <div className="image">
          <img className="card-img-top " src={coverUrl} />
        </div>

        <div className="card-body d-flex flex-column text-start">
          <h5 className="card-title mt-4"> {book.title}</h5>
          <p className="card-text ">{book.author_name?.join(", ")}</p>
          <p className="gold card-text mt-auto   "> {book.first_publish_year} </p>
        </div>
      </div>
    </>
  );
}
