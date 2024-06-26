import React, { useState, useEffect } from "react";
import gsap from "gsap";
import logo from "./../assets/img/logo.webp";

const slides = [
  {
    id: 1,
    titre: "07",
    nom: "Beez2Be",
    content:
      "Dans le cadre d'un projet de 2ème année en groupe, nous avons développé un site web fictif dédié à un food truck. Le site a été conçu en utilisant les langages HTML, CSS, PHP, et Javascript. Mon rôle spécifique a été la création de la page de commande. Cette section du site offre la possibilité de réserver un repas pour une date et une heure spécifiques. Pour plus d'informations, vous pouvez consulter le code sur mon GitHub.",
    img: logo,
  },
  {
    id: 2,
    titre: "02",
    nom: "Angouloriente",
    content:
      "Cette application vous fait vivre une course d'orientation intéractive. Pour terminer la course, vous devez passer par 8 points définis dans la ville d'Angoulême. Ces points sont visible sur la carte ainsi que votre position en temp réel. Attention ! Il est important de respecter l'ordre des points en commencant par le point n°1 et en finissant par le points n°8. A chaque points, vous trouverez un qr code que vous pourrez scanner en clique sur le ping correspondant au points sur la carte. Une fois le qr scanné, une lettre vous sera donnée. Récuperez les 8 lettres pour former un mot. A noté que la dernière balise n'est pas une lettre mais un nombre qui représente la clé d'un chiffrement de César afin de ne pas pouvoir deviner le mot avant d'avoir fais toutes les balises (plus d'infos sur le chiffrement de César: https://e-nsi.forge.aeif.fr/pratique/N1/421-code_cesar/sujet/). Une fois le mot final trouvé et déchiffré, il vous suffit de l'écrire dans le champ prévu a cet effet pour terminer la course et arréter le chrono !",
    img: logo,
  },
  {
    id: 3,
    titre: "03",
    nom: "Foodtruck",
    content:
      "Cette application vous fait vivre une course d'orientation intéractive. Pour terminer la course, vous devez passer par 8 points définis dans la ville d'Angoulême. Ces points sont visible sur la carte ainsi que votre position en temp réel. Attention ! Il est important de respecter l'ordre des points en commencant par le point n°1 et en finissant par le points n°8. A chaque points, vous trouverez un qr code que vous pourrez scanner en clique sur le ping correspondant au points sur la carte.",
    img: logo,
  },
];

const Number = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const carouselItems = document.querySelectorAll(".gay-item");
    carouselItems.forEach((item, index) => {
      const secondSpan = item.querySelector("span:nth-child(2)");
      if (index === currentIndex) {
        gsap.fromTo(
          secondSpan,
          { rotationX: 90 },
          { rotationX: 0, duration: 0.5, ease: "power1.inOut" }
        );
      } else {
        gsap.set(secondSpan, { rotationX: 0 });
      }
    });
  }, [currentIndex]);

  return (
    <div className="gay-container">
      <button onClick={handlePrev}>&lt;</button>
      <div className="gay">
        <div
          className="gay-inner"
          style={{ transform: `translateX(${-currentIndex * 200}px)` }}
        >
          {slides.map((slide, index) => (
            <h1 key={slide.id} className="gay-item">
              <span>0</span>
              <span>{slide.titre[1]}</span>
            </h1>
          ))}
        </div>
      </div>
      <button onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default Number;
