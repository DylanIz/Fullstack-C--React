import React from "react";
import { TestDataCompany } from "../Table/testData";

interface Props {}

const data = TestDataCompany[0];

type Company = typeof data;

const config = [
  {
    label: "Company CEO",
    render: (company: Company) => company.ceo,
    subTitle: "This is the company CEO",
  },
];

const RatioList = (props: Props) => {
  const renderedRow = config.map((row) => {
    return (
      <li className="py-3 sm:py-4">
        <div className="flex items-cener space-x-4">
          <div className="flex-1 min-4">
            <p className="text-sm font-medium text-gray-900 truncate">
              {row.label}
            </p>
          </div>
        </div>
      </li>
    );
  });
  return <div>RatioList</div>;
};

export default RatioList;
