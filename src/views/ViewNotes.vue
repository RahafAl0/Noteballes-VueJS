<template>
  <div class="notes">
    <AddEditNote
      v-model="newNote"
      placeholder="Add a new note"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <button
          @click="addNote"
          :disabled="!newNote"
          class="button is-link has-background-success"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>

    <progress
      v-if="!storeNotes.notesLoaded"
      class="progress is-large is-success"
      max="100"
    />

    <template v-else>
      <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />

      <div v-if="!storeNotes.notes.length"
      class="is-size-4 has-text-centered has-text-gry-light is-family-monospace py-6">
        No Notes Yet!
      </div>

    </template>
  </div>
</template>

<script setup>
  import { ref, onMounted} from "vue";
  import Note from "@/components/Notes/Note.vue";
  import AddEditNote from "@/components/Notes/AddEditNote.vue";
  import { useStoreNotes } from "@/stores/storeNotes";
  import { useWatchChar } from "@/use/useWatchChar";

  const storeNotes = useStoreNotes();

  const newNote = ref("");
  const addEditNoteRef = ref(null);

  const addNote = () => {
    storeNotes.addNote(newNote.value);
    newNote.value = "";
    addEditNoteRef.value.focusTextarea();
  };

  useWatchChar(newNote);

  onMounted(() => {
    storeNotes.getNotes();
  });
</script>
