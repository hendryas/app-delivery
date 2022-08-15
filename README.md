# Delivery Food App

```bash
Resto
npx sequelize-cli model:generate --name resto --attributes nama:string,alamat:string,kota:string,customerId:integer

Driver
npx sequelize-cli model:generate --name driver --attributes nama:string,nid:integer,kota:string,gender:string

Product
npx sequelize-cli model:generate --name product --attributes nama:string,harga:integer,restoId:integer

Customer
npx sequelize-cli model:generate --name customer --attributes nama:string,umur:integer,image:string

Resto to Driver
npx sequelize-cli model:generate --name restodriver --attributes restoId:integer,driverId:integer
```
