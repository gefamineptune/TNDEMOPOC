let body = req.body;

const data = await entities.stock_opname_details.createQueryBuilder("sod")
    .innerJoinAndSelect("stock_opname_sessions", "sos", "sod.session_id = sos.id")
    .innerJoinAndSelect("products", "p", "sod.product_id = p.id")
    .where("sod.session_id = :sessionId", {sessionId: body.sessionId})
    .getRawMany()

// console.log(data);

result = data;

complete();