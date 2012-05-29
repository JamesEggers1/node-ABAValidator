test:
	@npm install mocha
	@npm install should
	@node_modules/mocha/bin/mocha tests/aba-validation-tests.js -R spec

.PHONY: test