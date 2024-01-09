import { useState, useEffect } from 'react';
import { useFormikContext } from 'formik';
import {
  RequiredText,
  ErrorCalcFieldText,
  CalcBox,
  Text,
  BoxRequiredLitresPerDay,
} from '../DailyNormalModal.styled';

const CalcFieldDailyNormal = props => {
  const {
    values: { genderRadioGroup, weight, activeTraningHours },
    touched,
    setFieldValue,
  } = useFormikContext();

  // const [field, meta] = useField(props);
  const [volume, setVolume] = useState(0);

  useEffect(() => {
    let koefWeight = 0.03;
    let koefActiveTime = 0.4;

    if (
      weight.trim() !== '' &&
      genderRadioGroup.trim() !== '' &&
      (genderRadioGroup === 'girl' || genderRadioGroup === 'man') //&&
      // touched.weight
    ) {
      if (genderRadioGroup === 'man') {
        koefWeight = 0.04;
        koefActiveTime = 0.6;
      }

      const vol = koefWeight * weight + koefActiveTime * activeTraningHours;

      setVolume(vol);
      setFieldValue(props.name, `${vol}`);
    }
  }, [
    weight,
    activeTraningHours,
    genderRadioGroup,
    touched.weight,
    touched.activeTraningHours,
    touched.genderRadioGroup,
    setFieldValue,
    props.name,
  ]);

  const calcColor =
    (!genderRadioGroup && weight) || (genderRadioGroup && !weight)
      ? 'red'
      : 'blue';

  return (
    <BoxRequiredLitresPerDay color={calcColor}>
      <Text>The required amount of water in liters per day:</Text>

      <CalcBox>
        <RequiredText color={calcColor}>
          {volume.toFixed(2)}&nbsp;L
        </RequiredText>
        {!genderRadioGroup && weight && (
          <ErrorCalcFieldText>Please specify your gender</ErrorCalcFieldText>
        )}
        {genderRadioGroup && !weight && (
          <ErrorCalcFieldText>Please enter your weight</ErrorCalcFieldText>
        )}
      </CalcBox>
    </BoxRequiredLitresPerDay>
  );
};

export default CalcFieldDailyNormal;
