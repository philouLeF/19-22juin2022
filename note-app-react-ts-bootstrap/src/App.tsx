import React, { useState } from 'react';
import './App.css';
import { Note } from './models/note.model';
import Header from './Components/Header';
import { Container, Row, Col } from 'react-bootstrap';
import NotesList from './Components/NotesList';
import CreateNotes from './Components/CreateNotes';

function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date).toString(),
    title: "Meetings",
    text: "Schedule meetin with UI/UX Team",
    color: "#dfdfdf",
    date: (new Date).toString()
  }]);

  return (
    <>
      <Header />
      <Container className='mt-5'>
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
      <Container className='mt-5'>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
