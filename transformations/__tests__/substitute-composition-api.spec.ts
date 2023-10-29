import { defineInlineTest } from 'jscodeshift/src/testUtils'
import transform from '../substite-composition-api'

defineInlineTest(
  transform,
  {
    specifier: {
      type: 'named',
      imported: 'createApp',
    },
    source: 'vue',
  },
  `import { ref, watch } from "@vue/composition-api";`,
  `import { ref, watch } from "vue";`,
  'change import from @vue/composition-api to vue',
)
