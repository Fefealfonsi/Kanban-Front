import React from "react";
import { useForm } from "../../hooks/useForm";
import { createCards } from "../../services/cards";
import { useRequestData } from "../../hooks/useRequestData";
import { CardContainer, Title, Content, Button, FormContainer } from "./styled";

function CreateCard(props) {
  

  const { form, onChange, resetForm } = useForm({
    subtitle: "",
    content: "",
  });

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    onChange(value, name);
  };

  const handleSubmission = async(event) => {
    event.preventDefault();
    await createCards(form, resetForm, props.getData);
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

        <Button>Salvar </Button>
      </FormContainer>
    </CardContainer>
  );
}
export default CreateCard;
