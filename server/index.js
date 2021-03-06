require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/products', (req, res, next) => {
  const sql = `
    select *
      from "products"
  `;
  db.query(sql)
    .then(result => {
      const products = result.rows;
      res.status(200).json(products);
    })
    .catch(err => next(err));
});

app.get('/api/products/:productId', (req, res, next) => {
  const { productId } = req.params;
  const sql = `
  select *
    from "products"
   where "productId" = $1;
  `;
  if (isNaN(parseInt(productId))) {
    return res.status(400).json({
      error: 'Please input a valid Product Id'
    });
  }
  const productIdNum = parseInt(productId);
  const value = [productIdNum];
  db.query(sql, value)
    .then(result => {
      const item = result.rows[0];
      if (result.rows.length === 0) {
        next(new ClientError(`Prodcut Id ${productId} does not exist.`, 404));
      } else {
        return res.status(200).json(item);
      }
    })
    .catch(err => next(err));
});

app.get('/api/cart', (req, res, next) => {
  if (!req.session.cartId === true) {
    return res.json([]);
  }
  const sql = `
    select "c"."cartItemId",
           "c"."price",
           "p"."productId",
           "p"."image",
           "p"."name",
           "p"."shortDescription",
           "p"."itemNum"
      from "cartItems" as "c"
      join "products" as "p" using ("productId")
     where "c"."cartId" = $1
  `;
  const value = [req.session.cartId];
  db.query(sql, value)
    .then(result => res.json(result.rows))
    .catch(err => console.error(err));
});

app.post('/api/cart', (req, res, next) => {
  const { productId } = req.body;
  const productIdNum = parseInt(productId);
  if (isNaN(productIdNum)) {
    return res.status(400).json({
      error: 'Product Id must be a valid number'
    });
  }

  const sql = `
    select "price"
      from "products"
     where "productId" = $1
  `;
  const value = [productIdNum];
  db.query(sql, value)
    .then(result => {
      if (result.rows.length === 0) {
        throw new ClientError(`Product Id ${productId} does not exist`, 400);
      }
      if ((typeof req.session.cartId) !== 'number') {
        const sql = `
          insert into "carts" ("cartId", "createdAt")
          values (default, default)
          returning "cartId"
        `;
        return db.query(sql)
          .then(insertResult => {
            return {
              cartId: insertResult.rows[0].cartId,
              price: result.rows[0].price
            };
          });
      } else {
        return {
          cartId: req.session.cartId,
          price: result.rows[0].price
        };
      }
    })
    .then(data => {
      req.session.cartId = data.cartId;
      const sql = `
        insert into "cartItems" ("cartId", "productId", "price")
        values ($1, $2, $3)
        returning "cartItemId"
      `;
      const values = [data.cartId, productIdNum, data.price];
      return db.query(sql, values);
    })
    .then(cartItemId => {
      const sql = `
        select "c"."cartItemId",
               "c"."price",
               "p"."productId",
               "p"."image",
               "p"."name",
               "p"."shortDescription"
          from "cartItems" as "c"
          join "products" as "p" using ("productId")
         where "c"."cartItemId" = $1
      `;
      const value = [cartItemId.rows[0].cartItemId];
      return db.query(sql, value)
        .then(result => {
          res.status(201).json(result.rows[0]);
        });
    })
    .catch(err => next(err));
});

app.post('/api/orders', (req, res, next) => {
  if (typeof req.session.cartId !== 'number') {
    return res.status(400).json({
      error: 'There is no cart in session'
    });
  }

  const { name, creditCard, shippingAddress } = req.body;
  if (!name || !creditCard || !shippingAddress) {
    return res.status(400).json({
      error: 'Please enter Name, Credit Card and Shiping Address'
    });
  }

  const sql = `
    insert into "orders" ("cartId", "name", "creditCard", "shippingAddress")
          values ($1, $2, $3, $4)
          returning *;
  `;
  const values = [req.session.cartId, name, creditCard, shippingAddress];

  db.query(sql, values)
    .then(result => {
      delete req.session.cartId;
      res.status(201).json(result.rows[0]);
    })
    .catch(err => next(err));
});

app.delete('/api/cart/:productId', (req, res, next) => {
  const { productId } = req.params;
  if (isNaN(productId)) {
    return res.status(400).json({
      error: 'Product Id must be a valid number'
    });
  }
  const sql = `
    delete from "cartItems"
        where "cartId" = $1
          AND "productId" = $2
    returning *
    `;
  const value = [req.session.cartId, productId];
  db.query(sql, value)
    .then(result => {
      if (!result.rows[0]) {
        res.status(404).json({
          error: 'Product Id does not exist.'
        });
      } else {
        res.status(200).json(result.rows);
      }
    })
    .catch(err => next(err));
});

app.delete('/api/cartItem/:cartItemId', (req, res, next) => {
  const { cartItemId } = req.params;
  if (isNaN(cartItemId)) {
    return res.status(400).json({
      error: 'Cart Item Id must be a valid number'
    });
  }
  const sql = `
    delete from "cartItems"
        where "cartId" = $1
          AND "cartItemId" = $2
    returning *
    `;
  const value = [req.session.cartId, cartItemId];
  db.query(sql, value)
    .then(result => {
      if (!result.rows[0]) {
        res.status(404).json({
          error: 'Cart Item Id does not exist.'
        });
      } else {
        res.status(200).json(result.rows);
      }
    })
    .catch(err => next(err));
});

app.get('/api/cart/quantity', (req, res, next) => {
  const getCartQuantity = `
      select  "p"."productId",
              "p"."name",
              "p"."price",
              "p"."itemNum",
              "p"."image",
              count("p"."productId")
        from  "products" as "p"
        join  "cartItems" as "c" using ("productId")
       where  "c"."cartId" = $1
    group by  "p"."productId"
  `;
  const cartId = [req.session.cartId];
  db.query(getCartQuantity, cartId)
    .then(result => res.status(200).json(result.rows))
    .catch(err => next(err));
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
