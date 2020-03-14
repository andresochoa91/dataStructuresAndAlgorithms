function compressBoxesTwice(boxes, boxes2) { 
    boxes.forEach(box => {  //O(n)
        console.log(box);   //O(n)
    });
                                    //Different loops                                    
    boxes2.forEach(box => { //O(m)
        console.log(box);   //O(m)
    });
}
compressBoxesTwice([1, 2, 3], [4, 5, 6, 7, 8, 9])

//O(2n + 2m)
//O(n + m)