import "./App.css";
import Navbar from "./component/Navbar";
import MyModal from "./component/MyModal.jsx";
import Books from "./pages/Books";
import Footer from "./component/Footer.jsx";
import { loadinBooks } from "./services/openLabrery.js";
import { useState, useEffect } from "react";
function App() {
  // const [books, setBooks] = useState([]);
  const [books, setBooks] = useState(() => {
    try {
      const savedBooks = localStorage.getItem("books");
      return savedBooks ? JSON.parse(savedBooks) : [];
    } catch {
      return [];
    }
  });

  const [query, setQuery] = useState("react");
  const [show, setShow] = useState(false);
  const [editingBook, setEditingBook] = useState(null);

  const initialFormState = {
    key: "",
    title: "",
    author_name: [],
    cover_i: null,
    first_publish_year: null,
  };
  const [formData, setFormData] = useState(initialFormState);
  const handleClose = () => {
    setShow(false);
    setEditingBook(null);
    setFormData(initialFormState);
  };
  const handleShow = () => setShow(true);

  // useEffect(() => {
  //   loadinBooks(query)
  //     .then(function (response) {
  //       setBooks(response.data.docs);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }) , [query];

  function handleSearch() {
    loadinBooks(query)
      .then(function (response) {
        setBooks(response.data.docs);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  //    useEffect(() => {

  //   const savedBooks = JSON.parse(localStorage.getItem("books")) ?? [];
  //   console.log(savedBooks);
  //   // setBooks(savedBooks);

  // }),[];

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  function addBook(newBook) {
    setBooks([...books, newBook]);
  }
  function deleteBook(key) {
    setBooks((prev) => prev.filter((book) => book.key !== key));
  }
  function hundleEdit(book) {
    setEditingBook(book);
    setFormData(book);
    handleShow();
  }
  function updateBook(key, formData) {
    setBooks((prev) =>
      prev.map((book) => (book.key === key ? { ...book, ...formData } : book)),
    );
  }

  return (
    <>
      <Navbar handleShow={handleShow} setEditingBook={setEditingBook} />
      <MyModal
        formData={formData}
        setFormData={setFormData}
        editingBook={editingBook}
        addBook={addBook}
        handleClose={handleClose}
        show={show}
        updateBook={updateBook}
      />
      <Books
        books={books}
        query={query}
        setQuery={setQuery}
        hundleEdit={hundleEdit}
        handleSearch={handleSearch}
        deleteBook={deleteBook}
      />
      <Footer />
    </>
  );
}

export default App;
