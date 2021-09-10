import createDataContext from "./createDataContext";
import deliveryApi from "../api/deliveryApi";

const locationReducer = (state, action) => {
  switch (action.type) {
    case "add_current_location":
      return { ...state, currentLocation: action.payload };
    case "start_recording":
      return { ...state, recording: true };
    case "stop_recording":
      return { ...state, recording: false };
    case "add_location":
      return { ...state, locations: [...state.locations, action.payload] };
    default:
      break;
  }
};

const startRecording = (dispatch) => () => {
  console.log("start_recording");
  dispatch({ type: "start_recording" });
};
const stopRecording = (dispatch) => () => {
  dispatch({ type: "stop_recording" });
};
const addLocation = (dispatch) => async (location, recording) => {
  dispatch({ type: "add_current_location", payload: location });

  console.log(location);
  try {
    await deliveryApi.post("/test_location", location.coords);
  } catch (err) {
    console.log(err);
  }

  if (recording) {
    dispatch({ type: "add_location", payload: location });
  }
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation },
  { recording: false, locations: [], currentLocation: null }
);
