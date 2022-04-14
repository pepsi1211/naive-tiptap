<template>
  <main class="n-tiptap" v-if="editor" :style="{ width: editorWidth }">
    <editor-content class="n-tiptap-content" :editor="editor" />
  </main>
</template>

<script>
import { defineComponent } from "vue";
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";

export default defineComponent({
  name: "NTiptap",
  props: {},
  components: {
    EditorContent,
  },
  setup() {
    const editor = useEditor({
      content: "叉烧包",
      extensions: [StarterKit],
    });

    return {
      editor,
    };
  },
});
</script>
