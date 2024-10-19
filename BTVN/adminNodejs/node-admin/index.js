const express = require('express')
const app = express()
const bodyParser = require("body-parser")

const port = 3000


const data = {
    "categories": [
      {
        "name": "Thinkpad P10",
        "short_name": "ádf",
        "order_num": "hello",
        "id": 1
      },
      {
        "name": "Thinkpad P10",
        "short_name": "ádf",
        "order_num": "hello",
        "id": 2
      },
      {
        "name": "Thinkpad P10",
        "short_name": "ádf",
        "order_num": "hello",
        "id": 3
      },
      {
        "name": "Thinkpad P10",
        "short_name": "ádf",
        "order_num": "hello",
        "id": 4
      }
    ],
    "products": [
      {
        "name": "Product 123",
        "category_id": "234",
        "order_num": 1,
        "id": 1
      },
      {
        "id": 2,
        "name": "Product 3",
        "category_id": "3",
        "order_num": "32"
      },
      {
        "id": 3,
        "name": "Product 4",
        "category_id": "4",
        "order_num": "c4"
      }
    ]
  }
app.use(bodyParser.json())
//category
app.get('/', (req, res) => {
    console.log("hello nè");
  res.send('Bài tập về nhà: Xây dựng api!')
})

app.get("/admin/category", (req, res)=>{
    res.send(data.categories)
})
app.get("/admin/category/:id", (req, res)=>{
    const {id} = req.params
    console.log("id",id);
    res.send(data.categories.filter(item=>item.id === Number(id)))
})
app.post("/admin/category/", (req, res)=>{
    console.log("vào đây",req.body);
    const newCategory = {...req.body,id:data.categories.length+ 1}
    data.categories.push(newCategory)
    res.send(newCategory)
})
app.put("/admin/category/:id", (req, res)=>{
    const {id} = req.params
    console.log("id",id);
    const categoryIndex = data.categories.findIndex(item=>item.id ===Number(id))
    console.log("categoryIndex",categoryIndex);

    data.categories[categoryIndex] = req.body
    res.send(req.body)
})

app.delete("/admin/category/:id", (req, res)=>{
    const {id} = req.params
    console.log("id",id);
    const newCategories =  data.categories.filter(item=>item.id !== Number(id))
    data.categories = newCategories
    res.send(`Bạn đã xóa phần tử có id là ${id}`)
})

//product
app.get('/', (req, res) => {
    console.log("hello nè");
  res.send('Bài tập về nhà: Xây dựng api!')
})

app.get("/admin/product", (req, res)=>{
    res.send(data.products)
})
app.get("/admin/product/:id", (req, res)=>{
    const {id} = req.params
    console.log("id",id);
    res.send(data.products.filter(item=>item.id === Number(id)))
})
app.post("/admin/product/", (req, res)=>{
    console.log("vào đây",req.body);
    const newProduct = {...req.body,id:data.products.length+ 1}
    data.products.push(newProduct)
    res.send(newProduct)
})
app.put("/admin/product/:id", (req, res)=>{
    const {id} = req.params
    console.log("id",id);
    const productIndex = data.products.findIndex(item=>item.id === Number(id))    

    console.log("productIndex",productIndex);
    data.products[productIndex] = req.body
    res.send(req.body)
})

app.delete("/admin/product/:id", (req, res)=>{
    const {id} = req.params
    console.log("id",id);
    const newProduct =  data.categories.filter(item=>item.id !== Number(id))
    data.products = newProduct
    res.send(`Bạn đã xóa phần tử có id là ${id}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})