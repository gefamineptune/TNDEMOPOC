let body = req.body;

const data = await entities.products.createQueryBuilder("product")
    .innerJoinAndSelect("barcode", "barcode", "barcode.product_id = product.id")
    // .where("event.start_price = :start_price", {start_price : 100000})
   
    .offset(body.offsetValue)
    .limit(body.limitValue)
    .getRawMany()

result = data;

console.log(result);

complete();

