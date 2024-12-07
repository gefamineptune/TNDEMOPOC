var username = req.user.username;

await entities.users.createQueryBuilder()
    .insert()
    .values(
        {
            "username": username,
            "createdBy" : username,
            "updatedBy" : username        
        }
        )
    .execute();

complete();