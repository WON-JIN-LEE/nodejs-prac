# 깃허브 Actions
- 깃허브 Actions은 특정한 이벤트가 발생했을 때 내가 원하는 일을 자동으로 수행할 수 있도록 도와주는 툴입니다.
- Event, Workflows, Jobs, Actions, Runners로 나뉜다.


## Event
이벤트는 깃허브에서 발생할 수 있는 대부분의 일들을 지정할 수 있습니다.

example
- main브랜치로 merge
- 커밋을 푸쉬
- 이슈를 누군가 열면


## Workflows
이벤트가 발생했을 때 내가 수행할 일들을 명시하는 곳입니다.

## Jobs
Workflows안에 Job이 하나 또는 다수를 정의할 수 있습니다..
Job들은 병렬적으로 또는 순차적으로 설정할 수 있습니다.

## Actions
이미 만들어져 있는 유용한 Actions들을 가져다 사용할 수 있습니다.

## Runners
각각의 Job에 할당된 VM 머신 컨테이너에서 Job에 정의한 일들을 수행됩니다.

## example code
```yml
name: learn-github-actions                  #위크플로우 이름 명시
on: [push]                                  # 이벤트 지정
jobs:                                       # Job 지정
    check-bats-version:                     # job 이름 명시
        runs-on: ubuntu-latest              # 어떤 VM 머신을 사용할건지
        steps:                              # Job 작업 순서 지정
            - uses: actions/checkout@v3     # 깃허브에서 제공하는 checkout action을 사용
            - uses: actions/setup-node@v3   # setup-node action을 사용함
            with:                           # with문법으로 노드 버전을 명시함
                node-version:'14'
            - run: npm install -g bats      # 쉘 스크립트 작성
            - run: bats -v                  # 쉘 스크립트 작성
```