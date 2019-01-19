var m,c;
var xs,ys,tfxs,tfys;

$(document).ready(function(){

xs=[];
ys=[];
tfxs=tf.tensor1d(xs);
tfys=tf.tensor1d(ys);

});
console.log(xs)
function run () {


    m=tf.variable(tf.scalar(Math.random()*1));
    c=tf.variable(tf.scalar(Math.random()*1));

    function predict(nums){
        let x = tf.tensor1d(nums);
        let y = x.mul(m).add(c);
        return y;
    }

    var optimizer = tf.train.adam(0.1);
    
    function loss(pred,labels){
        return pred.sub(labels).square().mean();
    }
    function call(){
        optimizer.minimize(()=>loss(predict(xs),(ys)));
        m.print()
    }
    for(let i=0;i<250;i++){
        call();
    }
    document.body.innerHTML="the equation of this line is: y = "+Math.round(Math.round(m.dataSync()*100)/10)/10+"x + "+Math.round(Math.round(c.dataSync()*100)/10)/10;
}