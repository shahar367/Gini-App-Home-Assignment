
<template>
  <div class="field">
    <div>
      <label>{{ VFormInputPhoneNumber }}:</label>
      <select
        :name="VFormInputPhoneNumber + '-select'"
        :id="VFormInputID + '-select'"
        @change="handleSelectAreaCode"
      >
        <option :key="areaCode" v-for="areaCode of VFormAreaCode">
          {{ areaCode }}
        </option>
      </select>
      <input
        :id="VFormInputID"
        :name="VFormInputPhoneNumber"
        @blur="
          () => {
            isTouched = true;
          }
        "
        @input="handlePhoneNumberChange"
      />
    </div>
    <div class="error" v-if="!isValid && isTouched">
      field is not valied see if :
      <br />
      1. is not empty <br />
      2. containe only digit <br />
      3. is 10 digit legnth
    </div>
  </div>
</template>
<script>
import ValidatorsIndex from "../validators/index";
import { VPhoneNumberValidationFunc } from "../validators/VPhoneNumberValidationFunc";
export default {
  name: "VFormPhoneNumber",
  data: function () {
    let vm = this;
    return {
      VPhoneNumber: vm.VFormAreaCode[0],
      isValid: false,
      isTouched: false,
    };
  },
  props: ["VFormInputID", "VFormInputPhoneNumber", "VFormAreaCode"],
  mounted: function () {
    let vm = this;
    let type = vm.VFormInputPhoneNumber;
    vm.initValidator(type);
  },
  methods: {
    validate: function () {
      let vm = this;
      vm.isTouched = true;
      vm.isValid = ValidatorsIndex.InvokeValidation(
        vm.VFormInputPhoneNumber,
        vm.VPhoneNumber
      );
      this.$emit("getValidData", {
        name: this.VFormInputPhoneNumber,
        isValid: vm.isValid,
        value: vm.VPhoneNumber,
      });
    },
    initValidator: function (type) {
      ValidatorsIndex.createValidator(type, VPhoneNumberValidationFunc);
    },
    handleSelectAreaCode: function (event) {
      let vm = this;
      let withoutAreaCode = vm.VPhoneNumber.substring(
        3,
        vm.VPhoneNumber.length
      );
      vm.VPhoneNumber = event.target.value + withoutAreaCode;
      vm.validate();
    },
    handlePhoneNumberChange: function (event) {
      let vm = this;
      console.log(vm.VPhoneNumber);
      let areaCode = vm.VPhoneNumber.substring(0, 3);
      vm.VPhoneNumber = areaCode + event.target.value;
      vm.validate();
    },
  },
};
</script>
