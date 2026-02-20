// // import Books from "./component/Books";
// import { useState } from "react";
// import "./App.css";
// function App() {
  

// const initialBooks = [
//   { id: 1, title: "Clean Code", author: "Robert C. Martin" },
//   { id: 2, title: "The Pragmatic Programmer", author: "Andrew Hunt" },
//   { id: 3, title: "You Don't Know JS", author: "Kyle Simpson" },
// ];


//   const [books, setBooks] = useState(initialBooks);
//   const [search, setSearch] = useState("");

//   const filteredBooks = books.filter((book) =>
//     book.title.toLowerCase().includes(search.toLowerCase())
//   );

//   const deleteBook = (id) => {
//     setBooks(books.filter((book) => book.id !== id));
//   };
//   return (
//     <>
    


//     <div style={{ padding: "20px" }}>
//       {/* Header */}
//       <h1>📚 Book Library</h1>

//       {/* Search */}
//       <input
//         type="text"
//         placeholder="Search book..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{
//           padding: "8px",
//           width: "100%",
//           marginBottom: "20px",
//         }}
//       />

//       {/* Books List */}
//       {filteredBooks.length === 0 ? (
//         <p>No books found 😕</p>
//       ) : (
//         <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
//           {filteredBooks.map((book) => (
//             <div
//               key={book.id}
//               style={{
//                 border: "1px solid #ccc",
//                 padding: "15px",
//                 width: "200px",
//                 borderRadius: "8px",
//               }}
//             >
//               <h3>{book.title}</h3>
//               <p>{book.author}</p>

//               <button
//                 onClick={() => deleteBook(book.id)}
//                 style={{
//                   background: "crimson",
//                   color: "#fff",
//                   border: "none",
//                   padding: "6px 10px",
//                   cursor: "pointer",
//                 }}
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
  




//       {/* <Books /> */}
//     </>
//   );
// }

// export default App;
