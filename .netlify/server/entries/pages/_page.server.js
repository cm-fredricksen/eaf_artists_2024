import { a as artists } from "../../chunks/artists.js";
const load = () => {
  return {
    summaries: artists.map((artist) => ({
      businessName: artist["Business Name"],
      firstName: artist["First Name"],
      lastName: artist["Last Name"],
      medium: artist["Medium"],
      website: artist["Website"]
    }))
  };
};
export {
  load
};
