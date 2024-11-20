let body = req.body;

const data = await entities.request_orders.createQueryBuilder("ro")
    .innerJoinAndSelect("customers", "requested", "requested.id = ro.requested_by")
    .innerJoinAndSelect("products", "product", "product.id = ro.product_id")
    // .innerJoinAndSelect("customers", "customer", "customer.id = ro.fulfilled_by")
    // .where("event.start_price = :start_price", {start_price : 100000})
    .select([
        'ro',
        'requested.name as requestedname',
        'product.name as productname',
        'product.SKU as productSKU',
    ])
    .offset(body.offsetValue)
    .limit(body.limitValue)
    .getRawMany()

result = data;

console.log(result);

complete();