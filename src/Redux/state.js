export default {
  user: {
    username: "test-user-1",
    email: "test-user@example.com",
  },
  business: [
    {
      id: 1,
      name: "Minh's Cafe",
      description:
        "Pho, vermicelli bowls & some standard Chinese dishes are the draw at this simple but modern eatery",
      hours: "11AM–2:30PM 5–9PM",
      address: "12221 Riata Trace Pkwy #190, Austin, TX 78727",
      mapping:
        "https://maps.googleapis.com/maps/api/staticmap?center=30.428826343713236, -97.75040640192678&markers=markerStyles|30.428826343713236, -97.75040640192678&zoom=15&size=400x400&key=AIzaSyDdmFP5qJMaXuqdi1goq9VWpUlvFyf4VgI",
    },
    {
      id: 2,
      name: "Business 2",
      description: "Business Description",
      hours: "2-3",
      address: "456 NotHome",
      mapping: "notyet found",
    },
  ],
};
