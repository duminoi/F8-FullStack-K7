ls: liệt kê ra file / folder hiện tại
cd: di chuyển đến 1 folder nào đó
vd: cd etc
cd .. --> quay về folder trước đó
mkdir <tên>: tạo folder mới
touch <tên>: tạo file

docker image ls --> kiểm tra image

build 1 image = docker
    - docker build. -t <ten-image>
    - chạy qua docker-compose
        web:
            build:
                context: .
                dockerfile: Dockerfile
        run: docker-compose run --rm web bash
Khi run: thì run tạo ra container để run
 