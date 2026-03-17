import MyModal from "./MyModal";
import Button from "react-bootstrap/Button";

export default function Navbar({ handleShow, setEditingBook }) {
  function handleAddClick() {
    setEditingBook(null);
    handleShow();
  }
  return (
    <nav
      className="navbar navbar-light  mb-5"
      style={{ borderBottom: "1px solid #c9a96e " }}
    >
      <div className="container">
        <a className="navbar-brand" style={{ color: "#e8e4dc" }}>
          Book<span style={{ color: "#c9a96e" }}>shelf</span>
        </a>
        <Button
          onClick={handleAddClick}
          variant="primary"
          style={{
            border: "1px solid #777",
            borderRadius: "4px",
            padding: "10px 15px ",
            background: "#0f0e0c",
            fontWeight: "400",
          }}
        >
          + Add Book
        </Button>
        <MyModal />
      </div>
    </nav>
  );
}
