<Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle
        onClick={key => console.log(`I've been clicked by : ${key}`)}
        eventKey="0"
      >
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle
        onClick={key => console.log(`I've been clicked by : ${key}`)}
        eventKey="1"
      >
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>;
