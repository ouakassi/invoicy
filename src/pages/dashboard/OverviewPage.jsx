import { useMemo } from "react";

import revenueIcon from "../../assets/imgs/overview-icons/money-bag.png";
import invoiceIcon from "../../assets/imgs/overview-icons/invoice.png";
import clientIcon from "../../assets/imgs/overview-icons/clients.png";

import PageHeader from "../../components/PageHeader";
import OverviewItem from "../../components/overview/OverviewItem";
import invoicesData from "../../data/invoicesData.json";

export default function OverviewPage() {
  const memoizedInvoicesTotal = useMemo(() => {
    return invoicesData.reduce((sum, invoice) => {
      return sum + invoice.total;
    }, 0);
  }, [invoicesData]);

  const memoizedInvoicesCount = useMemo(
    () => invoicesData.length + 1,
    [invoicesData],
  );

  const formattedTotal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "usd",
  }).format(memoizedInvoicesTotal);

  const overviewItems = [
    {
      icon: revenueIcon,
      header: "total revenue",
      text: formattedTotal,
    },
    {
      icon: invoiceIcon,
      header: "invoices",
      text: memoizedInvoicesCount,
    },
    {
      icon: clientIcon,
      header: "clients",
      text: "1068",
    },
  ];
  return (
    <>
      <PageHeader headerText={"overview"} />
      <div className="mt-8 flex flex-wrap justify-center gap-8">
        {overviewItems.map(({ icon, header, text }, i) => (
          <OverviewItem key={i} icon={icon} header={header} text={text} />
        ))}
      </div>
    </>
  );
}
