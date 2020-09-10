import colors from "../config/colors";

const mockData = {
  accountMenuItems: [
    {
      title: "My Listings",
      icon: {
        name: "format-list-bulleted",
        color: colors.white,
        backgroundColor: colors.danger,
      },
    },
    {
      title: "My Messages",
      icon: {
        name: "email",
        color: colors.white,
        backgroundColor: colors.patientGreen,
      },
    },
  ],
  categories: [
    { label: "Indica", value: 1, icon: null },
    { label: "Sativa", value: 2, icon: null },
    { label: "Drink", value: 3, icon: null },
    { label: "Oil", value: 4, icon: null },
    { label: "Preroll", value: 5, icon: null },
    { label: "Other", value: 6, icon: null },
  ],
  messages: [
    {
      id: 1,
      title: "T1",
      description: "D1",
      image: "https://picsum.photos/1600/900",
    },
    {
      id: 2,
      title: "T2",
      description: "D2",
      image: "https://picsum.photos/1400/800",
    },
    {
      id: 3,
      title: "T3",
      description: "D3",
      image: "https://picsum.photos/1600/900",
    },
    {
      id: 4,
      title: "T4",
      description: "D4",
      image: "https://picsum.photos/1400/800",
    },
  ],
  socialLinks: [
    {
      name: "Linkedin",
      id: 1,
      icon: "linkedin",
      url: "https://linkedin.com",
      color: "",
    },
    {
      name: "Facebook",
      id: 2,
      icon: "facebook",
      url: "https://facebook.com",
      color: "",
    },
    {
      name: "Instagram",
      id: 3,
      icon: "instagram",
      url: "https://instagram.com",
      color: "",
    },
    {
      name: "Twitter",
      id: 4,
      icon: "twitter",
      url: "https://twitter.com",
      color: "",
    },
  ],
};

export default mockData;
