import express from 'express'

const router = express.Router()

router.post('/initiate', (req, res) => {
  console.log(req.body)
  const validReq = req.body.from || req.body.to || req.body.amount

  if (!validReq) {
    res.status(500).send({ error: 'Please enter valid details.' })
  }
  res.status(200).send({
    message: `Transfer is scheduled from ${req.body.from} to ${req.body.to} with ${req.body.amount}`,
    success: 200,
    data: {
      amount: req.body.amount,
      to: req.body.to,
      from: req.body.from
    }
  })
})

export const TransfersRoute = router
