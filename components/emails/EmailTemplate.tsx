import * as React from "react";

interface EmailTemplateProps {
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  service: string;
  message: string;
}

export function EmailTemplate({
  name,
  phone,
  email,
  vehicle,
  service,
  message,
}: EmailTemplateProps) {
  return (
    <div>
      <h1>Nouvelle demande de contact</h1>

      <p>
        <strong>Nom :</strong> {name}
      </p>

      <p>
        <strong>Téléphone :</strong> {phone}
      </p>

      <p>
        <strong>E-mail :</strong> {email}
      </p>

      <p>
        <strong>Véhicule :</strong> {vehicle}
      </p>

      <p>
        <strong>Prestation :</strong> {service}
      </p>

      <p>
        <strong>Message :</strong> {message}
      </p>
    </div>
  );
}
