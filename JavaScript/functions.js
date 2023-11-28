
function fact(n){
    let ans = 1 ;

    for(let i=1 ;i<=n;i++){
        ans = ans * i;
    }

    return ans;
}

// let ans = fact(5);

// console.log(ans);

function printFib(n){
    let ft = 0 ;
    let st = 1 ;

    for(let i=1;i<=n;i++){
        console.log(ft);
        let tt = ft + st ;

        ft = st ;
        st = tt ;
    }
}

let ans = printFib(5);

console.log(ans);