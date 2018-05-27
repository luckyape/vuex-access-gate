<template>
    <div class="access-gate-overlay" >
      <div class="access-gate-container">
        <div
            class="access-gate"
            :class=""
            v-cloak>
            <h2 > {{title}}</h2>
            <vue-form-generator
                class="cf"
                ref="form"
                :schema="schema"
                :model="model"
                :options="formOptions"></vue-form-generator>
        </div>
      </div>
    </div>
</template>

<script>

  import VueFormGenerator from 'vue-form-generator';
  import { mapGetters, mapState} from 'vuex';

    export default {
        data() {
            return {
              model: {
              },
              params: {
              },
              schema: {
                  groups: []
              },
              formOptions: {
                  validateAfterLoad: false,
                  validateAfterChanged: true
              },
            }
        },

        created() {
            this.createFormGroups();
        },
        computed: {
            ...mapGetters('accessGate', ['schemaGroups']),
            ...mapState('accessGate', ['submitOptions', 'title'])
        },
        methods: {
            saveForm(form, schema){
              if(!this.errors || this.errors.length === 0)
                  this.$emit('save', form);
              else return false;
            },
             createFormGroups(){
                const options = {
                  onSubmit: this.saveForm,
                    disabled() {
                      return this.errors.length != 0;
                  }
                };
                Object.assign(options, this.submitOptions);
                const submitGroup = {
                    group: 'submit',
                    fields: [options]
                }
                this.$data.schema.groups = this.schemaGroups.concat(submitGroup);
            }
        },
    }
</script>
