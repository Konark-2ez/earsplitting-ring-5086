
# FurnStock
   FurnStock is an e-commerce website i developed as an individual project during our construct week. It has a homepage, a product page,a registration page ,a cart Section and a checkout page mainly the roadmap of which is provided below. A user can signUp first which stores the user in the database and using the email and password the user can then login to their account. The website is deployed in netlify. The server is deployed in cyclic.sh.




## Author

- [@Konark-2ez](https://github.com/Konark-2ez)


## Tech Stack

**Client:** HTML, CSS and JavaScript

**Server:** Node, Express

**DataBase:** MongoDB




## API Reference

#### POST users/ or register the users

```http
  POST /user/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `/user/register` | `string` | **Required**. https://uninterested-gray-dugong.cyclic.app/user/register it signUps the user and stores the data into the database|

#### POST signUp user/login users

```http
  POST /user/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `/user/login`      | `string` | **Required**.https://uninterested-gray-dugong.cyclic.app/user/login it logs in the user and generates a unique token for each user by inspecting from the database |

#### GET all products

```http
  GET /product/?query
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `/product/?{query}`      | `string` | **Required**.https://uninterested-gray-dugong.cyclic.app/product/?{query} it gets all the products for the product page |


#### POST products

```http
  POST /furnitre/add
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `/furnitre/add`      | `string` | **Required**.https://uninterested-gray-dugong.cyclic.app/furnitre/add  it adds products to the database. It is also used to post the products from product page to cart |

#### GET products

```http
  GET /furnitre/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `/furnitre/`      | `string` | **Required**.https://uninterested-gray-dugong.cyclic.app/furnitre/ it gets products from the database. It is used to display all the items added to cart |

#### Update products

```http
  PATCH /furnitre/update/product_ID
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `/furnitre/update/product_ID`      | `string` | **Required**.https://uninterested-gray-dugong.cyclic.app/furnitre/update/${product_ID} it gets products from the database then update it according to the need, here it is used to update the quantity |


#### Delete products

```http
  DELETE /furnitre/delete/product_ID
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `/furnitre/delete/product_ID`      | `string` | **Required**.https://uninterested-gray-dugong.cyclic.app/furnitre/delete/${product_ID} it deletes the product whose ID matches the product_ID provided, here it is used to remove the product from the cart |

## Roadmap

- The user first lands on the landing page

- Then the user needs to register first

- After registration the user needs to go to the home page and click on shop now

- This will redirect user to the furniture page.

- There the user needs to click on the living room furniture.

- From there the user will land in the product page, there they 
can add products to the cart

- After adding the products the user needs to go to the cart page where he can update the quantity or remove the item. 

- At the last he can click on the checkout button where he will be 
redirected to the checkout page, from there he can checkout the item.

