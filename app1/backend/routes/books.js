const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
	res.json({ Message: "GET all Books" })
})

router.get('/:id', (req, res, next) => {
	res.json({ Message: "GET a single Books" })
}
)
router.post('/', (req, res, next) => {
	res.json({ Message: "POST a Books" })
})

router.delete('/:id', (req, res, next) => {
	res.json({ Message: "DELETE all Books" })
})

router.patch('/:id', (req, res, next) => {
	res.json({ Message: "UPDATE a Book" })
})


module.exports = router
