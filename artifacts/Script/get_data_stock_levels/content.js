let body = req.body;

const data = await entities.stock_levels.createQueryBuilder("stocklevels")
    .leftJoinAndSelect("warehouse_areas", "warehouse_areas", "stocklevels.area_id = warehouse_areas.id")
    .leftJoinAndSelect("warehouses", "warehouses", "stocklevels.warehouse_id = warehouses.id")
    .where("stocklevels.product_id = :productid", {productid : body.productid})    
    .offset(body.offsetValue)
    .limit(body.limitValue)
    .getRawMany()

    //console.log(JSON.stringify(data));

    result = data;

    console.log(result);

    complete();
