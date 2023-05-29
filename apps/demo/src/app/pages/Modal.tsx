import { Button, Modal } from "@valerya/components";
import React from "react";

/**
 *
 *
 */
export default function Page({ ...props }) {
  const [showModal, setShowModal] = React.useState(false);

//TODO voir pour autoimplementation position
  return (
    <div>
      <Button variant="default" block mx="auto" my="5" shadow onClick={() => setShowModal(true)} >Open Modal</Button>

      <Modal show={showModal}  onClose={() => setShowModal(false)} closeOnEsc={false} size="md" >
        <Modal.Header dflex alignItems="center" showDivider>
          <span textSize="lg" fontWeight="600">Basic Modal</span>
        </Modal.Header>
        <Modal.Body >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled..

          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled..

          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled..

          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled..

          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled..

          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled..

          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled..

          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled..

          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled..

          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled..


          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled..

          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled..
        </Modal.Body>

        <Modal.Footer dflex placeContent="end" alignItems="center" showDivider>
          <Button variant="borderless" scheme="neutral" me="3" onClick={() => setShowModal(false)}>Close</Button>
          <Button variant="borderless" onClick={() => console.log("save")}>Save</Button>
        </Modal.Footer>
      </Modal>


    </div>
  );
}
