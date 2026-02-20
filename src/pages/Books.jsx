import Book from "../component/Book";
import "./books.css";

export default function Books({
  books,
  query,
  setQuery,
  handleSearch,
  deleteBook,
  hundleEdit,
}) {
  const booklist = books.map((book) => {
    return (
      <div className="col-lg-3 mb-5 " key={book.key}>
        <Book book={book} />
        <div className=" content d-flex justify-content-between px-0">
          <button
            style={{ background: "#E53E3E" ,color:"white"  }}
            onClick={() => {
              deleteBook(book.key);
            }}
          >
            Delet
          </button>
          <button
            
            style={{ background: "#3182CE" , color:"white" }}
            onClick={() => {
              hundleEdit(book);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="search container mb-5 text-center ">
        <input
          className="mx-2"
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="container books">
        <div className="row">{booklist}</div>
      </div>
    </>
  );
}
