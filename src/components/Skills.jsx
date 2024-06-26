import React from "react";
import "./../scss/style.scss";

import reactLogo from "./../assets/img/react-icon.webp";
import jslogo from "./../assets/img/js.webp";
import mongodblogo from "./../assets/img/mongodb.webp";
import phplogo from "./../assets/img/php.webp";
import scsslogo from "./../assets/img/scss.webp";
import sqllogo from "./../assets/img/mysql.webp";
import wordpresslogo from "./../assets/img/wordpress.webp";
import gitlogo from "./../assets/img/git.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faSass,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

function Skills() {
  return (
    <>
      <div className="competences__react">
        <div className="competences__content">
          <div className="competences__img-container">
            <img
              src={reactLogo}
              alt="React Logo"
              className="competences__img"
              id="reactlogo"
            />
          </div>
          <div className="competences__container">
            <FontAwesomeIcon icon={faReact} className="competences__icon" />
            <h1 className="competences__titre-skills">React</h1>
            <p className="competences__p">
              J'ai pu faire quelques projets en React et j'aimerais apprendre
              davantage ce langage !
            </p>
          </div>
          <div className="design design-top-left"></div>
          <div className="design design-top-right"></div>
          <div className="design design-bottom-left"></div>
          <div className="design design-bottom-right"></div>
        </div>
      </div>
      <div className="competences__js">
        <div className="competences__content">
          <div className="competences__img-container">
            <img src={jslogo} alt="Js Logo" className="competences__img" />
          </div>
          <div className="competences__container">
            <FontAwesomeIcon icon={faJs} className="competences__icon" />
            <h1 className="competences__titre-skills">Javascript</h1>
            <p className="competences__p">
              J'utilise aussi JavaScript pour la conception de tous mes sites
              web.
            </p>
          </div>
          <div className="design design-top-left"></div>
          <div className="design design-top-right"></div>
          <div className="design design-bottom-left"></div>
          <div className="design design-bottom-right"></div>
        </div>
      </div>
      <div className="competences__css">
        <div className="competences__content">
          <div className="competences__img-container">
            <img src={scsslogo} alt="Scss logo" className="competences__img" />
          </div>
          <div className="competences__container">
            <FontAwesomeIcon icon={faSass} className="competences__icon" />
            <h1 className="competences__titre-skills">Scss</h1>
            <p className="competences__p">
              Pour le design de mes sites web, je sais utiliser SCSS ainsi que
              du CSS classique.
            </p>
          </div>
          <div className="design design-top-left"></div>
          <div className="design design-top-right"></div>
          <div className="design design-bottom-left"></div>
          <div className="design design-bottom-right"></div>
        </div>
      </div>

      <div className="competences__backend">
        <div className="competences__content">
          <div className="backend__img">
            <img src={sqllogo} alt="Sql logo" className="competences__img" />
            <img src={phplogo} alt="Php logo" className="competences__img" />
            <img
              src={mongodblogo}
              alt="Mongodb logo"
              className="competences__img"
            />
            <img src={gitlogo} alt="Git logo" className="competences__img" />
          </div>
          <div className="competences__container">
            <FontAwesomeIcon icon={faDatabase} className="competences__icon" />{" "}
            <h1 className="competences__titre-skills">Backend</h1>
            <p className="competences__p">
              Pour mes bases de données, j'ai commencé par utiliser MySQL avec
              PHP, mais récemment, j'ai appris à utiliser MongoDB. Je sais
              également travailler avec git.
            </p>
          </div>
          <div className="design design-top-left"></div>
          <div className="design design-top-right"></div>
          <div className="design design-bottom-left"></div>
          <div className="design design-bottom-right"></div>
        </div>
      </div>
      <div className="competences__cms">
        <div className="competences__content">
          <div className="competences__img-container">
            <img
              src={wordpresslogo}
              alt="Wordpress logo"
              className="competences__img"
            />
          </div>
          <div className="competences__container">
            <FontAwesomeIcon icon={faWordpress} className="competences__icon" />{" "}
            <h1 className="competences__titre-skills">Wordpress</h1>
            <p className="competences__p">
              Je sais également utiliser des CMS comme WordPress pour créer des
              sites web.
            </p>
          </div>
          <div className="design design-top-left"></div>
          <div className="design design-top-right"></div>
          <div className="design design-bottom-left"></div>
          <div className="design design-bottom-right"></div>
        </div>
      </div>
    </>
  );
}

export default Skills;
