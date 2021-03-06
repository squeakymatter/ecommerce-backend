const router = require('express').Router()
const { Category, Product } = require('../../models')

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    // include its associated Products
    include: [Product],
  }).then((dbCategoryData) => {
    res.json(dbCategoryData)
  })
})

// find one category by its `id` value
// include its associated Products
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [Product],
  }).then((dbCategoryData) => {
    res.json(dbCategoryData)
  })
})

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body).then((dbCategoryData) => {
    res.json(dbCategoryData)
  })
})

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbCategoryData) => {
      if (!dbCategoryData[0]) {
        res.status(404).json({ message: 'No Category found with this id' })
        return
      }
      res.json(dbCategoryData)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json(err)
    })
})

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No category found with this id' })
        return
      }
      res.json(dbCategoryData)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json(err)
    })
})

module.exports = router
