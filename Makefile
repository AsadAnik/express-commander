controller name:
	$(shell npx ts-node cli/index.ts generate:controller $(name))

model:
	$(shell npx ts-node cli/index.ts generate:model $(name))

route:
	$(shell npx ts-node cli/index.ts generate:route $(name))

service:
	$(shell npx ts-node cli/index.ts generate:service $(name))

all:
	$(shell npx ts-node cli/index.ts generate:all $(name))

all-schema:
	$(shell npx ts-node cli/index.ts generate:all:schema $(name))