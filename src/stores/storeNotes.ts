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
    addNote(newNoteContent: string) {
      let currentDate = new Date().getTime(),
        id = currentDate.toString();

      let note = {
        id,
        content: newNoteContent,
      };

      this.notes.unshift(note);
    },
    deleteNote(noteId: string) {
      this.notes = this.notes.filter((note) => note.id !== noteId);
    }
  },
});
