import React, { useState } from 'react';
import {useField } from 'formik';

// style
import { 
  FieldBox, 
  FieldLabel, 
  FieldPosition, 
  FieldInput, 
  FieldHelpText, 
  FieldFeedback} from "./TextInputLiveFeedback.styled"


export const TextInputLiveFeedback = ({ label, helpText, ...props }) => {
  const [field, meta] = useField(props);

  // Show inline feedback if EITHER
  // - the input is focused AND value is longer than 2 characters
  // - or, the has been visited (touched === true)
  const [didFocus, setDidFocus] = useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field.value?.trim()?.length > 2) || meta.touched;

  return (
      <FieldBox
        valid = {showFeedback ? (meta.error ? 'error' : 'success') : 'default'}
      >
        
        <FieldLabel htmlFor={props.id}>
          { label } 
          
          <FieldPosition >
            
            <FieldInput
              valid = {showFeedback ? (meta.error ? 'invalid' : 'valid') : 'default'}
              type="text"
              name="name"
              // pattern="^[a-zA-Zа-яА-ЯіІїЇєЄ]+(([' \-][a-zA-Zа-яА-ЯіІїЇєЄ])?[a-zA-Zа-яА-ЯіІїЇєЄ]*)*$"
              // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              {...props}
              {...field}
              aria-describedby={`${props.id}-feedback ${props.id}-help`}
              onFocus={handleFocus}
            />

          </FieldPosition>

        </FieldLabel>
        
        { showFeedback && (
          <FieldFeedback 
            id={`${props.id}-feedback`}
            aria-live="polite"
          >
            {meta.error ?? '✓'}
          </FieldFeedback>
        )}

        <FieldHelpText
          id={`${props.id}-help`}
          tabIndex="-1"
        >
          {helpText}
        </FieldHelpText>

      </FieldBox>
  );
};
