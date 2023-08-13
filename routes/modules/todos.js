const express = require('express')
const db = require('../../models')
const Todo = db.Todo
const router = express.Router()

//瀏覽新增頁面
router.get('/new', (req, res) => {
  res.render('new')
})

//新增一筆todo
router.post('/', (req, res) => {
  console.log(req.body.name)
  const name = req.body.name
  return Todo.create({ name})
    .then(() => res.redirect('/'))
    .catch(error => console.log('error'))
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  return Todo.findByPk(id)
    .then(todo => res.render('detail', { todo: todo.toJSON() }))
    .catch(error => console.log(error))
})

module.exports = router