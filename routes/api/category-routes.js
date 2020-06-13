const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    attributes: [
      'id',
      'category_name'
    ]
  })
    .then(dbCommerceData => res.json(dbCommerceData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'category_name'
    ]
  })
    .then(dbCommerceData => {
      if (!dbCommerceData) {
        res.status(404).json({ message: 'No products found with this id' });
        return;
      }
      res.json(dbCommerceData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  })
    .then(dbCommerceData => res.json(dbCommerceData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbCommerceData => {
      if (!dbCommerceData) {
        res.status(404).json({ message: 'No category found with this id '});
        return;
      }
      res.json(dbCommerceData);
    })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCommerceData => {
      if (!dbCommerceData) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(dbCommerceData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
