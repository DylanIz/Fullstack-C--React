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
            <p className="text-sm text-gray-500 truncate">
              {row.subTitle && row.subTitle}
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900">
            {row.render(data)}
          </div>
        </div>
      </li>
    );
  });
  return <div>RatioList</div>;
};

export default RatioList;
