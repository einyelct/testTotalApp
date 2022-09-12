import { shallowMount, mount } from "@vue/test-utils";
import TodoInput from '../../src/components/TodoInput.vue';
// import TodoInput from "@/components/TodoInput.vue";

describe("Insertar tarea", () => {
  it("prueba input task", () => {
    const wrapper = mount(TodoInput);
    wrapper.find('input').vm.textInput = "task1";

    wrapper.find("input").trigger("keyup.enter");

    expect(wrapper.vm.textInput).toBe('');
  });
});
