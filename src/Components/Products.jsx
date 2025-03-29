import React from 'react';
import Syl from '../assets/Syl.png';
import Lol from '../assets/Lol.png';
// import Data from '../Data.js'

const Products = () => {
  return (
    <div class="container">

  <div class="card">
    <img class="card__img" src="https://img.freepik.com/free-photo/office-chair-still-life_23-2151149087.jpg?t=st=1736266438~exp=1736270038~hmac=cd9f8e6648e074dcdb3b2aea2041191db0a8fadfc020e699d114e5b0e95210df&w=360"/>
    <div class="card__info">
      <h3 class="card__heading">
        Suspendisse tincidunt
      </h3>
      <div class="card__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta dui dapibus tellus varius, ac mollis metus vulputate.
      </div>
    </div>
  </div>

  <div class="card">
    <img class="card__img" src="https://img.freepik.com/free-photo/office-chair-still-life_23-2151149097.jpg?t=st=1736266284~exp=1736269884~hmac=a5a3ad55df180d4853df1304161deb1f8f56d3eb2c340afe7d4edd0793ab5997&w=360"/>
    <div class="card__info">
      <h3 class="card__heading">
        Suspendisse tincidunt
      </h3>
      <div class="card__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta dui dapibus tellus varius, ac mollis metus vulputate.
      </div>
    </div>
  </div>

</div>
  );
};

export default Products;
