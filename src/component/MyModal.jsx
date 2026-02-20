import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import { useEffect } from "react";

export default function MyModal({
  formData,
  setFormData,
  editingBook,
  addBook,
  handleClose,
  show,
  updateBook,
}) {
  // useEffect(() => {
  //   if (editingBook) {
  //     setFormData(editingBook);
  //   }
  // }, [editingBook]);

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "author_name") {
      setFormData({
        ...formData,
        author_name: [value],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  }

  const handleSave = () => {
    if (editingBook) {
      updateBook(editingBook.key, formData);
    } else {
      const newBook = {
        key: Date.now(),
        ...formData,
      };
      addBook(newBook);
    }

    // Reset form
    setFormData({
      key: "",
      title: "",
      author_name: [],
      cover_i: null,
      first_publish_year: null,
    });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editingBook ? "Edit Book" : "Add Book"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>title</Form.Label>
              <Form.Control
                name="title"
                type="text"
                autoFocus
                onChange={handleChange}
                value={formData?.title || ""}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>author_name</Form.Label>
              <Form.Control
                name="author_name"
                type="text"
                autoFocus
                onChange={handleChange}
                value={formData?.author_name?.[0] || ""}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>image</Form.Label>
              <Form.Control
              placeholder="Exemple: 6874224,8231234,5258265 from open library "
                name="cover_i"
                value={formData?.cover_i || ""}
                autoFocus
                onChange={handleChange}
                
              />

            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>first_publish_year</Form.Label>
              <Form.Control
                name="first_publish_year"
                autoFocus
                onChange={handleChange}
                value={formData?.first_publish_year || ""}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{background:"#718096" , border:"#718096"}} onClick={handleClose}>
            Close
          </Button>
          <Button
            style={{background:"#38A169" , border:"#38A169"}}
            onClick={() => {
              handleSave();
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
