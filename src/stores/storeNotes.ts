// stores/counter.js
import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ipsa commodi sint ut ullam culpa nulla molestiae sunt quia qui maxime.",
        },
        {
          id: "id2",
          content: "short notes",
        },
      ],
    };
  },
  actions: {
    addNote() {
      console.log("addNote");
    },
  },
});
