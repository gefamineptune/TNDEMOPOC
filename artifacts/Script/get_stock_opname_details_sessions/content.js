const data = await entities.stock_opname_details.createQueryBuilder("sod")
    .innerJoinAndSelect("stock_opname_sessions", "sos", "sod.session_id = sos.id")
    .select("DISTINCT sod.session_id", "session_id")
    .getRawMany()

console.log(data);

result = data;

complete();