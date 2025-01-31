import Form from 'react-bootstrap/Form';

function QuestionForm() {
  const formQuestions = ['хочу спробувати',
                          'хочу все-таки індивідульно',
                          'цікаво, але не можу наважитися',
                          '24го не виходить',
                          'не зараз',
                          'Інше'];

  const radios = formQuestions.map((text, i) => (
    <div key={++i} className="mb-3">
      <Form.Check
        type='radio'
        name='question'
        id={++i}
        label={text}
      />
    </div>
  ))

  return (
    <Form>
      <div className='mb-5'>
        {radios}
      </div>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  );
}

export default QuestionForm;