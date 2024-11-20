const {sum} = await entities.stock_levels.createQueryBuilder("sl")
    .select("SUM(sl.quantity)", "sum")
    .getRawOne();

    let resultTemp = {"count" : sum}
        result = resultTemp;

console.log(result)

complete();