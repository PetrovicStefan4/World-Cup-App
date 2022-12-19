const chooseHeroImage = (venue) => {
  switch (venue) {
    case "Lusail Stadium":
      return "Lusail-Stadium.jpg";
      break;
    case "Al Janoub Stadium":
      return "Al-Janoub-Stadium.jpg";
      break;
    case "Ahmad Bin Ali Stadium":
      return "Ahmad-Bin-Ali-Stadium.jpg";
      break;
    case "Al Bayt Stadium":
      return "Al-Bayt-Stadium.jpg";
      break;
    case "Khalifa International Stadium":
      return "Khalifa-International-Stadium.jpg";
      break;
    case "Al Thumama Stadium":
      return "Al-Thumama-Stadium.jpg";
      break;
    case "Education City Stadium":
      return "Education-City-Stadium.jpg";
      break;
    case "Stadium 974":
      return "Stadium-974.webp";
      break;
    default:
      return "Lusail-Stadium.jpg";
  }
};

export default chooseHeroImage;
