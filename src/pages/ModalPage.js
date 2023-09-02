import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  const getParagraph = (i) => (<p key={i}>Learning a little each day adds up. Research shows that students who make learning a habit are more likely to reach their goals. Set time aside to learn and get reminders using your learning scheduler.</p>);
  const paragraphs = [];
  for(let i=0;i<20;i++) paragraphs.push(getParagraph(i));
  const text = ( <div>{ paragraphs.map((t) => { return t; }) }</div> );

  const moretext = (
    <text/>
  )
  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
         {text}
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
