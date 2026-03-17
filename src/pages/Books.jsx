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
  // const [searchterm, setSearchterm] = useState("");
  // const [filteredBook, setFilteredBook] = useState(books);
  // const Search = () => {
  //   const filtered = books.filter((book) =>
  //     book.title.toLowerCase().includes(searchterm.toLowerCase()),
  //   );
  //   setFilteredBook(filtered);
  // };

  const booklist = books.map((book) => {
    return (
      <div className="book-wrapper  col-lg-3 mb-5 " key={book.key}>
        <Book book={book} />
        <div className=" content d-flex justify-content-between px-0">
          <button
            class="btn-delete"
            onClick={() => {
              deleteBook(book.key);
            }}
          >
            DELETE
          </button>
          <button
            class="btn-edit"
            onClick={() => {
              hundleEdit(book);
            }}
          >
            EDIT
          </button>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="search container mb-5">
        <input
          style={{ background: "#161511" }}
          className="mx-2"
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button onClick={handleSearch} style={{ background: "#161511" }}>
          Search
        </button>
      </div>
      {/* api search  */}
      {/* search from local stat  */}
      {/* <div className="search container mb-5  ">
        <input
          className="mx-2"
          type="text"
          value={searchterm}
          onChange={(e) => {
            setSearchterm(e.target.value);
          }}
        />
        <button onClick={Search}> Search local stat </button>
      </div>
      {filteredBook.map((book) => (
        <Book book={book} />
      ))} */}
      {/* search from local stat  */}
      <div className="container books">
        <div className="row">{booklist}</div>
      </div>
    </>
  );
}
