import  { useState, useEffect } from "react";
import { useFormikContext } from "formik";
import  { RequiredText } from "../DailyNormalModal.styled";

const CalcFieldDailyNormal = (props) => {
  const {
    values: { gender, weight, activeTraningHours },
    touched,
    setFieldValue, } = useFormikContext();

  // const [field, meta] = useField(props);
  const [volume, setVolume] = useState(0);

  useEffect(() => {

    let koefWeight = 0.03;
    let koefActiveTime = 0.4;

    if (
      weight.trim() !== '' &&
      gender.trim() !== '' &&
      (gender === 'girl' || gender === 'man') &&
      touched.weight &&
      touched.gender
    ) {
      if (gender === 'man') {
        koefWeight = 0.04;
        koefActiveTime = 0.6;
      }

      const vol = koefWeight * weight + koefActiveTime * activeTraningHours;

      setVolume(vol)
      setFieldValue(props.name, `${vol}`);
    }
  }, [
    weight, 
    activeTraningHours, 
    gender, 
    touched.weight, 
    touched.activeTraningHours, 
    touched.gender, 
    setFieldValue, 
    props.name
  ]);

  return (
    <>
      <RequiredText>{ volume.toFixed(2) } L</RequiredText>
      {/* <div {...props} {...field}></div> */}
    </>
  );
};

export default CalcFieldDailyNormal;