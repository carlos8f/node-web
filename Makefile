bench:
	@./node_modules/.bin/benchmarx \
	  --runner siege \
	  --concurrency 50 \
	  --title "node-web benchmark"

.PHONY: bench
