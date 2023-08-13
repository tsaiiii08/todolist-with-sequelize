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
  const name = req.body.name
  const UserId = req.user.id
  return Todo.create({ name,UserId})
    .then(() => res.redirect('/'))
    .catch(error => console.log('error'))
})
//看一筆todo的資訊
router.get('/:id', (req, res) => {
  const UserId = req.user.id
  const id = req.params.id
  return Todo.findOne({
    where: { id, UserId }
  })
    .then(todo => res.render('detail', { todo: todo.toJSON() }))
    .catch(error => console.log(error))
})
module.exports = router