import React from "react";
import { Accordion, Badge, Button, Card, Container } from "react-bootstrap";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
// import { notes } from "../../data/notes";
function MyNotes() {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };
  const notes = [
    {
      _id: "1",
      title: "Learned about JS",
      content:
        "Read about Javascript callbacks , callback hell , inversion of control , promises , IIFE",
      category: "Javascript",
    },
    {
      _id: "2",
      title: "Learned some ReactJS",
      content: "Higher Order Components",
      category: "React",
    },
  ];
  return (
    <Layout title={`Elevate Your Productivity Hrushi`}>
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
