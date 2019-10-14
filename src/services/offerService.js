// import axios from 'axios'

var dummyOfferData = {
  restaurants:
  [
    {
      name: 'Sangeetha',
      category: 'South Indian',
      imageUrl: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rwleaxshsdmi9o9zy8yt',
      rating: '4.4',
      cuisines:
          [
            'South Indian',
            'North Indian',
            'Chinese'
          ],
      discounts:
          [
            {
              type: 'Percentage',
              description: null
            }
          ]
    },
    {
      name: 'Maggi Shop',
      category: 'Fast Food',
      imageUrl: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/w61xwrpworrnvpakjg0o',
      rating: '4.2',
      cuisines:
          [
            'Fast Food'
          ],
      discounts:
          [
            {
              type: 'Percentage',
              description: null
            },
            {
              type: 'Freebie',
              description: null
            }
          ]
    },
    {
      name: 'American Eats',
      category: 'Fast Food',
      imageUrl: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cushgjkny8igkp2fpyvy',
      rating: '3.8',
      cuisines:
          [
            'Juices',
            'American',
            'Mexican'
          ],
      discounts: [ ]
    }
  ],
  coupons:
  [
    {
      title: 'Get 20% discount using Citi Bank Cards',
      type: 'Regular',
      code: 'CITIFOODIE',
      imageUrl: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/c8rijyftetnv3kgatbbt',
      details:
          [
            'Offer valid twice per user per month',
            'Maximum discount is Rs.200 only',
            'Offer valid on a minimum cart value of Rs.600',
            'Offer valid till Oct 31, 2019 23:59 PM'
          ]
    },
    {
      title: 'Get 50% cashback using LazyPay',
      type: 'Regular',
      code: '150LAZYPAY',
      imageUrl: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/kj4khfwj6knnkskw4df3',
      details:
          [
            'Offer valid once per user on a minimum cart value of Rs.199',
            'Maximum cashback amount is Rs.150',
            'Offer valid on Thursday to Sunday',
            'Offer valid till Oct 31, 2019 23:59 PM'
          ]
    },
    {
      title: 'Get 10X reward points on HDFC Bank Diners Club Credit Cards',
      type: 'Bank',
      code: null,
      imageUrl: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/hdfc_edwzub',
      details:
          [
            'Valid on a minimum cart value of Rs.150',
            'Valid only on HDFC Bank Diners Club Credit Cards',
            'Offer valid till 31st December 2018'
          ]
    }
  ]

}

var dummyPromise = Promise.resolve(dummyOfferData)

// dummyPromise.then(function (value) {
//   console.log(value)
//   // expected output: 123
// })

// export default axios.create({

// })

export default dummyPromise
