import React from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";
import notes from "../../data/notes";
import ReactMarkdown from "react-markdown";
function MyNotes() {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  return (
    <Layout title="Elevate your Productivity...">
      {console.log(notes)}
      <Link to="/createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create new Note
        </Button>
      </Link>
    </Layout>
  );
}

export default MyNotes;
