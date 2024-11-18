import { Link } from "react-router-dom";
import { CompanyTenK } from "../../../company";

interface Props {
  tenK: CompanyTenK;
}

const TenKFinderItem = ({ tenK }: Props) => {
  const fillingDate = new Date(tenK.fillingDate).getFullYear();
  return (
    <Link
      reloadDocument
      to={tenK.finalLink}
      type="button"
      className="inline-flex items-center p-4 text-md text-white bg-lightGreen rounded-md shadow-md hover:bg-green-500"
    >
      10K - {tenK.symbol} - {fillingDate}
    </Link>
  );
};

export default TenKFinderItem;