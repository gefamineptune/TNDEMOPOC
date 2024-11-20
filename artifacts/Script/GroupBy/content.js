/* 
    This code snippet counts the entities that match the given options, e.g.
*/
let body = req.body;

const count = await entities.request_orders.createQueryBuilder("ro")
        .where("ro.status = :status" , {status : body.status})
        .getCount()

let resultTemp = {"count" : count}
        result = resultTemp;
console.log(count);
complete()

