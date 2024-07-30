import React, { SyntheticEvent } from "react";

interface Props {
  onPortfolioDelete: (e: SyntheticEvent) => void;
  porfolioValue: string;
}

function DeletePortfolio({ onPortfolioDelete, porfolioValue }: Props) {
  return (
    <div>
      <form onSubmit={onPortfolioDelete}>
        <input hidden readOnly value={porfolioValue}></input>
        <button>Delete</button>
      </form>
    </div>
  );
}

export default DeletePortfolio;
