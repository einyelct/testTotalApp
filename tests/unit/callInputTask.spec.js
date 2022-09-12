// import { mount, flushPromises } from "@vue/test-utils";
// import axios from "axios";
// import TodoInput from "@/components/TodoInput.vue";

// const mockPostTask = [{ id: 0, label: 'new Task #testing', state: 1 }];

// jest.spyOn(axios, 'post').mockResolvedValue(mockPostTask);

// test('crear nueva tarea', async () => {
//     const wrapper = mount(TodoInput)
  
//     await wrapper.get('input').trigger('keyup.enter')
  
//     // Let's assert that we've called axios.get the right amount of times and
//     // with the right parameters.
//     expect(axios.post).toHaveBeenCalledTimes(1)
//     expect(axios.post).toHaveBeenCalledWith('/todos')
  
//     // Wait until the DOM updates.
//     await flushPromises()
  
//     // Finally, we make sure we've rendered the content from the API.
//     const posts = wrapper.findAll('[data-test="post"]')
  
//     expect(posts).toHaveLength(2)
//     expect(posts[0].text()).toContain('title1')
//     expect(posts[1].text()).toContain('title2')
//   })
