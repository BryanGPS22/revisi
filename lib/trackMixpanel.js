import mixpanel from "mixpanel-browser";

const trackMixpanel = (eventName, data) => {
  if (process.env.NODE_ENV === "production") {
    mixpanel.track(eventName, data);
  }
};

export default trackMixpanel;
