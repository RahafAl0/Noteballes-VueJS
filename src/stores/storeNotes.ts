import { defineStore } from "pinia";
import {
  collection,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  addDoc,
} from "firebase/firestore";
import { db } from "@/ts/firebase";

const notesCollectionRef = collection(db, "notes");
const notesCollectionQuery = query(notesCollectionRef, orderBy("date", "desc"));

export const useStoreNotes = defineStore("useStoreNotes", {
  state: () => {
    return {
      notes: [
        // {
        //   id: 'id1',
        //   content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ipsa commodi sint ut ullam culpa nulla molestiae sunt quia qui maxime.'
        // },
        // {
        //   id: 'id2',
        //   content: 'This is a shorter note! Woo!'
        // }
      ],
    };
  },
  actions: {
    async getNotes() {
      onSnapshot(notesCollectionQuery, (querySnapshot: any) => {
        let notes: any = [];
        querySnapshot.forEach((doc: any) => {
          let note = {
            id: doc.id,
            content: doc.data().content,
          };
          notes.push(note);
        });
        this.notes = notes;
      });
    },
    async addNote(newNoteContent: string) {
      let currentDate = new Date().getTime(),
        date = currentDate.toString();


      await addDoc(notesCollectionRef, {
        content: newNoteContent,
        date
      });
    },
    async deleteNote(idToDelete: string) {
      await deleteDoc(doc(notesCollectionRef, idToDelete));
    },
    async updateNote(id: string | string[], content: string) {
      await updateDoc(doc(notesCollectionRef, id), {
        content,
        username: "Rahaf",
        show: true,
      });
    },
  },
  getters: {
    getNoteContent: (state) => {
      return (id: string) => {
        return state.notes.filter((note) => note.id === id)[0].content;
      };
    },
    totalNotesCount: (state) => {
      return state.notes.length;
    },
    totalCharactersCount: (state) => {
      let count = 0;
      state.notes.forEach((note) => {
        count += note.content.length;
      });
      return count;
    },
  },
});
