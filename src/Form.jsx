import { useState } from "react";
import { useForm } from "react-hook-form";

import Button from "./components/Button";
import InputText from "./components/InputText";
import Modal from "./components/Modal";

import { extractBillDetails } from "./utils";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [billingDetails, setBillingDetails] = useState({
    error: null,
    data: null,
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const [month, year] = data.bill_month.trim().split("-");
      const servicePeriodEnd = `${month}/01/${year}`;
      const payload = {
        AccountNumber: data.account_number.trim(),
        ServicePeriodEnd: servicePeriodEnd,
      };
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/bill`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );
      if (response.ok) {
        const rawData = await response.text();
        const { error, data: extractedData } = extractBillDetails(rawData);
        setBillingDetails({ error, data: extractedData });
      } else {
        setBillingDetails({
          error: new Error("Something went wrong. Please try again."),
          data: null,
        });
      }
    } finally {
      setIsLoading(false);
      setShowModal(true);
    }
  };

  return (
    <>
      <form
        className="flex flex-col flex-grow gap-5 px-8 py-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputText
          id="account_number"
          label="Account Number (10 digits)"
          placeholder="XXXXXXXXXX"
          register={register}
          required={true}
        />
        {errors.account_number && (
          <p className="text-red-600">Account Number is required</p>
        )}
        <InputText
          id="bill_month"
          label="Billing Month"
          placeholder="MM-YYYY"
          register={register}
          required={true}
        />
        {errors.bill_month && (
          <p className="text-red-600">Billing Month is required</p>
        )}
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "LOADING..." : "INQUIRE"}
        </Button>
      </form>
      {showModal && (
        <Modal show={showModal} setShow={setShowModal}>
          {billingDetails.error ? (
            <div className="text-center text-2xl font-bold py-6">
              {billingDetails.error.message}
            </div>
          ) : (
            <div className="flex flex-col gap-3 text-center">
              <div className="text-left">
                <div className="flex justify-between">
                  <span className="text-zinc-400">ACCOUNT NUMBER: </span>
                  <span className="font-bold">
                    {billingDetails.data.accountNumber}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">NAME: </span>
                  <span className="font-bold">
                    {billingDetails.data.consumerName}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">BILLING MONTH: </span>
                  <span className="font-bold">
                    {billingDetails.data.billingPeriod}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">kWh USED: </span>
                  <span className="font-bold">
                    {billingDetails.data.kWhUsed}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">STATUS: </span>
                  <span className="font-bold">
                    {billingDetails.data.billStatus}
                  </span>
                </div>
              </div>
              <hr className="border-zinc-200" />
              <div className="text-7xl font-bold text-green-600">
                ₱{billingDetails.data.amount}
              </div>
              {billingDetails.data.billStatus === "UNPAID" && (
                <>
                  <hr className="border-zinc-200" />
                  <div className="text-zinc-400">
                    PLEASE PAY ON OR BEFORE
                    <div className="font-semibold text-3xl text-red-500">
                      {billingDetails.data.dueDate}
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </Modal>
      )}
    </>
  );
};

export default Form;
