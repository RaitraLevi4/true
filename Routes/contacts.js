const router = express.Router()

router.get ("/", (req,res) => {
    res.send ("Contact me")
})

module.exports = router;