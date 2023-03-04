all: update

add:
	git add .

commit:
	git commit -m "update"

push:
	git push

run:
	git pull 
	node server/server.js

update:
	make add
	make commit
	make push
