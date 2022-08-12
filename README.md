# one-to-many

## Sequelize Script

```bash
npx sequelize-cli model:generate --name resto --attributes nama:string,alamat:string,kota:string,customerId:integer

npx sequelize-cli model:generate --name driver --attributes nama:string,nid:integer,kota:string,gender:string

npx sequelize-cli model:generate --name product --attributes nama:string,harga:integer,restoId:integer

npx sequelize-cli model:generate --name customer --attributes nama:string,umur:integer,image:string

npx sequelize-cli model:generate --name restodriver --attributes restoId:integer,driverId:integer
```
