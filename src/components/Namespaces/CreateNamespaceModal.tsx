import * as React from 'react';
import {
  Modal,
  ModalVariant,
  Button,
  Form,
  FormGroup,
  Text,
  TextInput,
  TextVariants,
  Slider,
} from '@patternfly/react-core';
import './css/Namespaces.scss';

export const CreateNamespaceModal = (
  props: CreateNamespaceModalProps,
): JSX.Element => {
  const { isModalOpen, handleModalToggle } = props;

  const [namespaceName, setNamespaceName] = React.useState('');
  const [namespaceEmail, setNamespaceEmail] = React.useState('');
  const [repoCount, setRepoCount] = React.useState(250);

  const reposWithCost = [
    { value: 0, label: '0' },
    { value: 30, label: '10' },
    { value: 60, label: '20' },
    { value: 125, label: '50' },
    { value: 250, label: '125' },
    { value: 450, label: '250' },
    { value: 850, label: '500' },
    { value: 1600, label: '1000' },
    { value: 2100, label: '2000' },
  ];

  const nameInputRef = React.useRef();

  const handleNameInputChange = (value) => {
    setNamespaceName(value);
  };

  const handleEmailInputChange = (value) => {
    setNamespaceEmail(value);
  };

  const handleRepoCountChange = (value) => {
    setRepoCount(value);
  };

  const createNamespaceHandler = () => {
    handleModalToggle(); // check if this is needed
    // await consoleFetch(`${SECRET_SERVICE_URL}/api/v1/namespaces/${namespace}/secrets`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(getNewPartialSecret('destination', namespace)),
    // });
  };

  // const openNamespaceModal = () => {

  // }

  return (
    <Modal
      title="Create Namespace"
      variant={ModalVariant.medium}
      isOpen={isModalOpen}
      onClose={handleModalToggle}
      actions={[
        <Button
          key="confirm"
          variant="primary"
          onClick={createNamespaceHandler}
          form="modal-with-form-form"
        >
          Create Organization
        </Button>,
      ]}
    >
      <Form id="modal-with-form-form" isWidthLimited>
        <FormGroup
          isInline
          label="Namespace Name"
          isRequired
          fieldId="modal-with-form-form-name"
          helperText="This will also be the namespace for your repositories. Must be alphanumeric, all lowercase, at least 2 characters long and at most 255 characters long"
          // className='text-input-width'
        >
          <TextInput
            isRequired
            type="text"
            id="modal-with-form-form-name"
            value={namespaceName}
            onChange={handleNameInputChange}
            ref={nameInputRef}
          />
        </FormGroup>
        <FormGroup
          label="Namespace Email"
          isRequired
          fieldId="modal-with-form-form-email"
          helperText="This address must be different from your account's email"
          // className='text-input-width'
        >
          <TextInput
            isRequired
            type="email"
            id="modal-with-form-form-name"
            name="modal-with-form-form-name"
            value={namespaceEmail}
            onChange={handleEmailInputChange}
            ref={nameInputRef}
          />
        </FormGroup>
        <br/>

        {/* <Text component={TextVariants.h3}> Choose your organization's plan: ${repoCount}</Text>
        <Text component={TextVariants.small}> Number of private repositories </Text> */}
      </Form>
      <FormGroup
          label={`Choose your organization's plan: $${repoCount}`}
          isRequired
          fieldId="modal-with-form-form-email"
        >
          <Text component={TextVariants.small}> Number of private repositories </Text>
          <Slider
            value={repoCount}
            showTicks
            customSteps={reposWithCost}
            onChange={handleRepoCountChange}
          />
        </FormGroup>
    </Modal>
  );
};

type CreateNamespaceModalProps = {
  isModalOpen: boolean;
  handleModalToggle?: () => void;
};
