/* Routes Items
    host + /api/items
*/

const { Router } = require('express');
const router = Router();

const { _items } = require('../controllers/items');

//const httpApi = fetch('https://api.mercadolibre.com/sites/MLA/search?q=:query')
  //.then(res => res.json())
  //.then(data => console.log(data))


router.get('/', _items);



module.exports = router;