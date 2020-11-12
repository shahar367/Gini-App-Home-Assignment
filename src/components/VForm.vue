<template>
  <form @submit="onSubmit">
    <VFormName
      VFormInputID="firstName"
      VFormInputName="firstName"
      @getValidData="storeData"
    ></VFormName>
    <VFormName
      VFormInputID="lastName"
      VFormInputName="lastName"
      @getValidData="storeData"
    ></VFormName>
    <VFormEmail
      VFormInputID="email"
      VFormInputEmail="email"
      @getValidData="storeData"
    ></VFormEmail>
    <VFormPhoneNumber
      VFromInputID="phoneNumber"
      VFormInputPhoneNumber="phoneNumber"
      :VFormAreaCode="AreaCodes"
      @getValidData="storeData"
    ></VFormPhoneNumber>
    <button type="submit">submit</button>
  </form>
</template>
<script>
import VFormName from "./VFormName.vue";
import VFormEmail from "./VFormEmail.vue";
import VFormPhoneNumber from "./VFormPhoneNumber.vue";
export default {
  name: "VForm",
  data: () => {
    return {
      formData: {
        firstName: { value: "", isValid: false },
        lastName: { value: "", isValid: false },
        email: { value: "", isValid: false },
        phoneNumber: { value: "", isValid: false },
      },
      isValid: false,
      AreaCodes: ["052", "054", "050", "058"],
    };
  },
  components: {
    VFormName,
    VFormEmail,
    VFormPhoneNumber,
  },
  methods: {
    storeData: function (data) {
      let vm = this;
      vm.formData[data.name] = data.value;
    },
    onSubmit: function () {
      let vm = this;
      vm.isValid = vm.checkFormValidation();
      if (vm.isValid) {
        alert("successfully submited");
      } else {
       alert("form is not valid");
      }
    },
    checkFormValidation: function () {
      let vm = this;
      var isFormValid = true;
      for (var formElement in vm.formData) {
        if (vm.formData[formElement].isValid === false) {
          isFormValid = false;
          break;
        }
      }
      return isFormValid;
    },
  },
};
</script>
<style>
input,
select {
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.67);
  margin: 5px;
}
button {
  border-radius: 4px;
  border: 0px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.32);
  background: seagreen;
  padding: 10px 20px;
  color: white;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
form > div {
  min-width: 30%;
}
.field {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.error {
  text-align: left;
  color: red;
}
</style>