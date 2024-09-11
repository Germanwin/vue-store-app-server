const db = require("../db");

class ProductController {
  async createProduct(req, res) {
    const { name, description, producer, price } = req.body;
    const newProduct = await db.query(
      `INSERT INTO product (name, description, producer, price) values ($1, $2, $3, $4) RETURNING *`,
      [name, description, producer, price]
    );
    res.json(newProduct.rows[0]);
  }
  async getProducts(req, res) {
    const products = await db.query(`select * from product`);
    res.json(products.rows);
  }
  async getOneProduct(req, res) {
    const id = req.params.id;
    const product = await db.query(`select * from product where id = $1`, [id]);
    res.json(product.rows[0]);
  }
  async updateProduct(req, res) {
    const { id, name, description, producer, price } = req.body;
    const product = await db.query(
      `UPDATE product set name = $1, description = $2, producer = $3, price = $4 where id = $5 RETURNING *`,
      [name, description, producer, price, id]
    );
    res.json(product.rows[0]);
  }
  async deleteProduct(req, res) {
    const id = req.params.id;
    const product = await db.query(`DELETE FROM product where id = $1`, [id]);
    res.json(product.rows[0]);
  }
}

module.exports = new ProductController();
