<template>
    <div class="access-gate-overlay" >
      <div class="access-gate-container">
        <div
            class="access-gate"
            :class=""
            v-cloak>

            <h2 v-if="$slots['title']">
                <slot name="title"></slot>
            </h2>
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
  import { mapGetters} from 'vuex';

    export default {
        data() {
            return {
              model: {
                email_opt_in: null,
                accepted_terms_and_conditions: false
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
        },
        methods: {
            save(form, schema){
                this.$emit('save', form);
            },
            createFormGroups(){
                const submitGroup = {
                    group: 'submit',
                    fields: [{
                        type: 'ElButton',
                        label: '',
                        validateBeforeSubmit: true,
                        buttonText: this.$t('Continue to Site'),
                        styleClasses: 'cf twelve col no-margin',
                        buttonClasses: 'dt-btn active dt-btn-hollow cf twelve col no-margin button-submit',
                        onSubmit: this.save,
                        disabled() {
                            return this.errors.length != 0;
                        }
                    }]
                }

              this.$data.schema.groups = this.schemaGroups.concat(submitGroup);
            }
        },
    }
</script>
