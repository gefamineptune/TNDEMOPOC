let body = req.body;

const data = await entities.stock_levels.createQueryBuilder("sl")
    .innerJoinAndSelect("products", "p", "sl.product_id = p.id")
    .where("sl.warehouse_id = :warehouseId", {warehouseId : body.warehouseId})
    .andWhere("sl.area_id = :areaId", {areaId : body.areaId})
    .getRawMany()

// console.log(data);

let resultTemp = data;

result = resultTemp;

complete();