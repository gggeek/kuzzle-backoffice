<template>
  <div class="document-create-update">
    <form class="wrapper" @submit.prevent="submit">
      <div class="row">
        <div class="switch right">
          <label>
            Form
            <input type="checkbox" @change="switchView" :checked="!isFormView">
            <span class="lever"></span>
            JSON
          </label>
        </div>
      </div>

      <div class="row" v-if="isFormView">
        <div class="col s12 card">
          <div class="card-content">
            <json-form
              :schema="schema"
              @update-value="updateValue"
              :document="newContent"
            ></json-form>
          </div>
        </div>
      </div>

      <!-- Json view -->
      <div class="row json-view" v-if="!isFormView">
        <div class="col s6 card" :class="{s12: $store.state.collection.isRealtimeOnly}">
          <div class="card-content">
            <span class="card-title">Custom content</span>
            <json-editor
              id="document"
              class="document-json"
              ref="jsoneditor"
              :content="newContent"
              :height="300"
              @changed="jsonChanged"
            ></json-editor>
          </div>
        </div>

        <!-- Mapping -->
        <div class="col s6 card" v-if="!$store.state.collection.isRealtimeOnly">
          <div class="card-content">
            <span class="card-title">Mapping</span>
            <json-editor
              id="mapping"
              class="document-json"
              :content="mapping"
              :readonly="true"
              :height="300"
            ></json-editor>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import JsonForm from '../../../Common/JsonForm/JsonForm'
import JsonEditor from '../../../Common/JsonEditor'
import { mergeSchemaMapping } from '../../../../services/collectionHelper'

export default {
  name: 'CustomData',
  components: {
    JsonForm,
    JsonEditor
  },
  props: {
    value: {
      type: Object,
      default: () => {
        return {}
      }
    },
    mapping: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      viewType: 'form',
      newContent: {}
    }
  },
  computed: {
    isFormView () {
      return this.viewType === 'form'
    },
    schema () {
      return mergeSchemaMapping({}, this.mapping)
    }
  },
  methods: {
    switchView () {
      if (this.viewType === 'json') {
        Object.assign(this.newContent, this.$refs.jsoneditor.getJson())
      }
      this.viewType = this.isFormView ? 'json' : 'form'
    },
    updateValue (payload) {
      this.newContent[payload.name] = payload.value
      this.$emit('input', this.newContent)
    },
    jsonChanged () {
      this.$emit('input', this.$refs.jsoneditor.getJson())
    }
  },
  mounted () {
    this.newContent = {...this.value}
  }
}
</script>
