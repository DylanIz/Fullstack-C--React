import React, { useEffect } from "react";
import { CompanyTenK } from "../../company";
import { getTenK } from "../../api";

interface Props {
  ticker: string;
}

const TenKFinder = ({ ticker }: Props) => {
  const [companyData, setCompanyData] = React.useState<CompanyTenK[]>([]);
  useEffect(() => {
    const getTenKData = async () => {
      const value = await getTenK(ticker);
      if (value?.data) {
        setCompanyData(value.data);
      }
    };
    getTenKData();
  }, [ticker]);

  return <div>TenKFinder</div>;
};

export default TenKFinder;
