import React, { SyntheticEvent } from "react";

interface Props {
  onPortfolioDelete: (e: SyntheticEvent) => void;
  portfolioValue: string;
}

function DeletePortfolio({ onPortfolioDelete, portfolioValue }: Props) {
  return (
    <div>
      <form onSubmit={onPortfolioDelete}>
        <input hidden readOnly value={portfolioValue}></input>
        <button>Delete</button>
      </form>
    </div>
  );
}

export default DeletePortfolio;
