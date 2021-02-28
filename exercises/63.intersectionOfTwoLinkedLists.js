var getIntersectionNode = function(headA, headB) { 
    const cache = new Set();

    const traverse = (node, h) => {
        if (!node) {
            cache.add(node);
            return null;
        } else {
            if (h === "h1") {
                cache.add(node);
            } else {
                if (cache.has(node)) {
                    return(node);
                }
            }
            return traverse(node.next, h);
        }
    };

    traverse(headA, "h1");
    return traverse(headB, "h2");
};

const inter = {
    value: 8,
    next: {
        value: 4,
        next: {
            value: 5,
            next: null
        }
    }
};

const linkedList1 = {
    value: 4,
    next: {
        value: 1,
        next: inter  
    }
};

const linkedList2 = {
    value: 5,
    next: {
        value: 6,
        next: {
            value: 1,
            next: inter
        }  
    }
};

console.log(getIntersectionNode(linkedList1, linkedList2));

