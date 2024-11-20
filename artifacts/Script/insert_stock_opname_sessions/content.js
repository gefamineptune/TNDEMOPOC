const crypto = modules.crypto;
const body = req.body;

let UUID = crypto.randomUUID();

await entities.stock_opname_sessions.createQueryBuilder()
    .insert()
    .values({
        "id" : UUID,
        "warehouse_id": body.warehouseId,
        "area_id": body.areaId,
        "conducted_by": body.conductedBy,
        "session_date": body.sessionDate,
        "status": body.status,
        "createdBy" : body.createdBy,
        "updatedBy" : body.updatedBy
    })
    .execute();

let resultTemp = {"UUID" : UUID};

// await entities.stock_opname_sessions.createQueryBuilder()
//     .insert()
//     .values({
//         "id" : UUID,
//         "warehouse_id" : "46107f60-5b9b-4747-a689-5a31cebbf226",
//         "area_id" : "cdfab411-8b38-4eb2-a311-8f5681e653d7",
//         "conducted_by" : "5c14e350-cb06-468b-9aff-7cedb15ea444",
//         "session_date" : "2024-09-28",
//         "status" : "On Progress",
//         "createdBy" : "admin",
//         "updatedBy" : "admin"
//     })
//     .execute();

result = resultTemp;

complete();