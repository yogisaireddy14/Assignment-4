const btn = document.getElementById("btn-1");
btn.addEventListener("click",async ()=>{
    // Promise
find()
.then((data) =>{

    let i = 10;
    const parent = document.getElementById("main")
    const child = document.getElementById("div1")
    if(parent.contains(child)){
        // console.log("yes");
        for(let n=1;n<=10;n++){
            parent.removeChild(document.getElementById(`div${n}`));
        }
    }

while (i-- > 0) {
    let new1 = document.createElement('div');
    new1.className = 'div-1';
    new1.setAttribute("id", `div${i + 1}`);

    let new2 = document.createElement('section');
    new2.className = 'sec-1';
    new2.setAttribute("id", `sec${i}`);

    let new3 = document.createElement('section');
    new3.className = 'sec-1_sec-1';
    new3.setAttribute("id", `sec-1_sec-1${i}`);

    let new4 = document.createElement('section');
    new4.className = 'add';
    new4.setAttribute("id", `add${i}`);

    let new5 = document.createElement('img');
    new5.setAttribute("id", `img${i}`);
    new5.className = 'img-0'; 
    new5.src = data[i].img; 
    let new6 = document.createElement('a');
    new6.href = data[i].link; 
    new6.textContent = "Watch Recipe";
    new6.className = 'link';
    new6.className = 'a';
    new6.setAttribute("target", "_blank");

    let new7 = document.createElement('button');
    new7.className = 'btn-2';
    new7.setAttribute("id", `btn${i}`);
    
    let newBox = document.createElement('h3');
    newBox.className = 'title';
    newBox.textContent = data[i].name;

    document.getElementById('main').appendChild(new1);
    new1.appendChild(new2); 
    new1.appendChild(new7); 
    new2.appendChild(new3); 
    new3.appendChild(new4); 
    new4.appendChild(newBox);
    new4.appendChild(new5); 
    new7.appendChild(new6); 
}
})
.catch(err =>{
    let title = document.getElementsByClassName("title")[0];
    title.textContent = err;
});

});

function find(){
    return new Promise((resolve, reject) => {
        let items = [];
        setTimeout(async () => {
            let n = 9;
        while(n-- > 0){
            let url = `https://www.themealdb.com/api/json/v1/1/random.php`;
            let data = await fetch(url);
            let {meals} = await data.json();
            let item = {
                name : meals[0].strMeal,
                img : meals[0].strMealThumb,
                link : meals[0].strYoutube
            }
            items.push(item);
        }
        let url = `https://www.themealdb.com/api/json/v1/1/random.php`;
            let data = await fetch(url);
            let {meals} = await data.json();
            let item = {
                name : meals[0].strMeal,
                img : meals[0].strMealThumb,
                link : meals[0].strYoutube
            }
            items.push(item);
            console.log(items);
        if (data.ok) {
            resolve(items);
        } else {
            reject(`data.error`);
          }
        }, 1000);
      });
}