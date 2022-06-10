document.querySelector('#ewallet-form').addEventListener('submit',
    function(e) {
    e.preventDefault();
    console.log('submit');
    const type= document.querySelector('.add__type').value;
    const desc= document.querySelector('.add__description').value;
    const value= document.querySelector('.add__value').value;
    console.log(type, desc, value);

    const newHtml = `<div class="item">
          <div class="item-description-time">
            <div class="item-description">
              <p>${desc}</p>
            </div>
            <div class="item-time">
              <p>25 Feb, 06:45 PM</p>
            </div>
          </div>
          <div class="item-amount expense-amount">
            <p>${type}$${value}</p>
          </div>`
        console.log(newHtml);
    const collection = document.querySelector('.collection');
    collection.insertAdjacentHTML('afterbegin', newHtml);
    });



// <div className="item">
//     <div className="item-description-time">
//         <div className="item-description">
//             <p>Buy a physics book</p>
//         </div>
//         <div className="item-time">
//             <p>25 Feb, 06:45 PM</p>
//         </div>
//     </div>
//     <div className="item-amount expense-amount">
//         <p>-$78</p>
//     </div>