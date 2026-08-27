"use client";

import PageHero from "@/components/ui/PageHero";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { contactInfos, serviceOptions, whatsappUrl } from "@/lib/contactData";
import { useState } from "react";
import { p } from "framer-motion/client";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    service: "Je souhaite être conseillé",
    message: "",
    consent: false,
  });
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const phoneDigits = formData.phone.replace(/\D/g, "");

    if (phoneDigits.length < 9) {
      setError("Veuillez entrer un numéro de téléphone valide.");
      setIsSuccess(false);
      return;
    }

    setError("");
    setIsSuccess(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    console.log(data);

    if (response.ok) {
      setIsSuccess(true);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="contact"
        title="Parlons de"
        accent="votre véhicule."
        text="Décrivez-moi l’état de votre véhicule et vos besoins. Je vous conseillerai la prestation la plus adaptée et vous communiquerai une estimation personnalisée."
      />
      <section className="section-pad">
        <div className="container-site grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <aside>
            <p className="eyebrow">Contact direct</p>
            <h2 className="display text-4xl">
              Une question ?<br />
              Je vous réponds.
            </h2>
            <div className="mt-10 space-y-6">
              {contactInfos.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-mist">
                    <Icon className="h-5 w-5 text-aqua-dark" />
                  </span>

                  <div>
                    <b className="text-xs uppercase tracking-widest">{label}</b>

                    <p className="mt-1 text-sm text-black/50">{value}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex w-full items-center justify-center rounded-2xl bg-[#25D366] px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-1"
            >
              Discuter sur WhatsApp →
            </a>
          </aside>
          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-soft md:p-10"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <label className="text-sm font-bold">
                Nom complet
                <input
                  name="name"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  required
                  value={formData.name}
                  placeholder="Votre nom"
                  className="mt-2 w-full rounded-xl border border-black/10 bg-[#f8fafa] px-4 py-3.5 font-normal outline-none transition focus:border-aqua"
                />
              </label>
              <label className="text-sm font-bold">
                Téléphone
                <input
                  name="phone"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                    })
                  }
                  type="tel"
                  value={formData.phone}
                  required
                  placeholder="+32 ..."
                  className="mt-2 w-full rounded-xl border border-black/10 bg-[#f8fafa] px-4 py-3.5 font-normal outline-none focus:border-aqua"
                />
                {error && (
                  <p className="mt-2 text-xs font-normal text-red-500">
                    {error}
                  </p>
                )}
              </label>
              <label className="text-sm font-bold">
                E-mail
                <input
                  name="email"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  required
                  type="email"
                  value={formData.email}
                  placeholder="vous@email.be"
                  className="mt-2 w-full rounded-xl border border-black/10 bg-[#f8fafa] px-4 py-3.5 font-normal outline-none focus:border-aqua"
                />
              </label>
              <label className="text-sm font-bold">
                Véhicule
                <input
                  name="vehicle"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      vehicle: e.target.value,
                    })
                  }
                  required
                  placeholder="Marque, modèle, année"
                  value={formData.vehicle}
                  className="mt-2 w-full rounded-xl border border-black/10 bg-[#f8fafa] px-4 py-3.5 font-normal outline-none focus:border-aqua"
                />
              </label>
              <label className="text-sm font-bold md:col-span-2">
                Prestation souhaitée
                <select
                  name="service"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      service: e.target.value,
                    })
                  }
                  value={formData.service}
                  className="mt-2 w-full rounded-xl border border-black/10 bg-[#f8fafa] px-4 py-3.5 font-normal outline-none focus:border-aqua"
                >
                  {serviceOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label className="text-sm font-bold md:col-span-2">
                État du véhicule et attentes
                <textarea
                  name="message"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  rows={5}
                  required
                  value={formData.message}
                  placeholder="Décrivez brièvement l’état de l’habitacle et vos besoins (taches, poils d’animaux, sellerie…)."
                  className="mt-2 w-full resize-none rounded-xl border border-black/10 bg-[#f8fafa] px-4 py-3.5 font-normal outline-none focus:border-aqua"
                />
              </label>
            </div>
            <label className="mt-5 flex gap-3 text-xs leading-5 text-black/45">
              <input
                name="consent"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    consent: e.target.checked,
                  })
                }
                checked={formData.consent}
                type="checkbox"
                required
                className="accent-aqua"
              />{" "}
              J’accepte que mes informations soient utilisées pour répondre à ma
              demande.
            </label>
            <button className="btn-primary mt-7 w-full" type="submit">
              Envoyer ma demande →
            </button>
            {isSuccess && (
              <p className="mt-3 text-center text-sm font-normal text-green-500">
                Votre demande a bien été envoyée. Je vous répondrai dès que
                possible.
              </p>
            )}
          </form>
        </div>
      </section>
      <section className="bg-ink py-16 text-white">
        <div className="container-site grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow">Zone d’intervention</p>
            <h2 className="display text-4xl">Bruxelles & 30 km autour.</h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-white/50">
              Notre atelier se trouve au centre de Bruxelles. Le déplacement à
              domicile est possible à Bruxelles, Waterloo, Zaventem, Vilvorde et
              environs.
            </p>
          </div>
          <div className="hex-bg grid min-h-64 place-items-center rounded-3xl border border-white/10 bg-white/5">
            <div className="relative grid h-40 w-40 place-items-center rounded-full border border-aqua/30">
              <div className="grid h-24 w-24 place-items-center rounded-full bg-aqua/15">
                <MapPinIcon className="h-10 text-aqua" />
              </div>
              <span className="absolute -right-4 top-3 text-xs text-white/40">
                30 km
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
