import React from "react";
import { Accordion, Badge, Button, Card, Container } from "react-bootstrap";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { notes } from "../../data/notes";
function MyNotes() {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  return (
    <Layout title={`Elevate Your Productivity Hrushi`}>
      {console.log(notes)}
      <Link to="/createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create new Note
        </Button>
      </Link>
      {notes &&
        notes.map((note) => (
          <Accordion>
            <Card style={{ margin: 10 }} key={note._id}>
              <Card.Header style={{ display: "flex" }}>
                <span
                  // onClick={() => ModelShow(note)}
                  style={{
                    color: "black",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                  }}
                >
                  <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">
                    {note.title}
                  </Accordion.Toggle>
                </span>

                <div>
                  <Button href={`/note/${note._id}`}>Edit</Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => deleteHandler(note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <h4>
                    <Badge variant="success">Category - {note.category}</Badge>
                  </h4>
                  <blockquote className="blockquote mb-0">
                    <ReactMarkdown>{note.content}</ReactMarkdown>
                    <footer className="blockquote-footer">
                      Created on{" "}
                      {/* <cite title="Source Title">
                        {note.createdAt.substring(0, 10)}
                      </cite> */}
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ))}
    </Layout>
  );
}

export default MyNotes;
