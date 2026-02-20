import MyModal from "./MyModal";
import Button from "react-bootstrap/Button";

export default function Navbar({ handleShow, setEditingBook }) {
  function handleAddClick() {
    setEditingBook(null);
    handleShow();
  }
  return (
    <nav className="navbar navbar-light bg-light  mb-5">
      <div className="container">
        <a className="navbar-brand" style={{ color: "#444" }}>
          Books
        </a>
        <Button
          onClick={handleAddClick}
          variant="primary"
          style={{
            border: "1px solid #777",
            borderRadius: "4px",
            padding: "10px 15px ",
            background: "#444",
            fontWeight: "400",
          }}
        >
          Add Book
        </Button>
        <MyModal />
      </div>
    </nav>
  );
}
