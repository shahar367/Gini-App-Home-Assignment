
<template>
  <div class="field">
    <div>
      <label>{{ VFormInputName }}:</label>
      <input
        :id="VFormInputID"
        :name="VFormInputName"
        v-model="VName"
        @blur="
          () => {
            isTouched = true;
          }
        "
        @input="validate"
      />
    </div>
    <div class="error" v-if="!isValid && isTouched">
      {{ VFormInputName }} is required
    </div>
  </div>
</template>
<script>
import ValidatorsIndex from "../validators/index";
import { VRequiredValidationFunc } from "../validators/VRequiredValidationFunc";
export default {
  name: "VFormName",
  data: function () {
    return {
      VName: "",
      isValid: false,
      isTouched: false,
    };
  },
  props: ["VFormInputID", "VFormInputName"],
  mounted: function () {
    let vm = this;
    let type = vm.VFormInputName;
    vm.initValidator(type);
  },
  methods: {
    validate: function () {
      let vm = this;
      vm.isTouched = true;
      vm.isValid = ValidatorsIndex.InvokeValidation(
        vm.VFormInputName,
        vm.VName
      );
        this.$emit("getValidData", {name:this.VFormInputName, isValid: vm.isValid, value: vm.VName});
    },
    initValidator: function (type) {
      ValidatorsIndex.createValidator(type, VRequiredValidationFunc);
    },
  },
};
</script>
