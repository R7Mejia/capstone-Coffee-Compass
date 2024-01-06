import React from 'react'
import { useState } from 'react'




function Container() {
    const [search, setSearch] = useState()

    const handleSearch = () => {
    search(setSearch())
}
  return (
      <>
          <header></header>
          <h3>COFFEE COMPASS</h3>
          <div className="container">
              

              <div className="search-bar">
                  <input
                      type="text"
                      placeholder="Search"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                  />
                  <button onClick={handleSearch}>Search</button>
              </div>

              <img className="featureImg" src="#" alt="Featured image" />

              <div className="featured">
                  <h3>Featured Coffee Shop/Drink</h3>
                  <p>Description of the featured coffee shop/drink</p>
                  <button>Order Now</button>
              </div>

              <div className="nearby">
                  <h2>Nearby Coffee Shops</h2>
              </div>
                  <div className="recommended">
                  <div>
                     <p>...here should go a bootstrap or whatever carousel/slide</p>
                      <button>Order Now</button>
                      </div>
              </div>
              <br />
              <aside>
                  <div className="popular">
                      <h2>Popular Drinks</h2>

                      <div className="drink">
                          <h3>Drink Name</h3>
                          <p>Description of the drink</p>
                          <button>Order Now</button>
                      </div>

                      <div className="drink">
                          <h3>Drink Name</h3>
                          <p>Description of the drink</p>
                          <button>Order Now</button>

                      </div>
                      <div className="drink">
                          <h3>Drink Name</h3>
                          <p>Description of the drink</p>
                          <button>Order Now</button>
                      </div>
                  </div>

              </aside>
              <br />
<body className='middle'>
                  <div class="container-two">
                      <div class="header-two">Coffee Shop/Drink Name</div>
                      <div class="info">Address: 123 Main St, City, State Zip | Phone: (123) 456-7890 | Hours: Mon-Fri 7am-5pm</div>

                      <div class="menu">
                          <table>
                              <tr>
                                  <th><bold>Drink Name</bold></th>
                                  <th>Price</th>

                              </tr>
                              <tr>
                                  <td>""</td>
                                  <td>$</td>
                                  <button>Order Now</button>
                              </tr>
                              <tr>
                                  <td>""</td>
                                  <td>$</td>
                                  <button>Order Now</button>
                              </tr>
                              <tr>
                                  <td>"" </td>
                                  <td>$</td>
                                  <button>Order Now</button>
                              </tr>
                          </table>
                      </div>
                      <br />
                  </div>
                  <div class="reviews">
                      <h2>Reviews</h2>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod diam id blandit bibendum.
                      <button>Leave a Review</button>
                  </div>
</body>
             
              <footer>
                  <div class="container-three">
                      <div class="cart">
                          <h1>Cart</h1>
                          <table>
                              
                              <tr>
                                  <th>Drink Name</th>
                                  <th>Price</th>
                                  <th>Quantity</th>
                                  <button class="remove">Remove</button>
                              </tr>
                              
                              <tr>
                                  <td>Cafe</td>
                                  <td>$5.00</td>
                                  <td>1</td>
                                  <button class="remove">Remove</button>
                              </tr>
                              <tr>
                                  <td>Cafe 2</td>
                                  <td>$5.00</td>
                                  <td>1</td>
                                  <button class="remove">Remove</button>
                              </tr>
                          </table>
                          <button class="checkout">Checkout</button>
                      </div>
                      <br />
                      <div class="payment">
                          <h1>Payment</h1>
                          <form>
                              <label for="card-number">Card Number</label>
                              <input type="text" id="card-number" name="card-number" placeholder="1234 5678 9012 3456"/>
                                  <label for="expiration-date">Expiration Date</label>
                                  <input type="text" id="expiration-date" name="expiration-date" placeholder="MM/YY"/>
                                      <label for="cvv">CVV</label>
                                      <input type="text" id="cvv" name="cvv" placeholder="123"/>
                                          <label for="delivery">Delivery Option</label>
                                          <input type="text" id="delivery" name="delivery" placeholder="Delivery or Pickup"/>
                                              <button type="submit" class="submit">Submit</button>
                                          </form>
                                      </div>
                                      <div class="confirmation">
                                          <h1>Order Confirmation</h1>
                                          <p>Your order has been confirmed. Estimated delivery/pickup time: 30 minutes.</p>
                                      </div>
                                  </div>

              </footer>
          </div>


          {/* <div className="container">
              <img src="#" alt="logo" />
                  <div className="search-bar">
              
              <nav>
              <ul>
                  <li>Coffee Compass</li>
                  <li>one</li>
                  <li>two</li>
                      <input
                          type="text"
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          placeholder="Search..."
                      />
                  <button onClick={handleSearch}>Search</button>
                  </ul>
                  </nav>
              </div>
              <img src="../UniCafe.png" alt="***" />
          </div> */}
          </>
  )
}

export default Container