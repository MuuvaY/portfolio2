import React from "react";
import "./../scss/style.scss";

function Table() {
  return (
    <>
      <table className="competences__table">
        <tr className="table__nom">
          <td>nom</td>
          <td>Yvart</td>
        </tr>
        <tr className="table__pnom">
          <td>prenom</td>
          <td>Marius</td>
        </tr>
        <tr className="table__age">
          <td>age</td>
          <td>21</td>
        </tr>
        <tr className="table__etude">
          <td className="table__etude-dom">
            étude, <br /> domaine
          </td>
          <td className="test">
            <table class="table__table">
              <tr className="table__form">
                <td className="table__test">BUT MMI</td>
              </tr>
              <tr>
                <td>Développement web </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr className="table__autre">
          <td>autre</td>
          <td>permis B</td>
        </tr>
        <tr className="table__info">
          <td>
            Je suis étudiant en 2ème année de BUT MMI, mais avant, ça
            laissez-moi me présenter ! J’ai 21 ans et je
            viens d'Angers. J’étudie à l’IUT d’Angoulême, avant de venir en BUT
            MMI j'ai fais un BTS Conception des Produits Industriels que j'ai
            obtenu.
          </td>
        </tr>
      </table>
      <div className="competences__text">
        <h1 className="competences__titre">Compétences</h1>
      </div>
    </>
  );
}

export default Table;
