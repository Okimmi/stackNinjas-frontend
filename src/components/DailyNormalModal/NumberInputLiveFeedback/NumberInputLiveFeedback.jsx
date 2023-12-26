import React, { useState } from 'react';
import {useField } from 'formik';
import { MdCheck } from "react-icons/md";
import { MdClose } from "react-icons/md";

// style
import { 
  FieldBox, 
  FieldLabel, 
  FieldPosition, 
  FieldInput, 
  FieldHelpText, 
  FieldFeedback,
  FieldTextAbove} from "./NumberInputLiveFeedback.styled"
import { theme } from 'components/GlobalStyle';


export const NumberInputLiveFeedback = ({ label, aboveText, helpText, ...props }) => {
  const [field, meta] = useField(props);

  // Show inline feedback if EITHER
  // - the input is focused AND value is longer than 2 characters
  // - or, the has been visited (touched === true)
  const [didFocus, setDidFocus] = useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field.value.length > 2) || meta.touched;

  return (
    <>
      {aboveText?.trim() && <FieldTextAbove>{aboveText}</FieldTextAbove>}

      <FieldBox
        $valid = {showFeedback ? (meta.error ? 'error' : 'success') : 'default'}
      >

        <FieldLabel htmlFor={props.id}>
          { label } 
          
          <FieldPosition >
            
            <FieldInput
              $valid = {showFeedback ? (meta.error ? 'invalid' : 'valid') : 'default'}
              type="number"
              name={props.name}
              color={theme.colors.primeryBlue}
              // pattern="^[a-zA-Zа-яА-ЯіІїЇєЄ]+(([' \-][a-zA-Zа-яА-ЯіІїЇєЄ])?[a-zA-Zа-яА-ЯіІїЇєЄ]*)*$"
              // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              
              {...props}
              {...field}
              aria-describedby={`${props.id}-feedback ${props.id}-help`}
              onFocus={handleFocus}
            />
            { showFeedback && (
              <FieldFeedback 
                id={`${props.id}-feedback`}
                aria-live="polite">
                  {meta.error && (<MdClose size={24} color={theme.colors.secondary3}/>)} {/* red */}
                  {!meta.error && (<MdCheck size={24} color="green"/>)}
              </FieldFeedback>)}
          </FieldPosition>
        </FieldLabel>

        {!meta.error && (
          <FieldHelpText
            id={`${props.id}-help`}
            tabIndex="-1"
          >
            {helpText}
          </FieldHelpText>
        )}
        {meta.error && (
          <FieldHelpText
            id={`${props.id}-feedback`}
            aria-live="polite"
            tabIndex="-1"
            color={theme.colors.secondary3} // red
          >
            {meta.error}
          </FieldHelpText>
        )}
      </FieldBox>
    </>
  );
};
