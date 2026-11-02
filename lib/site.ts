const nearbyCities = [
  "Liège",
  "Seraing",
  "Ans",
  "Flémalle",
  "Grâce-Hollogne",
];

export const siteInfo = {
  name: "Flow Detailing",
  url: "https://flowdetailing.be",
  phone: "+32 491 95 41 61",
  phoneHref: "tel:+32491954161",
  email: "contact@flowdetailing.be",
  emailHref: "mailto:contact@flowdetailing.be",
  locality: "Saint-Nicolas",
  postalCode: "4420",
  region: "Liège",
  country: "BE",
  location: "Saint-Nicolas (4420), près de Liège",
  servedCities: ["Saint-Nicolas", ...nearbyCities],
  nearbyCitiesLabel: new Intl.ListFormat("fr").format(nearbyCities),
};
