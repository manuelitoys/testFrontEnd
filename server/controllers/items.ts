const { response } = require('express');

const items = (req: any, res: any = response) =>{
    
  res.json({
    author: {
        name: "Manuel",
        lastname: "Rodriguez"
    },
    categories: [],
    items: [
        {
            id: '',
            title: '',
            price: {
                currency: '',
                amount: 123,
                decimals: 123
            },
            picture: '',
            condition: '',
            free_shipping: false
        }
    ]
  })
    
}

module.exports = {
    _items: items,
}