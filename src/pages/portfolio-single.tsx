import { useParams } from "react-router-dom";

export function PortfolioSinglePage() {
  const params = useParams();
  return <main> {params.slug}</main>;
}
