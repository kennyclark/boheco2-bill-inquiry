import Button from "./components/Button";
import InputText from "./components/InputText";

const Form = () => {
  return (
    <form className="flex flex-col flex-grow gap-5 px-8 py-5">
      <InputText
        id="last_name"
        label="CONSUMER LASTNAME"
        placeholder="LASTNAME"
      />
      <InputText
        id="first_name"
        label="CONSUMER FIRSTNAME"
        placeholder="FIRSTNAME"
      />
      <InputText
        id="account_number"
        label="ACCOUNT NUMBER"
        placeholder="XXXXXXXXXX"
      />
      <InputText id="bill_month" label="BILL MONTH" placeholder="MM-YYYY" />
      <Button>INQUIRE</Button>
    </form>
  );
};

export default Form;
