<template>
    <div class="access-gate-overlay" >
      <div class="access-gate-container">
        <div
             class="access-gate"
             :class=""
             v-cloak>
             <h2>Please enter yout registration.</h2>
          <vue-form-generator class="cf" ref="form" :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
        </div>
      </div>

    </div>
</template>

<script>

  import VueFormGenerator from "vue-form-generator";
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
              /*  axios.post('/register', form)
                .then(function (response){
                   	if(response.data.ok == true) {
                   		this.$root.checkUser();
                   	} else {
                        if(response.data.hasOwnProperty('error')) {
                            if(response.data.error.match(/\n/).length > 1) {
                                let errors = response.data.error.split("\n");
                                for(let i; i < errors.length; i++) {
                                    if(errors[i] != "undefined"){
                                        this.$dnotify({
                                            title: this.$root.$t('Error'),
                                            message: errors[i],
                                            duration: 5000,
                                            type: 'error'
                                        });
                                    }
                                }
                            } else {
                                this.$dnotify({
                                    title: this.$root.$t('Error'),
                                    message: response.data.error,
                                    duration: 5000,
                                    type: 'error'
                                });
                            }
                        }
                    }
                }.bind(this))
                .catch(function (error) {
                    if(error.response.status == 422){
                        this.schema.fields.forEach(function(elem, i) {
                            var obj = this.object_search(elem.model, error.response.data)
                            if(obj){
                                setTimeout(function(){
                                    this.$dnotify({
                                        title: this.capitalize(elem.placeholder)+this.$root.$t(' is invalid'),
                                        message: obj[elem.model][0],
                                        type: 'error'
                                    });
                                }.bind(this), 150);
                                //Please don't change this... this is how I force validation on fields
                                let errors = obj[elem.model];
                                this.$refs.form.onFieldValidated(false, errors, this.$refs.form.$children[i]);
                            }
                        }.bind(this));
                    } else {
                        this.$dnotify({
                            title: this.$root.$t('Error'),
                            message: this.$root.$t('Our hamsters tripped in their wheel, please contact us'),
                            duration: 5000,
                            type: 'error'
                        });
                    }
                }.bind(this));
                */
            },
            createFormGroups(){
              let submitGate = {
                group: 'submit',
                fields: [{
                  type: 'submit',
                  label: '',
                  validateBeforeSubmit: true,
                  buttonText: this.$t('Continue to Site'),
                  styleClasses: 'dt-btn active dt-btn-hollow cf twelve col',
                  onSubmit: function(form, schema) {
          			   console.info(this.errors);
                      this.save(form);
                  }.bind(this),
                  disabled() {
                      return this.errors.length != 0;
                  }
                }]
              }
              this.$data.schema.groups = this.schemaGroups.concat(submitGate);
            }
        },
    }
</script>
