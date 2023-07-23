import category from "../models/category";

const router = require('express').Router();


router.get('/category', async (req: any, res: any) => {
    const categoryes = await category.find({})
    res.json({ items: categoryes.map(el => ({ title: el.title, description: el.description , id : el._id})) });
});

router.post('/category', async (req: any, res: any) => {

    let newCaategory = new category({
        title: req.body.title,
        description: req.body.description
    })

    await newCaategory.save()
    res.end()

});

export default router