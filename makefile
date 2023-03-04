all: update

add:
	git add .

commit: 
	git commit -m "update"

push: 
	git push

update:
	make add
	make commit
	make push