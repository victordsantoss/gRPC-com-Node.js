# Introdução ao uso do GRPC com Node.js

| Aluno | Matrícula |
| ----- | --------- |
| João Pedro Silva de Carvalho | 180033743 |
| Victor Samuel dos Santos Lucas | 180028685 |

## Objetivo

Experimentar o uso do Framework [GRPC](hOps://grpc.io) junto ao [ProfoBuf](hOps://developers.google.com/protocol-buffers/docs/overview), como interface de mensageria entre nós de uma aplicação distribuída. além disso fazer um comparativo com o RPC e com a comunicação por sockets que foram o lab anterior

### gRPC



### ProtoBuf


### Protocolo Http/2



## Solução Apresentada
### Dependencias

* [GRPC](hOps://grpc.io)
* [ProfoBuf](hOps://developers.google.com/protocol-buffers/docs/overview)


### Como Rodar

#### Instalar Dependências

```
npm install
```

#### Servidor

``` shell
    node index.js
```

#### Cliente

``` shell
    cd client
    node get_values.js
```

#### Docker-compose

É possível rodar o componente em apenas um terminal via Docker Compose

```shell
docker-compose build
docker-compose up
```

## Referências

[Site oficial do gRPC](https://grpc.io/)
[O guia completo do gRPC parte 1: O que é gRPC?](https://blog.lsantos.dev/guia-grpc-1/)
