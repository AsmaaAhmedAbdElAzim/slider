// // var imgList = document.querySelectorAll('.item img');
// // var lightboxcontainer=document.querySelector('.lightboxcontainer');
// // var lightboxitem=document.querySelector('.lightboxitem');
// // // console.log(imgList);
// // // console.log(lightboxcontainer);
// // // console.log(lightboxitem);
// // var closeBtn = document.getElementById('closeBtn')

// // for(var i=0;i<imgList.length;i++){
// //     imgList[i].addEventListener('click',function(eventInfo){
// //         var imgSrc = eventInfo.target.getAttribute('src');
// //         lightboxitem.style.backgroundImage=`url(${imgSrc})`;
// //         lightboxcontainer.classList.replace('d-none','d-flex');




// //     })
// // }
// // closeBtn.addEventListener('click',function(){
// //     lightboxcontainer.classList.replace('d-flex','d-none');
// // })

var allItems=Array.from(document.querySelectorAll('.item img'));
var lightboxcontainer =document.querySelector('.lightboxcontainer');
var lightboxitem =document.querySelector('.lightboxitem');
var closeBtn=document.getElementById('closeBtn');
var nextBtn = document.getElementById('nextBtn');
var prevBtn =document.getElementById('prevbtn');
var indexCuurent;

console.log(lightboxcontainer);
console.log(allItems);
console.log(closeBtn);

for(var i=0 ;i<allItems.length ;i++){
    allItems[i].addEventListener('click',function(e){
        var imgSrc = e.target.getAttribute('src');
        indexCuurent= allItems.indexOf(e.target);
        console.log(indexCuurent);
        lightboxitem.style.backgroundImage=`url(${imgSrc})`;
        lightboxcontainer.classList.replace('d-none','d-flex');
    })
}


closeBtn.addEventListener('click',function(){
    lightboxcontainer.classList.replace('d-flex','d-none')
})
document.addEventListener('keydown',function(e){
    if(e.code == 'Escape'){
        lightboxcontainer.classList.replace('d-flex','d-none') 
    }
})


nextBtn.addEventListener('click',function(){
     indexCuurent++;
     if(indexCuurent > allItems.length -1){
        indexCuurent = 0
     }
     console.log( indexCuurent);
     var imgSrc = allItems[indexCuurent].getAttribute('src');
     lightboxitem.style.backgroundImage=`url(${imgSrc})`

})

prevBtn.addEventListener('click',function(){
    indexCuurent--;
    if(indexCuurent < 0){
        indexCuurent = allItems.length -1
    }
    var imgSrc = allItems[indexCuurent].getAttribute('src');
    lightboxitem.style.backgroundImage =`url(${imgSrc})`
})





