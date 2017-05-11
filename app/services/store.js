import Ember from 'ember';
import LineItem from 'woodland/models/line-item';
import LineItem from 'woodland/models/order';
import LineItem from 'woodland/models/product';

const products = [
  Product.create({title: 'Tent', price: 10, description: ""}),
  Product.create({title: 'Sleeping Bag', price: 5, description: ""}),
  Product.create({title: 'Flashlight', price: 2, description: ""}),
  Product.create({title: 'First-Aid', price: 3, description: ""})
];

const orders = [
  Order.create({ id: '1234', name: "Lauris Blīgzna"
    items: [
      LineItem.create({product: products[0], quantity: 1}),
      LineItem.create({product: products[1], quantity: 1}),
      LineItem.create({product: products[2], quantity: 0}),
      LineItem.create({product: products[3], quantity: 0}),
    ]
  })
]

export default Ember.Service.extend({
  getOrderById(id){
    const orders = this.getOrders();
    return orders.findBy('id', id)
  },
  getOrders(){
    return [
      {id: 1, name: 'Lauris'},
      {id: 2, name: 'Greg'}
    ];
  },
  getProducts() { rerutn products; }
});
