const data = await entities.stock_levels.createQueryBuilder("sl")
    .innerJoinAndSelect("products", "p", "sl.product_id = p.id")
    .select("sl.product_id", "productId")
    .addSelect("p.name", "productName")
    .addSelect("SUM(sl.quantity)", "totalQuantity")
    .addSelect("p.image_path", "image_path")
    .groupBy("sl.product_id")
    .groupBy("productId")
    .addGroupBy("p.name")
    .addGroupBy("productName")
    .orderBy("totalQuantity", "DESC")
    .limit(5)
    .getRawMany()

    result = data;

    console.log(data);
    complete()