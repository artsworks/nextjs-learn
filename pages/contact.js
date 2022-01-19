import { useState } from 'react';
import {
  Button,
  Form,
  Icon,
  Image,
  Modal,
  Step,
  Segment,
} from 'semantic-ui-react';

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [steps, setSteps] = useState(1);
  const [formState, setFormState] = useState({
    firstname: '',
    lastname: '',
    title: '',
    color: '',
  });

  const handleChange = (e, { name, value }) =>
    setFormState({ ...formState, [name]: value });

  const { firstname, lastname, title, color } = formState;
  return (
    <>
      <h1 className="title">Contact</h1>

      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => {
          setOpen(true);
          setSteps(1);
        }}
        open={open}
        trigger={<Button>Popup Registration</Button>}
      >
        <Modal.Header>The Game</Modal.Header>
        <Modal.Content image>
          <Image src="https://www.placecage.com/c/150/180" />
          <Modal.Description>
            <Step.Group attached="top">
              <Step active={steps === 1}>
                <Icon name="truck" />
                <Step.Content>
                  <Step.Title>First step</Step.Title>
                  <Step.Description>Name and Title</Step.Description>
                </Step.Content>
              </Step>

              <Step active={steps === 2}>
                <Icon name="payment" />
                <Step.Content>
                  <Step.Title>Second step</Step.Title>
                  <Step.Description>Some random stuff</Step.Description>
                </Step.Content>
              </Step>

              <Step active={steps === 3}>
                <Icon name="info" />
                <Step.Content>
                  <Step.Title>Finally</Step.Title>
                  <Step.Description>That's it</Step.Description>
                </Step.Content>
              </Step>
            </Step.Group>
            <Segment attached>
              {steps === 1 ? (
                <Form>
                  <Form.Field>
                    <label>First Name</label>
                    <Form.Input
                      placeholder="First Name"
                      name="firstname"
                      value={firstname}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Last Name</label>
                    <Form.Input
                      placeholder="Last Name"
                      name="lastname"
                      value={lastname}
                      onChange={handleChange}
                    />
                  </Form.Field>
                </Form>
              ) : null}

              {steps === 2 ? (
                <Form>
                  <Form.Field>
                    <label>Title</label>
                    <Form.Input
                      placeholder="Title"
                      name="title"
                      value={title}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Color</label>
                    <Form.Input
                      placeholder="Color"
                      name="color"
                      value={color}
                      onChange={handleChange}
                    />
                  </Form.Field>
                </Form>
              ) : null}

              {steps === 3 ? <code>{JSON.stringify(formState,null, 2)}</code> : null}
            </Segment>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            disabled={steps === 1}
            content="Back"
            labelPosition="left"
            icon="arrow left"
            onClick={() => setSteps(steps - 1)}
            positive
          />{' '}
          <Button
            content={steps === 3 ? 'Finish' : 'Next'}
            labelPosition="right"
            icon={steps === 3 ? 'check' : 'arrow right'}
            onClick={() => (steps < 3 ? setSteps(steps + 1) : setOpen(false))}
            positive
          />
        </Modal.Actions>
      </Modal>
    </>
  );
}
