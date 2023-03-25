fetch(
  'https://api.thingspeak.com/channels/2058729/feeds.json?api_key=JKS60LALT0GFX6S4&results=2'
)
  .then((response) => {
    console.log('Response', response);
    return response.json();
  })
  /* .then((data) => console.log(data)) */
  .then((data) => {
    console.log(data['feeds'][0].field1);
    console.log(data['feeds'][0].field2);
    console.log(data['feeds'][0].field3);
    console.log(data['feeds'][0].field4);

    var field1 = data['feeds'][0].field1;
    var field2 = data['feeds'][0].field2;
    var field3 = data['feeds'][0].field3;
    var field4 = data['feeds'][0].field4;

    let temp = document.getElementById('temp-value');
    let ph = document.getElementById('ph-value');
    let turb = document.getElementById('turb-value');
    let cond = document.getElementById('cond-value');
    temp.innerText = field1
    ph.innerText = field2
    turb.innerText = field3
    cond.innerText = field4
  })
  .catch((error) => console.log('Error', error));
