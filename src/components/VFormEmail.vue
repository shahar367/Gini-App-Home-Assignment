
<template>
  <div class="field">
    <div>
      <label>{{ VFormInputEmail }}:</label>
      <input
        :id="VFormInputID"
        :name="VFormInputEmail"
        v-model="VEmail"
        @blur="
          () => {
            isTouched = true;
          }
        "
        @input="validate"
      />
    </div>
    <div class="error" v-if="!isValid && isTouched">
      {{ VFormInputEmail }} is required
    </div>
  </div>
</template>
<script>
import ValidatorsIndex from "../validators/index";
import { VEmailValidationFunc } from "../validators//VEmailValidationFunc";
export default {
  name: "VFormEmail",
  data: function () {
    return {
      VEmail: "",
      isValid: false,
      isTouched: false,
    };
  },
  props: ["VFormInputID", "VFormInputEmail"],
  mounted: function () {
    let vm = this;
    let type = vm.VFormInputEmail;
    vm.initValidator(type);
  },
  methods: {
    validate: function () {
      let vm = this;
      vm.isTouched = true;
      vm.isValid = ValidatorsIndex.InvokeValidation(
        vm.VFormInputEmail,
        vm.VEmail
      );
      this.$emit("getValidData", {
        name: this.VFormInputEmail,
        isValid: vm.isValid,
        value: vm.VEmail,
      });
    },
    initValidator: function (type) {
      ValidatorsIndex.createValidator(type, VEmailValidationFunc);
    },
  },
};
</script>
