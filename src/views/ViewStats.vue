<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Characters (of all notes)</td>
          <td>{{ storeNotes.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
    <input 
      v-model="loveNotebalss"
      class="input"
      type="text"
      placeholder="love noteball"
      v-autofocus
    />

  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useStoreNotes } from '@/stores/storeNotes'
  import { vAutofocus } from '@/directives/vAutofocus'
  import { useWatchChar } from '@/use/useWatchChar';

  const storeNotes = useStoreNotes()

  const loveNotebalss = ref('')
  useWatchChar(loveNotebalss, 50)

</script>