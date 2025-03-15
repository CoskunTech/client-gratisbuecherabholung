import React from "react";
import "./WhatsappButton.css";
import Button from "@mui/material/Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsappButton = () => {
  const phoneNumber = "41767201353";

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <Button
      variant="contained"
      className="whatsapp-button"
      onClick={handleClick}>
      <WhatsAppIcon /> Schreiben Sie uns
    </Button>
  );
};

export default WhatsappButton;
