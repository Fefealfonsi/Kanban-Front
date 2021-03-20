import React from 'react';
import {useForm} from "../../hooks/useForm"
import {updateCard} from "../../services/cards"
import { CardContainer, Title, Content, Button, FormContainer } from './styled';

function UpdateCard(props) {
  

  const { form, onChange, resetForm } = useForm({
    subtitle: props.title,
    content: props.text,
  });

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    onChange(value, name);
  };

  const handleSubmission = (event) => {
    event.preventDefault();

    updateCard(form, resetForm, props.id, props.getData, props.save, props.setSave);
  };

  return (
    <CardContainer>
      <FormContainer onSubmit={handleSubmission}>
        <Title
          type="text"
          value={form.subtitle}
          name="subtitle"
          placeholder="Título"
          onChange={handleInputChange}
        />
        <Content
         
          value={form.content}
          name="content"
          placeholder="Conteúdo"
          onChange={handleInputChange}
        />

        <Button >Alterar </Button>
      </FormContainer>
    </CardContainer>
  );
}
export default UpdateCard;