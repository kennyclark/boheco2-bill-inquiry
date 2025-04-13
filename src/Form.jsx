import { useState } from "react";
import { useForm } from "react-hook-form";

import Button from "./components/Button";
import InputText from "./components/InputText";
import Modal from "./components/Modal";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const {register, formState: {errors}, handleSubmit} = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const [month, year] = data.bill_month.trim().split('-');
      const servicePeriodEnd = month + '/01/' + year;
      const payload = {
        "ConsumerName": data.last_name.trim() + ", " + data.first_name.trim(),
        "AccountNumber": data.account_number.trim(),
        "ServicePeriodEnd": servicePeriodEnd
      }
      const response = await fetch('https://bill-inquiry-api.onrender.com/api/v1/billInquires', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        const data = await response.json();
        setResponseMessage(data.msg);
      } else {
        setResponseMessage("Something went wrong. Please try again.");
      }
    } finally {
      setIsLoading(false);
      setShowModal(true);
    }
  }

  return (
    <>
      <form
        className="flex flex-col flex-grow gap-5 px-8 py-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputText
          id="last_name"
          label="Consumer's Family Name"
          placeholder=""
          register={register}
          required={true}
        />
        {errors.last_name && <p className="text-red-600">Family Name is required</p>}
        <InputText
          id="first_name"
          label="Consumer's Given Name"
          placeholder=""
          register={register}
          required={true}
        />
        {errors.first_name && <p className="text-red-600">Given Name is required</p>}
        <InputText
          id="account_number"
          label="Account Number (10 digits)"
          placeholder="XXXXXXXXXX"
          register={register}
          required={true}
        />
        {errors.account_number && <p className="text-red-600">Account Number is required</p>}
        <InputText
          id="bill_month"
          label="Bill Month"
          placeholder="MM-YYYY"
          register={register}
          required={true}
        />
        {errors.bill_month && <p className="text-red-600">Bill Month is required</p>}
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "LOADING..." : "INQUIRE"}
        </Button>
      </form>
      {showModal && (
        <Modal
          show={showModal}
          setShow={setShowModal}
          message={responseMessage}
        />
      )}
    </>
  );
};

export default Form;
