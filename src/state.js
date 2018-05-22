export default {
    accessGate: {
        active: true
    },
    gates: [{
        group: 'terms_and_conditions',
        locked: true,
        tryLock: function(state) {
          return  true;
        },
        fields: [{
            type: 'ElCheckbox',
            model: 'accepted_terms_and_conditions',
            active: true,
            required: true,
            checkboxLabel: 'I agree to the terms and conditions.',
            styleClasses: 'ck-cityshares cf twelve col leaded',
            validator: function(value) {
                if (!value)
                    return ['Please agree to the terms and conditions.'];
            }
        }],

    }, {
        group: 'email_opt_in',
        locked: true,
        tryLock: function(state) {
          return  true;
        },
        fields: [{
            type: 'ElText',
            styleClasses: 'cf',
            header: 'Contact permission',
            paragraph: 'We\'d love to keep in touch with you by email with exclusive offers, deals and the latest info. Please be assured we\'ll treat your information with the utmost care and will never sell it to other companies for marketing purposes. Please click ont he Privacy policy link in the footer for more details.'
        }, {
            type: 'ElRadioGroup',
            required: true,
            model: 'email_opt_in',
            radioGroup: [{
                text: 'I want to hear about offers and services.',
                label: 'yes',
                radioClass: 'twelve sm-six md-four col cf leaded',
            }, {
                text: 'I don\'t not want to hear about offers and services.',
                label: 'no',
                radioClass: 'twelve sm-six md-four col cf leaded',
            }, ],
            styleClasses: 'twelve col cf',
            onChange: function() {},
            validator: function(value) {
                if (!value)
                    return ['Please choose correspondence settings.'];
            }
        }]
    }],
    
}
