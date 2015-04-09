// Options
AccountsTemplates.configure({
  //defaultLayout               : 'emptyLayout',
  showForgotPasswordLink        : true,
  overrideLoginErrors           : true,
  enablePasswordChange          : true,
  sendVerificationEmail         : false,

  //enforceEmailVerification    : true,
  //confirmPassword             : true,
  //continuousValidation        : false,
  //displayFormLabels           : true,
  //forbidClientAccountCreation : false,
  //formValidationFeedback      : true,
  //homeRoutePath               : '/',
  //showAddRemoveServices       : false,
  //showPlaceholders            : true,

  negativeValidation            : true,
  positiveValidation            : true,
  negativeFeedback              : false,
  positiveFeedback              : true,

  //privacyUrl                  : 'privacy',
  //termsUrl                    : 'terms-of-use',
});

AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');
