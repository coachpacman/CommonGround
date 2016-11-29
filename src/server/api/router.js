import express from 'express'
const router = express.Router()

router.get('/', function(req, res, next){
  res.error = false
  res.data = {'foo': 'bar'}
  res.message = "call succeeded"
  next()
})

export default router
