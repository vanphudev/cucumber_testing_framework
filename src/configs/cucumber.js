const {DEFAULT_THEME} = require("@cucumber/pretty-formatter");

module.exports = {
   default: {
      publish: true,
      formatOptions: {
         theme: {
            ...DEFAULT_THEME,
         },
      },
      paths: ["src/tests/features"],
      require: ["src/tests/features/step_definitions/*.js", "src/hooks/*.js"],
      format: ["progress-bar", "html:src/reports/cucumber-report.html", "json:src/reports/cucumber-report.json"],
      parallel: 1,
   },
};
