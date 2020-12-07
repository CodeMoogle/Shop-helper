# Shop-helper

## About the App

The user can register or login into an existing account. (mail confirmation is not used)
On the Add Goods page, the user can enter the product, quantity and expiration date.
Added products can be sorted by label, expiration date or quantity.
If the product is overdue, it will be marked with a gray left border,
with less than a month left, it will be marked with a red left border,
with less than 2 months left, marked with a yellow left border,
with less than 3 months left, border will be green,
and if the product has more than three months left in its expire date, it will have no border.
The user can log out of the account by clicking on the menu in the upper right corner and selecting "Signout".

## First production build is ready, follow link below =)

> Server is running on heroku platform, and front-end is hosted on netlify platform

[Click to try the latest build (development still in progress)](https://shop-helper.netlify.app/)

## ToDo:

> Ability to add goods and track expiration dates - done

> Sort products by label and expiration date - done

> User registration and authorization + JWT - done

> Set and retrieve data from MongoDb - done
