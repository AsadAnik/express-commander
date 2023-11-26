controller name:
	$(shell npx ts-node cli/index.ts make:controller $(name))

model:
	$(shell npx ts-node cli/index.ts make:model $(name))

route:
	$(shell npx ts-node cli/index.ts make:route $(name))

service:
	$(shell npx ts-node cli/index.ts make:service $(name))

all:
	$(shell npx ts-node cli/index.ts make:all $(name))

all-schema:
	$(shell npx ts-node cli/index.ts make:all:schema $(name))