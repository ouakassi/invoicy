import PageHeader from "../../components/PageHeader";
import InputWithLabel from "../../components/form/InputWithLabel";
import PickDate from "@/components/form/PickDate";

export default function CreateInvoicePage() {
  return (
    <>
      <PageHeader headerText="Create Invoice" />
      <div className="mt-4 rounded-md bg-white px-12 py-8 font-josefin shadow-md">
        {/* <h1 className="text-center text-3xl text-sky-700">INV-00001</h1> */}
        <form>
          <div className=" mt-4 flex items-end gap-4">
            <InputWithLabel
              type="text"
              labelText={"Invoice Number:"}
              rest={{ disabled: true, value: "INV-00001" }}
            />
            <label className="flex flex-col capitalize" htmlFor="">
              Invoice Date
              <PickDate />
            </label>
            <label className="flex flex-col capitalize" htmlFor="">
              Due date
              <PickDate />
            </label>
          </div>
          <div className="mt-8">
            <h2 className="text-l font-bold ">Bill To:</h2>
            <div className="mt-4 flex gap-4">
              <InputWithLabel type="text" labelText={"client"} />
              <InputWithLabel type="text" labelText={"contact person"} />
              <InputWithLabel type="text" labelText={"address"} />
              <InputWithLabel type="email" labelText={"email"} />
              <InputWithLabel type="tel" labelText={"phone"} />
            </div>
            <h2 className="text-l mt-4 font-bold ">Shipp to (if diffrent):</h2>
            <div className="mt-4 flex gap-4">
              <InputWithLabel
                className={"w-full"}
                type="text"
                labelText={"address"}
              />
              <InputWithLabel type="email" labelText={"email"} />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
