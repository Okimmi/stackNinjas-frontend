import styled from "styled-components";
import Notiflix from "notiflix";
import { ReactComponent as GlassSvg } from "../../icons/glass_of_water.svg";

export const WaterEditContainer = styled.div`
  width: 254px;
  display: flex;
  align-items: center;
  padding: 8px 24px;
  border-radius: 10px;
  gap: 12px;
  background-color: #ecf2ff;
  margin-bottom: 24px;
`;

export const SvgGlass = styled(GlassSvg)`
  width: 36px;
  height: 36px;
`;

export const EnteredText = styled.p`
  color: #407bff;
  font-size: 18px;
  line-height: 1.3;
  margin-right: 4px;
`;

export const TimeValue = styled.p`
  font-size: 12px;
  line-height: 2;
`;

Notiflix.Notify.init({
  timeout: 2000,
  fontFamily: "Roboto",
  success: {
    background: "#407bff",
    timeout: 8000,
    textColor: "#d7e3ff",
    childClassName: "notiflix-notify-success",
    notiflixIconColor: "rgba(0,0,0,0.2)",
    fontAwesomeClassName: "fas fa-exclamation-circle",
    fontAwesomeIconColor: "rgba(0,0,0,0.4)",
    backOverlayColor: "rgba(238,191,49,0.2)",
  },
});
