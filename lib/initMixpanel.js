import mixpanel from "mixpanel-browser";

const initMixpanel = () => {
  if (process.env.NODE_ENV === "production") {
    mixpanel.init("e611c99ae30e5f755a18197d8262a0fb", {
      debug: process.env.NODE_ENV === "production" ? false : true,
      ignore_dnt: true,
      persistence: "localStorage",
    });
  }
};

export default initMixpanel;